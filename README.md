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

### Vercel (recomendado)

1. Importar el repo `ceroes3group/0e3-landing`
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: automático
5. Dominio custom: `0e3.com.ar`

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
