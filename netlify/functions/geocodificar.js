// Netlify Function - Geocodificador API Proxy
// Proxy a Nominatim API para geocodificación precisa

const https = require('https');

exports.handler = async (event, context) => {
  // Manejo de CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  // Solo POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { calle, numero, localidad, provincia } = body;

    // Validar entrada
    if (!localidad) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Localidad requerida' }),
      };
    }

    // Construir query para Nominatim
    let query = localidad;
    if (calle) query += `, ${calle}`;
    if (numero) query += ` ${numero}`;
    if (provincia) query += `, ${provincia}`;
    query += ', Argentina';

    // Llamar a Nominatim
    const result = await geocodificarNominatim(query);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Error en geocodificación',
        message: error.message 
      }),
    };
  }
};

function geocodificarNominatim(query) {
  return new Promise((resolve, reject) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

    https
      .get(url, {
        headers: {
          'User-Agent': 'SER&TEC-Geocodificador/1.0',
        },
      }, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const results = JSON.parse(data);
            if (results && results.length > 0) {
              const result = results[0];
              resolve({
                success: true,
                lat: result.lat,
                lon: result.lon,
                query: query,
              });
            } else {
              resolve({
                success: false,
                message: 'No encontrado',
              });
            }
          } catch (e) {
            reject(e);
          }
        });
      })
      .on('error', (e) => {
        reject(e);
      });
  });
}
