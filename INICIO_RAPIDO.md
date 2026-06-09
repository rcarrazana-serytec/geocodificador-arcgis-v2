# 🚀 INICIO RÁPIDO

## 📂 Estructura Descargada

```
geocodificador-arcgis/
├── README.md                    ← Lee primero
├── GITHUB_SETUP.md              ← Guía GitHub
├── .gitignore
├── netlify.toml
├── package.json
├── public/
│   └── index.html               ← El portal web
└── netlify/functions/
    └── geocodificar.js          ← API (opcional)
```

---

## ⚡ Pasos Inmediatos

### 1️⃣ Prueba LOCAL
```bash
# Abre esta carpeta en terminal y:
# (En Windows: abre PowerShell aquí)
# (En Mac/Linux: abre terminal)

# Simplemente abre en navegador:
public/index.html
```

### 2️⃣ Personaliza
Edita `public/index.html`:
- Línea ~620: Busca `coordenadaLocalidades`
- Agrega más localidades si necesitas

### 3️⃣ Sube a GitHub
Sigue: **GITHUB_SETUP.md**

### 4️⃣ Deploy en Netlify
Sigue: **GITHUB_SETUP.md** (Paso 4)

---

## ✅ Checklist Antes de Subir

- [ ] Probé `public/index.html` localmente
- [ ] Cargué un archivo REAP/OML de prueba
- [ ] El preview CSV se ve correcto
- [ ] Descargué y abrí el CSV en Excel
- [ ] Creé repositorio en GitHub
- [ ] Cambié `rcarrazana-serytec` por tu usuario si es necesario

---

## 🔧 Cambios Comunes

### Agregar nueva localidad
Edita `public/index.html` línea ~620:
```javascript
const coordenadaLocalidades = {
  'SALTA': {lat: '-24.789322', lon: '-65.410351'},
  'MI_NUEVA_LOCALIDAD': {lat: '-XX.XXXXXX', lon: '-XX.XXXXXX'},  // ← Agregar
  // ...
};
```

### Cambiar logo
Reemplaza `public/LogoST.png` por tu logo (mismo nombre)

### Cambiar colores
Edita `public/index.html` CSS variables línea ~28:
```css
--st-amarillo: #E6A817;  ← Cambiar por tu color
--st-gris: #7A7A7A;
```

### Agregar más campos al CSV
Edita en `public/index.html` la función `generarCSV()`

---

## 📞 Soporte

- **Problema con Git:** Ver GITHUB_SETUP.md
- **Problema con Portal:** Abre F12 > Console para ver errores
- **Problema con Netlify:** Verifica: https://app.netlify.com

---

## 🎯 Próximos Pasos

1. **Local:** Descarga y prueba el portal
2. **GitHub:** Sigue GITHUB_SETUP.md para subir
3. **Netlify:** Deploy automático cuando hagas push
4. **Producción:** Usa la URL de Netlify o tu dominio

---

**¿Preguntas?** Revisa los otros documentos o contacta soporte.
