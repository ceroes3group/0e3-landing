# Checklist DNS — Firebase + Cloudflare (Fase 2)

**Solo instrucciones manuales. No ejecutar sin aprobación.**

Base: auditoría `AUDITORIA_ECOSISTEMA_0E3_DOMINIOS_HOSTING.md`

---

## 1. Landing institucional — `0e3.com.ar`

### Firebase

| Campo | Valor |
|---|---|
| Proyecto | `oe3-institutional` |
| Site ID | `0es3-com-ar` (no renombrar) |
| Custom domain | `0e3.com.ar` |
| Opcional | `www.0e3.com.ar` → redirect apex |

### Pasos Firebase Console

1. https://console.firebase.google.com/project/oe3-institutional/hosting
2. Site **`0es3-com-ar`** → **Add custom domain**
3. Ingresar **`0e3.com.ar`**
4. Copiar registro **TXT** de verificación
5. Agregar TXT en Cloudflare/registrador
6. Esperar verificación
7. Copiar registros **A** y/o **CNAME** que indique Firebase
8. Agregar en DNS
9. Esperar SSL (Let's Encrypt automático)

### Cloudflare — proxy

| Fase | Configuración |
|---|---|
| Verificación inicial | **DNS only** (gris) en registros Firebase |
| Post-SSL | Evaluar proxy naranja según compatibilidad |

### Redirect alias `0es3.com.ar`

En Cloudflare → Rules → Redirect Rules:

| Origen | Destino | Código |
|---|---|---|
| `0es3.com.ar/*` | `https://0e3.com.ar/$1` | 301 |
| `www.0es3.com.ar/*` | `https://0e3.com.ar/$1` | 301 |

> Firebase Hosting **no** hace redirect cross-domain nativo entre apex distintos. Usar Cloudflare.

---

## 2. Registros DNS esperados (plantilla)

> Los valores exactos los genera Firebase Console. **No inventar IPs.**

| Tipo | Nombre | Valor | Notas |
|---|---|---|---|
| TXT | `@` o `_firebase...` | (desde Firebase) | Verificación dominio |
| A | `@` | (desde Firebase) | Apex `0e3.com.ar` |
| CNAME | `www` | (desde Firebase o redirect) | Opcional |

---

## 3. Verificación post-DNS

```powershell
# Landing
Invoke-WebRequest -Uri "https://0e3.com.ar" -UseBasicParsing

# Redirect alias
Invoke-WebRequest -Uri "https://0es3.com.ar" -MaximumRedirection 0
# Debe ser 301 hacia 0e3.com.ar
```

Checklist:

- [ ] `https://0e3.com.ar` → 200, certificado válido
- [ ] `https://0es3.com.ar` → 301 → `0e3.com.ar`
- [ ] `https://0es3-com-ar.web.app` sigue funcionando (compatibilidad)
- [ ] Open Graph usa `0e3.com.ar` en metadata

---

## 4. Orden recomendado

1. Deploy landing con cambios Fase 1 (aprobación humana)
2. Conectar `0e3.com.ar` en Firebase
3. Configurar redirects `0es3.com.ar` en Cloudflare
4. Validar 24–48 h
5. Luego subdominios producto (Fase 3)

---

## 5. Rollback DNS

1. Quitar custom domain en Firebase Console (site sigue en `.web.app`)
2. Desactivar redirect rules Cloudflare
3. Landing sigue en `https://0es3-com-ar.web.app`
