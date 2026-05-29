# Deploy en Firebase Hosting — 0E3 Landing

Guía para publicar la web institucional en **Firebase Hosting**.

Repo: https://github.com/ceroes3group/0e3-landing

---

## Resumen técnico

| Item | Valor |
|---|---|
| **Framework** | Next.js 16 (App Router) + React 19 + TypeScript |
| **Estilos** | Tailwind CSS v4 + Framer Motion |
| **Comando de build** | `npm run build:firebase` |
| **Carpeta de salida** | `out/` |
| **Config Firebase** | `firebase.json` + `.firebaserc` |
| **Proyecto Firebase** | `oe3-institutional` |
| **Hosting site ID** | `0es3-com-ar` (**no renombrar**) |
| **Dominio canónico** | `https://0e3.com.ar` |
| **Alias redirect** | `https://0es3.com.ar` → `0e3.com.ar` (Cloudflare) |

La landing se exporta como **sitio estático** (`output: "export"`). Rutas: `/`, `/apps/`, `/apps/nexopos/`, etc.

---

## Build de producción (local)

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
npm install
npm run build:firebase
```

Verificaciones:

- Carpeta `out/` generada
- `out/index.html`, `out/apps/index.html`, etc.

---

## Deploy a Firebase Hosting

```powershell
npm run deploy:hosting
```

URL provisional:

- https://0es3-com-ar.web.app

---

## Dominio custom `0e3.com.ar`

1. Firebase Console → Hosting → site **`0es3-com-ar`**
2. Add custom domain → **`0e3.com.ar`**
3. Opcional: **`www.0e3.com.ar`** → redirect a apex
4. DNS según Firebase (TXT + A/CNAME)
5. Cloudflare: **`0es3.com.ar`** y **`www.0es3.com.ar`** → redirect 301 a `https://0e3.com.ar`

Ver checklist detallado: `docs/DNS-FIREBASE-CLOUDFLARE-CHECKLIST.md`

---

## Qué sirve en `/`

- Landing institucional
- Hub de accesos a productos
- Catálogo `/apps/` con fichas por producto
- Links operativos a `.web.app` hasta cutover DNS

---

## Relación con otros sistemas 0E3

| Sistema | Dominio objetivo | URL operativa hoy |
|---|---|---|
| Landing | `0e3.com.ar` | `0es3-com-ar.web.app` |
| POS | `pos.0e3.com.ar` | `nexopos-dc.web.app` |
| HOME | `home.0e3.com.ar` | `oe3-home-beta.web.app` |
| Aliados | `aliados.0e3.com.ar` | `oe3-aliados-comerciales.web.app` |
| Gastro web staging | `staging.gastro.0e3.com.ar` | `e3-gastro-staging-web.web.app` |

---

## URLs útiles

- Repo: https://github.com/ceroes3group/0e3-landing
- Firebase Console: https://console.firebase.google.com/project/oe3-institutional/hosting
- Hub documentación: https://github.com/ceroes3group/0e3-docs *(repo sugerido; local: `0E3_WORKSPACE/docs`)*
- Plan migración: `domains/oe3-domain-migration-plan.md` en hub `0e3-docs`
