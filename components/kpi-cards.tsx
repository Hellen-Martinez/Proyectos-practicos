import { TrendingUp, TrendingDown, ShoppingCart, Users, DollarSign, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const kpis = [
  {
    title: "Ingresos Totales",
    value: "£8.2M",
    change: "+46.5%",
    trend: "up",
    icon: DollarSign,
    description: "crecimiento interanual",
  },
  {
    title: "Transacciones",
    value: "25,900",
    change: "+22.1%",
    trend: "up",
    icon: ShoppingCart,
    description: "órdenes procesadas",
  },
  {
    title: "Ticket Promedio",
    value: "£316.85",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    description: "valor por transacción",
  },
  {
    title: "Productos Activos",
    value: "4,070",
    change: "+8.2%",
    trend: "up",
    icon: Package,
    description: "SKUs en catálogo",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card
            key={kpi.title}
            className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wide uppercase">
                {kpi.title}
              </CardTitle>
              <Icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">{kpi.value}</div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <TrendIcon className={`h-4 w-4 ${kpi.trend === "up" ? "text-emerald-600" : "text-red-600"}`} />
                  <span className={`font-semibold ${kpi.trend === "up" ? "text-emerald-600" : "text-red-600"}`}>
                    {kpi.change}
                  </span>
                </div>
                <span className="text-slate-500 dark:text-slate-400 font-medium">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
