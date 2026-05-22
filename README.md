# 0E3 Landing

Landing oficial de **0E3 · Cero Es Tres** para [https://0e3.com.ar](https://0e3.com.ar).

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Desarrollo local

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

```powershell
npm run dev      # servidor de desarrollo
npm run build    # build de produccion
npm run start    # servidor produccion
npm run lint     # eslint
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
  mockups/             # reservado para assets futuros
```

## Deploy

### Vercel (recomendado — sin GitHub Actions)

Guía completa: **[docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md)**

Resumen:

1. Crear cuenta en https://vercel.com con GitHub
2. Importar `ceroes3group/0e3-landing`
3. Deploy (Next.js auto-detectado)
4. Agregar dominio `0e3.com.ar` en Settings → Domains

No requiere scope `workflow` ni verificación extra de `gh`.

### Firebase Hosting

1. `npm run build`
2. Configurar Firebase Hosting con output de Next.js o export estatico segun estrategia elegida
3. Apuntar DNS de `0e3.com.ar`

### Cloudflare Pages

1. Conectar repo GitHub
2. Build command: `npm run build`
3. Output directory segun adaptador elegido
4. Configurar dominio custom

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
