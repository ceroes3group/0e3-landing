# 0E3 Landing

Landing oficial de **0E3 · Cero Es Tres** para [https://0es3.com.ar](https://0es3.com.ar).

## Stack

- Next.js App Router (export estático)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Firebase Hosting (producción)

## Desarrollo local

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

```powershell
npm run dev              # servidor de desarrollo
npm run build            # build de produccion (export estatico → out/)
npm run build:firebase   # alias de build para deploy Firebase
npm run deploy:hosting   # build + firebase deploy
npm run lint             # eslint
```

## Estructura

```text
src/
  app/                 # layout, metadata, page
  components/          # secciones de la landing
  lib/                 # constantes y utilidades
public/
  logo/                # logo institucional
  icons/               # favicon
  social/              # Open Graph placeholder
out/                   # export estatico (generado, no commitear)
firebase.json          # config Firebase Hosting
.firebaserc            # proyecto y target de deploy
```

## Deploy

### Firebase Hosting (producción — recomendado)

Guía completa: **[docs/DEPLOY-FIREBASE.md](docs/DEPLOY-FIREBASE.md)**

Resumen:

1. Proyecto Firebase: `oe3-institutional`
2. Hosting site: `0es3-com-ar`
3. Build: `npm run build:firebase` → salida en `out/`
4. Deploy: `npm run deploy:hosting`
5. Dominio: `0es3.com.ar`

### Vercel (alternativa)

Guía: **[docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md)**

## Notas

- Sin backend conectado
- Sin formularios reales
- Sin analytics reales
- Sin secretos ni APIs productivas
- Placeholders de LinkedIn y WhatsApp listos para reemplazar

## Marca

- Fondo: `#0E0E11`
- Superficie: `#18181B`
- Acento: `#1E90FF`
- Tipografias: Inter + Space Grotesk
