# 📤 GUÍA: Cómo Subir a GitHub

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `geocodificador-arcgis`
3. Descripción: `Geocodificador Híbrido para ArcGIS - SER&TEC`
4. Selecciona: **Public** (para Netlify)
5. NO inicialices README (ya lo tenemos)
6. Click en **Create repository**

---

## Paso 2: Configurar Git Localmente

Abre terminal/cmd en la carpeta `geocodificador-arcgis` y ejecuta:

```bash
# Inicializar git
git init

# Agregar origin
git remote add origin https://github.com/rcarrazana-serytec/geocodificador-arcgis.git

# Cambiar a rama main
git branch -M main
```

---

## Paso 3: Primer Commit y Push

```bash
# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit: Geocodificador v1.2.0"

# Push a GitHub
git push -u origin main
```

Si pide autenticación:
- Usa tu **usuario de GitHub**
- Como contraseña, usa un **Personal Access Token** (no la contraseña)
  - Crea uno en: https://github.com/settings/tokens

---

## Paso 4: Conectar con Netlify (Deploy Automático)

1. Ve a https://app.netlify.com
2. Click en **New site from Git**
3. Conecta tu GitHub
4. Selecciona repositorio: `geocodificador-arcgis`
5. Configuración:
   - **Branch to deploy:** main
   - **Build command:** (dejar en blanco)
   - **Publish directory:** public
6. Click en **Deploy site**

Netlify automáticamente:
- Desplegará cada push a main
- Te dará una URL como: `https://geocodificador-XXXX.netlify.app`

---

## Paso 5: Cambios Futuros

Cada vez que hagas cambios:

```bash
# Editar archivos
# (ej: agregar más localidades a index.html)

# Ver cambios
git status

# Agregar cambios
git add .

# Commit con descripción clara
git commit -m "Feature: Agregar localidades de Catamarca"

# Push (Netlify desplegará automáticamente)
git push origin main
```

---

## Paso 6: Estructura Final en GitHub

Tu repositorio lucirá así:

```
geocodificador-arcgis/
├── README.md                          ← Documentación
├── .gitignore                         ← Archivos ignorados
├── netlify.toml                       ← Configuración
├── package.json                       ← Info del proyecto
│
├── public/
│   ├── index.html                     ← Portal web
│   └── LogoST.png                     ← Logo (si existe)
│
└── netlify/
    └── functions/
        └── geocodificar.js            ← API
```

---

## ✅ Verificar Deployment

1. **GitHub:**
   - https://github.com/rcarrazana-serytec/geocodificador-arcgis
   - Deberías ver todos los archivos

2. **Netlify:**
   - https://app.netlify.com
   - Verifica que esté en "Published"
   - URL pública está lista

3. **Portal en vivo:**
   - Abre la URL de Netlify
   - Prueba cargar un archivo

---

## 📝 Workflow Recomendado

```
1. Hacer cambios localmente
   ↓
2. Probar en navegador (abrir index.html)
   ↓
3. Si funciona:
   ↓
4. git add .
   ↓
5. git commit -m "Descripción clara"
   ↓
6. git push origin main
   ↓
7. Netlify despliega automáticamente
   ↓
8. Verificar en URL de Netlify
```

---

## 🚨 Problemas Comunes

### "fatal: Not a git repository"
```bash
git init
git remote add origin https://github.com/rcarrazana-serytec/geocodificador-arcgis.git
```

### "Authentication failed"
- Usa **Personal Access Token** en lugar de contraseña
- https://github.com/settings/tokens

### "Netlify no despliega"
- Verifica que `netlify.toml` tenga `publish = "public"`
- Verifica que `index.html` esté en la carpeta `public`

### "Cambios no se ven en Netlify"
- Espera 30-60 segundos (Deploy puede tardar)
- Recarga con Ctrl+F5 (limpiar caché)
- Verifica en **Netlify > Deploys** el estado

---

## 🎯 URLs Finales

**GitHub:**
```
https://github.com/rcarrazana-serytec/geocodificador-arcgis
```

**Portal en vivo (Netlify):**
```
https://geocodificador-arcgis.netlify.app
(o tu dominio personalizado)
```

---

## 📚 Recursos

- [Git Cheat Sheet](https://github.github.io/training-kit/)
- [GitHub Docs](https://docs.github.com)
- [Netlify Docs](https://docs.netlify.com)

---

¡Listo! 🎉 Tu proyecto estará en GitHub y disponible en línea automáticamente.
