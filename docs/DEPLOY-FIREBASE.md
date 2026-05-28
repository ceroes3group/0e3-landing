# Deploy en Firebase Hosting — 0E3 Landing

Guía para publicar la web institucional en **Firebase Hosting** con dominio **`0es3.com.ar`**.

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
| **Hosting site** | `0es3-com-ar` |
| **Dominio objetivo** | `0es3.com.ar` |

La landing se exporta como **sitio estático** (`output: "export"`). No requiere Cloud Functions ni variables de entorno.

---

## Requisitos previos

1. [Firebase CLI](https://firebase.google.com/docs/cli) instalado y autenticado:

```powershell
npm install -g firebase-tools
firebase login
```

2. Proyecto Firebase **`oe3-institutional`** creado en [Firebase Console](https://console.firebase.google.com).

3. Hosting site **`0es3-com-ar`** creado en ese proyecto:

```powershell
firebase hosting:sites:create 0es3-com-ar --project oe3-institutional
```

4. Target de deploy vinculado (solo la primera vez):

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
firebase target:apply hosting production 0es3-com-ar --project oe3-institutional
```

---

## Build de producción (local)

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
npm install
npm run build:firebase
```

Verificaciones:

- Debe generarse la carpeta `out/`
- Debe existir `out/index.html`
- Rutas estáticas en `out/_next/`

Preview local del export (opcional):

```powershell
npx serve out
```

---

## Deploy a Firebase Hosting

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
npm run deploy:hosting
```

Equivale a:

```powershell
npm run build:firebase
firebase deploy --only hosting:production --project oe3-institutional
```

URL provisional tras el deploy:

- `https://0es3-com-ar.web.app`
- `https://0es3-com-ar.firebaseapp.com`

---

## Dominio custom `0es3.com.ar`

1. Firebase Console → **Hosting** → site **`0es3-com-ar`**
2. **Add custom domain** → `0es3.com.ar`
3. Agregar también `www.0es3.com.ar` (redirect a apex recomendado)
4. Configurar DNS en el registrador según los registros que muestre Firebase (TXT + A/CNAME)
5. Esperar emisión de certificado SSL (automático)

> **Nota:** `0e3.com.ar` queda reservado como alias corto futuro hacia `0es3.com.ar` (sin tocar en esta fase).

---

## Qué sirve en `/`

La raíz `/` muestra la landing institucional con accesos claros a:

| Sección | Contenido |
|---|---|
| **Aliados Comerciales** | Información + contacto por email (módulo aparte, no incluido en este deploy) |
| **NexoPOS / sistemas para negocios** | Links a 0E3 POS y 0E3 Gastro web |
| **Apps personales y comerciales** | 0E3 HOME, Recovery, Track |
| **Contacto** | Email, GitHub y ancla a la sección contacto |

---

## Checklist post-deploy

- [ ] `https://0es3-com-ar.web.app/` responde 200
- [ ] Sección **Accesos** visible con 4 bloques
- [ ] Links externos (POS, Gastro) abren correctamente
- [ ] `mailto:` de contacto funciona
- [ ] HTTPS activo en `0es3.com.ar`
- [ ] Favicon y Open Graph cargan
- [ ] Mobile responsive OK

---

## Problemas comunes

### Build falla

```powershell
npm run build:firebase
```

Revisar errores de TypeScript o imports.

### Target `production` no encontrado

```powershell
firebase target:apply hosting production 0es3-com-ar --project oe3-institutional
```

### Deploy a proyecto incorrecto

```powershell
firebase use oe3-institutional
firebase deploy --only hosting:production
```

### Dominio no resuelve

Verificar DNS en el registrador. Usar https://dnschecker.org

---

## Relación con otros sistemas 0E3

| Sistema | Deploy | Dominio |
|---|---|---|
| **Landing institucional** (este repo) | Firebase `oe3-institutional` / site `0es3-com-ar` | `0es3.com.ar` |
| 0E3 Gastro web | Firebase `e3-gastro` / site `e3-gastro-web` | `gastro.0es3.com.ar` |
| 0E3 POS | Firebase `nexopos-dc` | `nexopos-dc.web.app` (cutover futuro) |
| Aliados Comerciales | Proyecto aparte `oe3-aliados-comerciales` | No incluido en este deploy |

---

## URLs útiles

- Repo: https://github.com/ceroes3group/0e3-landing
- Firebase Console: https://console.firebase.google.com/project/oe3-institutional/hosting
- Dominio objetivo: https://0es3.com.ar
