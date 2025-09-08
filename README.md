# Dashboard de Analytics Retail

*Plataforma integral de análisis de ventas para productos de cocina y hogar*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com/hellen-martinezs-projects/v0-dashboard-with-database)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-000000?style=flat)](https://v0.app/chat/projects/trOU7crvaby)
[![Next.js](https://img.shields.io/badge/Next.js-15-1a365d?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-2d3748?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## Características Principales

**Métricas de Rendimiento**
- KPIs en tiempo real con análisis de crecimiento
- Monitoreo de ingresos y transacciones
- Análisis de rentabilidad por producto

**Análisis Geográfico**
- Distribución de ventas por países
- Visualizaciones interactivas de mercados
- Identificación de oportunidades regionales

**Inteligencia de Negocio**
- Productos más vendidos y rentables
- Tendencias temporales de ventas
- Recomendaciones estratégicas automatizadas

**Interfaz Profesional**
- Diseño responsive optimizado
- Tema claro/oscuro adaptable
- Navegación intuitiva y eficiente

## Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui + Radix UI
- **Visualizaciones**: Recharts
- **Tipografía**: Space Grotesk + DM Sans
- **Deployment**: Vercel

## Instalación y Configuración

### Requisitos del Sistema

- Node.js 18 o superior
- npm o yarn package manager

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

## Estructura de Datos

El sistema procesa datos de ventas retail con la siguiente estructura:

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
  TotalSale: number
}
\`\`\`

## Métricas Clave de Rendimiento

**Indicadores Financieros**
- Ingresos Totales: £8.2M
- Crecimiento: 46.5% interanual
- Ticket Promedio: £316.85
- Margen Bruto: 23.4%

**Indicadores Operacionales**
- Transacciones Procesadas: 25,900
- Productos Activos: 4,070 SKUs
- Mercados Activos: 37 países
- Tasa de Conversión: 3.2%

## Análisis de Mercados

### Distribución Geográfica de Ventas

| País | Participación | Ingresos | Transacciones |
|------|---------------|----------|---------------|
| Reino Unido | 91.2% | £7.5M | 23,612 |
| Alemania | 2.3% | £189K | 596 |
| Francia | 1.8% | £147K | 465 |
| EIRE | 1.2% | £98K | 310 |
| España | 0.9% | £74K | 234 |

### Productos de Mayor Rendimiento

1. **WHITE HANGING HEART T-LIGHT HOLDER** - Líder en ventas
2. **REGENCY CAKESTAND 3 TIER** - Alto margen
3. **JUMBO BAG RED RETROSPOT** - Volumen consistente
4. **PARTY BUNTING** - Crecimiento acelerado
5. **LUNCH BAG RED RETROSPOT** - Demanda estable

## Scripts de Procesamiento

El proyecto incluye herramientas de análisis de datos:

\`\`\`bash
# Procesamiento y limpieza de datos
python scripts/01_data_cleaning.py

# Cálculo de KPIs avanzados
python scripts/02_calculate_kpis.py

# Generación de reportes PDF
python scripts/03_generate_pdf_report.py
\`\`\`

## Deployment y Producción

### Vercel (Recomendado)

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy a producción
vercel --prod
\`\`\`

### Docker

\`\`\`bash
# Construir imagen
docker build -t dashboard-retail .

# Ejecutar contenedor
docker run -p 3000:3000 dashboard-retail
\`\`\`

## Documentación Técnica

### Arquitectura del Sistema
- Componentes modulares con separación de responsabilidades
- Estado global optimizado para rendimiento
- Caching inteligente de datos y visualizaciones

### Estándares de Código
- TypeScript estricto para type safety
- ESLint y Prettier para consistencia
- Pruebas unitarias con Jest

## Enlaces de Referencia

- **Dashboard en Vivo**: [Ver Aplicación](https://vercel.com/hellen-martinezs-projects/v0-dashboard-with-database)
- **Proyecto v0**: [Editar Código](https://v0.app/chat/projects/trOU7crvaby)
- **Documentación**: [Guías Técnicas](docs/)

## Soporte y Contacto

Para consultas técnicas o soporte:

- **Issues**: [GitHub Issues](https://github.com/tu-usuario/dashboard-retail/issues)
- **Documentación**: [docs/](docs/)
- **Email**: soporte@dashboard-retail.com

---

*Desarrollado con tecnologías modernas y mejores prácticas de la industria*
