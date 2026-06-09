# 📍 Geocodificador Híbrido - SER&TEC

Portal web para geocodificación automática de archivos REAP y OML para ArcGIS Web App Builder.

**Región:** Salta y Jujuy, Argentina

---

## ✨ Características

- ✅ **Múltiples formatos:** Soporte REAP (.txt) y OML (.csv)
- ✅ **Geocodificación dual:** Base de datos local + API Nominatim
- ✅ **Múltiples archivos:** Carga y consolida 10+ archivos en 1 CSV
- ✅ **Preview en tiempo real:** Visualiza antes de descargar
- ✅ **Trimming de columnas:** Elimina datos basura automáticamente
- ✅ **Formato flexible:** Exporta con punto o coma decimal
- ✅ **Branding SER&TEC:** Diseño profesional responsive

---

## 🚀 Uso

### Online (Netlify)
```
https://geocodificador-serytec.netlify.app
```

### Local
1. Clonar repositorio
2. Abrir `public/index.html` en navegador
3. Cargar archivos REAP/OML
4. Procesar y descargar CSV

---

## 📂 Estructura del Proyecto

```
geocodificador-arcgis/
├── README.md                              ← Este archivo
├── netlify.toml                           ← Configuración Netlify
├── package.json                           ← Dependencias
├── .gitignore                             ← Archivos ignorados
│
├── public/
│   ├── index.html                         ← Portal principal
│   └── LogoST.png                         ← Logo SER&TEC
│
└── netlify/
    └── functions/
        └── geocodificar.js                ← API proxy Nominatim
```

---

## 🔧 Instalación Local

### Requisitos
- Node.js 14+
- Git

### Pasos

```bash
# 1. Clonar
git clone https://github.com/rcarrazana-serytec/geocodificador-arcgis.git
cd geocodificador-arcgis

# 2. Instalar dependencias (si es necesario)
npm install

# 3. Desarrollo local
netlify dev
# Accede a http://localhost:8888

# 4. Build para producción
npm run build
```

---

## 📊 Maestro de Localidades

El sistema incluye 40 localidades de Salta y Jujuy con coordenadas pre-cargadas.

**Localidades soportadas:**
- SALTA, PICHANAL, SAN SALVADOR DE JUJUY
- AGUARAY, HIPOLITO IRIGOYEN, METAN
- TARTAGAL, PALPALA, ORAN
- ... y 31 más

Para agregar más localidades, edita `public/index.html` en la sección `coordenadaLocalidades`.

---

## 🔄 Flujo de Uso

```
1. Arrastra archivo(s) REAP/OML
           ↓
2. Sistema detecta formato automáticamente
           ↓
3. Selecciona modo:
   • Rápido (BD Local)
   • Preciso (API Nominatim)
           ↓
4. Preview CSV antes de descargar
           ↓
5. Descarga CSV listo para ArcGIS
```

---

## 🎯 Especificaciones CSV Exportado

| Campo | Origen | Formato |
|-------|--------|---------|
| [Columnas Originales] | Archivo REAP/OML | Tal cual |
| X (Longitud) | Calculado | Punto (.) o Coma (,) |
| Y (Latitud) | Calculado | Punto (.) o Coma (,) |

**Separador:** Punto y coma (`;`)
**Encoding:** UTF-8

---

## 🚢 Deployment

### Netlify (Automático)

```bash
# 1. Push a GitHub
git add .
git commit -m "Update geocodificador"
git push

# 2. Netlify deploya automáticamente desde main branch
# Accede a https://geocodificador-serytec.netlify.app
```

### Configuración Netlify
- **Build command:** (ninguno, solo archivos estáticos)
- **Publish directory:** `public`
- **Functions:** `netlify/functions`

---

## 🔐 Variables de Entorno

No requiere variables de entorno. Las funciones serverless usan:
- API Nominatim (pública, sin key)
- CORS habilitado en Netlify

---

## 📝 Cambios Recientes

### v1.2.0
- ✅ Soporte múltiples archivos
- ✅ Trimming de columnas en preview
- ✅ Mejora en debugging

### v1.1.0
- ✅ Preview del CSV antes de descargar
- ✅ Formato decimal flexible
- ✅ Eliminación de columnas basura

### v1.0.0
- ✅ Soporte REAP + OML
- ✅ Geocodificación básica
- ✅ Exportación CSV

---

## 🐛 Troubleshooting

### "No se cargan archivos"
1. Abre Consola (F12)
2. Verifica que no haya errores JavaScript
3. Intenta con otro navegador

### "Coordenadas vacías"
1. Verifica que la localidad esté en el maestro
2. Compara mayúsculas/minúsculas exactamente
3. Agrega la localidad si no existe

### "CSV no abre en Excel"
1. Cambia formato decimal a "Coma (,)"
2. Verifica encoding UTF-8

---

## 📞 Soporte

**Email:** soporte@serytec.com.ar
**Teléfono:** +54 381 XXX-XXXX
**Región:** Tucumán, Argentina

---

## 📄 Licencia

© 2025 SER&TEC SAS - Todos los derechos reservados

---

## 👥 Autor

**Desarrollado por:** SER&TEC SAS
**Mantenedor:** Team Tecnología

---

**Última actualización:** Junio 2025
