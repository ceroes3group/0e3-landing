# Release creativo — Web pública 0E3

**Fecha:** 2026-06-22  
**Sitio:** https://0e3.com.ar  
**Repo:** https://github.com/ceroes3group/0e3-landing  
**Proyecto Firebase:** `oe3-institutional`  
**Hosting site:** `0es3-com-ar`

---

## Resumen

Ajuste de copy y conversión comercial sobre la landing ya optimizada técnicamente. Objetivo: que la web hable como alguien que entiende el mostrador, no como una plantilla SaaS.

**Commit anterior estable:** `dea12f8` — optimización conversión inicial  
**Este release:** ajuste creativo + deploy hosting + push a `main`

---

## Qué cambió

### Hero principal

| Antes | Después |
|-------|---------|
| Título genérico “Controlá tu negocio desde cualquier lugar” | **0E3 POS** |
| Subtítulo tipo plataforma | *El sistema de gestión pensado para negocios reales.* |
| — | Descripción operativa + *Sin planillas. Sin complicaciones. Sin perder tiempo.* |

### Nuevas secciones (home)

1. **Pensado para negocios reales** — identificación con comerciante de barrio  
2. **Problemas que vemos todos los días** — dolores vs cambios con 0E3 (2 columnas)  
3. **Muchos sistemas están hechos por programadores…** — diferencial humano (bloque editorial)

### Orden de la home

```
Hero → RealBusiness → PainPoints → MerchantDifference → Products → Trust → Contact
```

### Copy suavizado

- Eliminado tono “plataforma / soluciones / tecnología que simplifica”
- Contacto: *¿Querés saber si 0E3 sirve para tu negocio?*
- Precios: intro cálida sin inventar montos ARS
- Metadata SEO: `0E3 POS — Gestión para negocios reales`

### Sin cambios

- Rutas públicas y estructura técnica
- CTAs signup/login → `nexopos-dc.web.app`
- Jerarquía productos (POS principal; Gastro/Aliados secundarios; MotorLab próximamente)
- WhatsApp condicional (oculto si `site.whatsapp` vacío)
- POS interno, billing, Firebase Functions

---

## Archivos tocados

| Archivo | Tipo |
|---------|------|
| `src/lib/constants.ts` | Copy central + nuevos bloques de contenido |
| `src/components/Hero.tsx` | Jerarquía editorial |
| `src/components/RealBusiness.tsx` | **Nuevo** |
| `src/components/PainPoints.tsx` | **Nuevo** |
| `src/components/MerchantDifference.tsx` | **Nuevo** |
| `src/app/page.tsx` | Orden de secciones |
| `src/components/Products.tsx` | Títulos |
| `src/components/Trust.tsx` | Copy confianza |
| `src/components/Contact.tsx` | Copy + CTA email |
| `src/app/precios/page.tsx` | Intro planes |
| `src/app/layout.tsx` | Metadata |
| `src/app/apps/page.tsx` | Meta description |

---

## Validación pre-deploy

```powershell
npm run lint   # OK
npm run build  # OK — 8 rutas estáticas
```

---

## Deploy

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
firebase deploy --only hosting
```

| Item | Valor |
|------|-------|
| Archivos publicados | 107 en `out/` |
| Target | `hosting[0es3-com-ar]` |
| Resultado | Deploy complete |

---

## URLs verificadas post-deploy

| URL | Estado |
|-----|--------|
| https://0e3.com.ar/ | 200 — copy “negocios reales” presente |
| https://0e3.com.ar/precios/ | 200 |
| https://0e3.com.ar/apps/nexopos/ | 200 |

CTAs:

- Probar POS → `https://nexopos-dc.web.app/signup`
- Ingresar → `https://nexopos-dc.web.app/login`
- WhatsApp → no visible (`wa.me` ausente con número vacío)
- Email → `ceroes3group@gmail.com`

---

## Riesgos pendientes

1. **WhatsApp vacío** — configurar `site.whatsapp` en `src/lib/constants.ts`
2. **OG placeholder** — `/social/og-placeholder.svg` genérico
3. **Dominio POS** — CTAs en `nexopos-dc.web.app`; `pos.0e3.com.ar` pendiente
4. **Precios ARS** — sin montos publicados (decisión comercial)
5. **Home más larga** — más scroll; revisar en mobile

---

## Cómo reproducir deploy

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
git pull origin main
npm install
npm run lint
npm run build
firebase deploy --only hosting
```

Ver también: [DEPLOY-FIREBASE.md](./DEPLOY-FIREBASE.md)

---

## Próximas mejoras recomendadas

1. Cargar número WhatsApp comercial
2. Reemplazar OG image con asset de marca (1200×630)
3. Evaluar precios orientativos o tabla comparativa más visual
4. Conectar dominio custom del POS cuando DNS esté listo
