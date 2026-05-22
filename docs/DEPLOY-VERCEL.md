# Deploy en Vercel — 0E3 Landing

Guía para publicar `0e3-landing` **sin GitHub Actions** y **sin scope `workflow`**.

Repo: https://github.com/ceroes3group/0e3-landing

---

## Requisitos

- Cuenta en [Vercel](https://vercel.com)
- Acceso al repo `ceroes3group/0e3-landing` en GitHub
- Dominio `0e3.com.ar` (para el paso final de DNS)

No se necesitan secretos, APIs ni variables de entorno para esta landing.

---

## Paso 1 — Crear cuenta en Vercel

1. Entrá a https://vercel.com/signup
2. Elegí **Continue with GitHub**
3. Autorizá con la cuenta que tenga acceso a `ceroes3group/0e3-landing`
   - Ideal: `ceroes3group`
   - Alternativa: `condinea1234` si fue invitada al repo

---

## Paso 2 — Importar el proyecto

1. Dashboard → **Add New… → Project**
2. Buscar **`0e3-landing`**
3. Clic en **Import**

Si no aparece el repo:

- **Adjust GitHub App Permissions**
- Dar acceso a la cuenta/org `ceroes3group`
- Refrescar la lista

---

## Paso 3 — Configuración de build

Vercel detecta Next.js automáticamente. Verificá:

| Campo | Valor |
|---|---|
| Framework Preset | Next.js |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | *(automático)* |
| Install Command | `npm install` |

**Environment Variables:** ninguna por ahora.

Clic en **Deploy**.

---

## Paso 4 — Verificar deploy

1. Esperá 1–3 minutos
2. Vercel te dará una URL tipo:
   `https://0e3-landing-xxxxx.vercel.app`
3. Abrila y verificá:
   - Hero con logo
   - Sección productos
   - Responsive mobile
   - Links de contacto

---

## Paso 5 — Dominio custom `0e3.com.ar`

1. Proyecto → **Settings → Domains**
2. Agregar:
   - `0e3.com.ar`
   - `www.0e3.com.ar`
3. Vercel mostrará registros DNS

### Si el dominio está en Cloudflare / registrador AR

Configurá según indique Vercel. Ejemplo típico:

**Opción A — apex `0e3.com.ar`**
```
Tipo: A
Nombre: @
Valor: 76.76.21.21
```

**Opción B — CNAME para www**
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

4. En Vercel, marcar `www` para redirect a apex (recomendado)
5. Esperar propagación DNS (5 min – 48 h)

---

## Paso 6 — Deploys automáticos

Cada push a `main` en GitHub redeploya solo.

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
git add .
git commit -m "Update landing"
git push origin main
```

Vercel construye en la nube. No hace falta `gh auth workflow`.

---

## Checklist post-deploy

- [ ] Landing carga en URL Vercel
- [ ] Dominio `0e3.com.ar` apunta correctamente
- [ ] HTTPS activo (automático en Vercel)
- [ ] Favicon visible
- [ ] Open Graph al compartir link
- [ ] Mobile OK

---

## Problemas comunes

### No veo el repo en Vercel
→ Revisar permisos del GitHub App de Vercel para `ceroes3group`.

### Build falla
→ Probar local:
```powershell
npm install
npm run build
```

### Dominio no resuelve
→ Revisar DNS en registrador. Usar https://dnschecker.org

### Mail de GitHub bloqueado
→ No importa para Vercel. Solo afecta `gh auth workflow`, que no usamos en esta opción.

---

## URLs útiles

- Repo: https://github.com/ceroes3group/0e3-landing
- Vercel dashboard: https://vercel.com/dashboard
- Dominio objetivo: https://0e3.com.ar

---

## Próximo paso sugerido

Cuando el dominio esté activo:

1. Actualizar avatar/bio de GitHub con logo de `0e3-brand`
2. Reemplazar placeholders de LinkedIn/WhatsApp en `src/lib/constants.ts`
3. Agregar imagen OG final en `public/social/`
