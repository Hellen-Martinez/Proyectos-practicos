import { TrendingUp, TrendingDown, ShoppingCart, Users, DollarSign, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const kpis = [
  {
    title: "Ingresos Totales",
    value: "$12,450.75",
    change: "+46.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs mes anterior",
  },
  {
    title: "Órdenes",
    value: "85",
    change: "+22.1%",
    trend: "up",
    icon: ShoppingCart,
    description: "facturas procesadas",
  },
  {
    title: "Clientes Únicos",
    value: "15",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    description: "clientes activos",
  },
  {
    title: "Productos Vendidos",
    value: "1,250",
    change: "+18.7%",
    trend: "up",
    icon: Package,
    description: "unidades totales",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card key={kpi.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{kpi.value}</div>
              <div className="flex items-center gap-1 text-xs">
                <TrendIcon className={`h-3 w-3 ${kpi.trend === "up" ? "text-chart-5" : "text-destructive"}`} />
                <span className={kpi.trend === "up" ? "text-chart-5" : "text-destructive"}>{kpi.change}</span>
                <span className="text-muted-foreground">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
