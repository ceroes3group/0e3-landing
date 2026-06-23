# Release — Marca, humanización y consolidación 0E3

**Fecha:** 2026-06-22  
**Sitio:** https://0e3.com.ar  
**Repo:** https://github.com/ceroes3group/0e3-landing  
**Proyecto Firebase:** `oe3-institutional`  
**Hosting site:** `0es3-com-ar`  
**Commit anterior en remoto:** `d35574b`

---

## Resumen ejecutivo

Tres iteraciones de copy y marca sobre la landing ya optimizada técnicamente:

1. **Humanización emocional** — identificación del comerciante (*¿Te suena familiar?*)
2. **ADN de marca** — *¿Por qué 0E3?*, manifiesto del fundador
3. **Consolidación** — separación marca madre (0E3) vs producto (0E3 POS)

Sin cambios en rutas, CTAs, precios, signup/login ni POS interno.

---

## Arquitectura de marca

### Marca madre — 0E3

| Elemento | Contenido |
|----------|-----------|
| Significado | **Cero Es Tres** — Cero complicaciones, cero vueltas, cero estrés |
| Frase institucional | **Menos complicaciones. Más control.** |
| Origen | *Administrar un negocio ya tiene suficientes desafíos. El software no debería ser uno más.* |
| Footer | *0E3 — Tecnología que simplifica.* + *Porque administrar un negocio ya es bastante difícil.* |

### Producto — 0E3 POS

| Elemento | Contenido |
|----------|-----------|
| Rol | Producto principal, puerta de conversión |
| Promesa comercial | **Menos tiempo administrando. Más tiempo vendiendo.** |
| CTAs | `nexopos-dc.web.app/signup` y `/login` (sin cambios) |

---

## Recorrido emocional de la home

```
Hero (0E3 POS)
  → ¿Te suena familiar?        [problema real]
  → ¿Por qué 0E3?              [filosofía + origen + identidad]
  → Pensado para negocios reales
  → Cuando el día se complica  [dolores]
  → Manifiesto                 [convicción fundador]
  → Productos (0E3 / 0E3 POS)
  → Confianza
  → Contacto
```

---

## Archivos principales modificados

| Archivo | Cambio |
|---------|--------|
| `src/lib/constants.ts` | `brandPhrase`, `posPhrase`, contenidos de secciones |
| `src/components/FamiliarRoutine.tsx` | **Nuevo** — sección emocional |
| `src/components/WhyZeroE3.tsx` | **Nuevo** — identidad y origen |
| `src/components/MerchantDifference.tsx` | Manifiesto del fundador |
| `src/components/Hero.tsx` | Badge marca + promesa POS |
| `src/components/Footer.tsx` | Cierre emocional + frase institucional |
| `src/components/Products.tsx` | Distinción marca / producto |
| `src/app/page.tsx` | Orden de secciones |
| `src/app/layout.tsx` | Metadata institucional |

---

## Validación pre-deploy

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
npm run lint   # OK
npm run build  # OK — 8 rutas estáticas
```

---

## Deploy

```powershell
firebase deploy --only hosting
```

| Item | Valor |
|------|-------|
| Archivos publicados | 107 en `out/` |
| Resultado | Deploy complete |
| Dominio | https://0e3.com.ar |

### Verificación post-deploy

- `¿Te suena familiar?` presente
- `Cero Es Tres` presente
- `Menos complicaciones. Más control.` (marca)
- `Menos tiempo administrando. Más tiempo vendiendo.` (POS)
- Historia de origen presente
- WhatsApp oculto si `site.whatsapp` vacío

---

## Riesgos pendientes

1. **WhatsApp vacío** — contacto solo por email
2. **OG placeholder** — imagen genérica en redes
3. **POS en `nexopos-dc.web.app`** — dominio custom pendiente
4. **Precios ARS** — sin montos publicados
5. **Home más larga** — más narrativa; revisar scroll mobile

---

## Cómo reproducir

```powershell
cd C:\Users\Asus\Proyectos\0E3_WORKSPACE\landing
git pull origin main
npm install
npm run lint
npm run build
firebase deploy --only hosting
```

Ver también: [DEPLOY-FIREBASE.md](./DEPLOY-FIREBASE.md), [RELEASE-CREATIVO-2026-06-22.md](./RELEASE-CREATIVO-2026-06-22.md)

---

## Próximos pasos recomendados

1. Configurar `site.whatsapp` en `constants.ts`
2. Reemplazar OG image con asset de marca (1200×630)
3. Evaluar precios orientativos en web
4. Conectar `pos.0e3.com.ar` cuando DNS esté listo
