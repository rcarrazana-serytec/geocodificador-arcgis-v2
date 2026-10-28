// Vercel Function - Geocodificador API Proxy
// Proxy a Nominatim API para geocodificación precisa

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';
const USER_AGENT = 'SER&TEC-Geocodificador/1.0';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejo de CORS preflight
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { calle, numero, localidad, provincia } = body;

    // Validar entrada
    if (!localidad) {
      return res.status(400).json({ error: 'Localidad requerida' });
    }

    // 1° intento: dirección completa. 2° intento: solo la localidad
    const street = [numero, calle].filter(Boolean).join(' ').trim();
    if (street) {
      const r = await buscar({ street, city: localidad, state: provincia });
      if (r) return res.status(200).json({ success: true, ...r, precision: 'direccion' });
      await esperar(1100); // límite de 1 req/seg de Nominatim
    }

    const r = await buscar({ city: localidad, state: provincia });
    if (r) return res.status(200).json({ success: true, ...r, precision: 'localidad' });

    return res.status(200).json({ success: false, message: 'No encontrado' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error en geocodificación', message: error.message });
  }
};

async function buscar(campos) {
  const params = new URLSearchParams({ format: 'json', limit: '1', countrycodes: 'ar', country: 'Argentina' });
  for (const [k, v] of Object.entries(campos)) if (v) params.set(k, v);

  const resp = await fetch(`${NOMINATIM_URL}?${params}`, { headers: { 'User-Agent': USER_AGENT } });
  if (!resp.ok) throw new Error(`Nominatim respondió ${resp.status}`);

  const results = await resp.json();
  if (!results.length) return null;
  return { lat: results[0].lat, lon: results[0].lon, query: results[0].display_name };
}

function esperar(ms) {
  return new Promise(r => setTimeout(r, ms));
}
