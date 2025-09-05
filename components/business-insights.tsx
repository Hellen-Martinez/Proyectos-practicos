import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react"

const keyInsights = [
  {
    title: "Crecimiento Excepcional",
    description: "Las ventas han crecido un 46.5% este mes, superando las proyecciones en un 23%",
    type: "success",
    impact: "Alto",
    icon: TrendingUp,
  },
  {
    title: "Mercado Reino Unido Dominante",
    description: "UK representa el 63% de los ingresos totales con $7,850.25",
    type: "info",
    impact: "Alto",
    icon: Target,
  },
  {
    title: "Productos de Decoración Lideran",
    description: "Los productos de decoración del hogar generan el 45% de los ingresos",
    type: "success",
    impact: "Medio",
    icon: CheckCircle,
  },
  {
    title: "Oportunidad en Alemania",
    description: "El mercado alemán muestra un crecimiento del 45% con potencial de expansión",
    type: "warning",
    impact: "Medio",
    icon: AlertTriangle,
  },
]

const recommendations = [
  {
    priority: "Alta",
    action: "Expandir inventario de productos de decoración",
    reason: "Representan el 45% de ingresos con alta demanda",
    expectedImpact: "+15% ingresos",
  },
  {
    priority: "Alta",
    action: "Desarrollar estrategia para mercado alemán",
    reason: "Crecimiento del 45% indica alta oportunidad",
    expectedImpact: "+$2,000 mensuales",
  },
  {
    priority: "Media",
    action: "Optimizar precios en productos de cocina",
    reason: "Margen promedio del 64% permite ajustes estratégicos",
    expectedImpact: "+8% margen",
  },
  {
    priority: "Media",
    action: "Implementar programa de fidelización",
    reason: "Tasa de retención del 47% puede mejorarse",
    expectedImpact: "+12% retención",
  },
]

const performanceMetrics = [
  { metric: "Eficiencia de Ventas", value: "92%", status: "excellent", benchmark: "85%" },
  { metric: "Satisfacción del Cliente", value: "4.2/5", status: "good", benchmark: "4.0/5" },
  { metric: "Rotación de Inventario", value: "8.5x", status: "excellent", benchmark: "6.0x" },
  { metric: "Tasa de Conversión", value: "85%", status: "good", benchmark: "75%" },
]

const forecasts = [
  { period: "Próximo Mes", revenue: 22500, confidence: "85%", trend: "up" },
  { period: "Próximo Trimestre", revenue: 65000, confidence: "78%", trend: "up" },
  { period: "Próximos 6 Meses", revenue: 125000, confidence: "72%", trend: "up" },
]

export function BusinessInsights() {
  return (
    <div className="space-y-6">
      {/* Key Insights */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground font-heading">Insights Clave del Negocio</CardTitle>
          <CardDescription>Análisis inteligente basado en datos de ventas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyInsights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <Alert
                  key={index}
                  className={`border-l-4 ${
                    insight.type === "success"
                      ? "border-l-green-500 bg-green-50 dark:bg-green-950"
                      : insight.type === "warning"
                        ? "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950"
                        : "border-l-blue-500 bg-blue-50 dark:bg-blue-950"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className={`h-5 w-5 mt-0.5 ${
                        insight.type === "success"
                          ? "text-green-600"
                          : insight.type === "warning"
                            ? "text-yellow-600"
                            : "text-blue-600"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{insight.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {insight.impact}
                        </Badge>
                      </div>
                      <AlertDescription className="text-xs">{insight.description}</AlertDescription>
                    </div>
                  </div>
                </Alert>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground font-heading">Recomendaciones Estratégicas</CardTitle>
          <CardDescription>Acciones sugeridas para optimizar el rendimiento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 border-l-4 border-l-primary">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={rec.priority === "Alta" ? "destructive" : "secondary"} className="text-xs">
                      {rec.priority}
                    </Badge>
                    <h4 className="font-semibold text-sm text-card-foreground">{rec.action}</h4>
                  </div>
                  <span className="text-xs font-medium text-green-600">{rec.expectedImpact}</span>
                </div>
                <p className="text-xs text-muted-foreground">{rec.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground font-heading">Métricas de Rendimiento</CardTitle>
          <CardDescription>Comparación con benchmarks de la industria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{metric.metric}</span>
                  <Badge
                    variant={
                      metric.status === "excellent" ? "default" : metric.status === "good" ? "secondary" : "destructive"
                    }
                    className="text-xs"
                  >
                    {metric.status === "excellent" ? "Excelente" : metric.status === "good" ? "Bueno" : "Mejorar"}
                  </Badge>
                </div>
                <div className="text-lg font-bold text-card-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">Benchmark: {metric.benchmark}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Forecasts */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground font-heading">Proyecciones de Ingresos</CardTitle>
          <CardDescription>Predicciones basadas en tendencias actuales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {forecasts.map((forecast, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="font-medium text-card-foreground">{forecast.period}</p>
                    <p className="text-xs text-muted-foreground">Confianza: {forecast.confidence}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-card-foreground">${forecast.revenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600">Proyección alcista</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
