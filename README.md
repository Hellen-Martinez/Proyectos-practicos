# 📊 Dashboard de Analytics Retail

*Dashboard completo de análisis de ventas para productos de cocina y hogar*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/hellen-martinezs-projects/v0-dashboard-with-database)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/trOU7crvaby)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Características

- **KPIs en Tiempo Real**: Métricas de ingresos, crecimiento y rendimiento
- **Análisis Geográfico**: Ventas por países con visualizaciones interactivas
- **Productos Top**: Ranking de productos más vendidos y rentables
- **Tendencias de Ventas**: Gráficos de evolución temporal de ingresos
- **Insights Inteligentes**: Recomendaciones automáticas basadas en datos
- **Transacciones Recientes**: Monitoreo de actividad en tiempo real
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Modo Oscuro**: Interfaz adaptable con tema claro/oscuro

## 🛠️ Tecnologías

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui + Radix UI
- **Gráficos**: Recharts
- **Fuentes**: Space Grotesk + DM Sans
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Configuración Local

\`\`\`bash
# Clonar repositorio
git clone https://github.com/tu-usuario/dashboard-retail.git
cd dashboard-retail

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev
\`\`\`

### Variables de Entorno

\`\`\`env
# Analytics (opcional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=tu_analytics_id

# Configuración de desarrollo
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

## 📊 Estructura de Datos

El dashboard procesa datos de ventas retail con la siguiente estructura:

\`\`\`typescript
interface SalesData {
  InvoiceNo: string
  StockCode: string
  Description: string
  Quantity: number
  InvoiceDate: string
  UnitPrice: number
  CustomerID: string
  Country: string
  TotalSale: number // Calculado automáticamente
}
\`\`\`

## 🎯 KPIs Principales

- **Ingresos Totales**: £8.2M con crecimiento del 46.5%
- **Transacciones**: 25,900 órdenes procesadas
- **Ticket Promedio**: £316.85 por transacción
- **Productos Activos**: 4,070 SKUs en catálogo
- **Países Activos**: 37 mercados internacionales
- **Top Producto**: WHITE HANGING HEART T-LIGHT HOLDER

## 🌍 Análisis Geográfico

### Mercados Principales
1. **Reino Unido**: 91.2% de las ventas (£7.5M)
2. **Alemania**: 2.3% de las ventas (£189K)
3. **Francia**: 1.8% de las ventas (£147K)
4. **EIRE**: 1.2% de las ventas (£98K)
5. **España**: 0.9% de las ventas (£74K)

## 📈 Scripts de Análisis

El proyecto incluye scripts de Python para procesamiento de datos:

\`\`\`bash
# Limpiar y procesar dataset
python scripts/01_data_cleaning.py

# Calcular KPIs avanzados
python scripts/02_calculate_kpis.py
\`\`\`

## 🚀 Deployment

### Vercel (Recomendado)

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

### Docker

\`\`\`bash
# Construir imagen
docker build -t dashboard-retail .

# Ejecutar contenedor
docker run -p 3000:3000 dashboard-retail
\`\`\`

## 📱 Capturas de Pantalla

### Dashboard Principal
![Dashboard Overview](docs/screenshots/dashboard-overview.png)

### Análisis por Países
![Country Analysis](docs/screenshots/country-analysis.png)

### Insights de Negocio
![Business Insights](docs/screenshots/business-insights.png)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

Ver [CONTRIBUTING.md](docs/CONTRIBUTING.md) para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🔗 Enlaces

- **Dashboard Live**: [Ver Demo](https://vercel.com/hellen-martinezs-projects/v0-dashboard-with-database)
- **Proyecto v0**: [Editar en v0.app](https://v0.app/chat/projects/trOU7crvaby)
- **Documentación**: [docs/](docs/)

## 📞 Soporte

¿Tienes preguntas o necesitas ayuda?

- 📧 Email: soporte@dashboard-retail.com
- 💬 Issues: [GitHub Issues](https://github.com/tu-usuario/dashboard-retail/issues)
- 📖 Docs: [Documentación Completa](docs/)

---

**Desarrollado con ❤️ usando [v0.app](https://v0.app)**
\`\`\`

```json file="" isHidden
