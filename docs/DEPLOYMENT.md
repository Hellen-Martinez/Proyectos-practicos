# Guía de Deployment

## Vercel (Recomendado)

### Configuración Inicial

1. **Conectar Repositorio**
   \`\`\`bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Login y configurar
   vercel login
   vercel
   \`\`\`

2. **Variables de Entorno**
   - `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`: ID de analytics (opcional)

3. **Configuración de Build**
   \`\`\`json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "framework": "nextjs"
   }
   \`\`\`

### Deploy Automático

Cada push a `main` despliega automáticamente.

## Otros Proveedores

### Netlify

\`\`\`toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
\`\`\`

### Docker

\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Monitoreo

- Vercel Analytics para métricas de rendimiento
- Error tracking con Sentry (opcional)
- Uptime monitoring con UptimeRobot
\`\`\`

```json file="" isHidden
