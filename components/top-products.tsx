import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const topProducts = [
  {
    name: "WHITE HANGING HEART T-LIGHT HOLDER",
    code: "85123A",
    sales: 156,
    revenue: 398.4,
    trend: "up",
  },
  {
    name: "PACK OF 72 RETROSPOT CAKE CASES",
    code: "21212",
    sales: 240,
    revenue: 100.8,
    trend: "up",
  },
  {
    name: "RETRO COFFEE MUGS ASSORTED",
    code: "37370",
    sales: 84,
    revenue: 89.04,
    trend: "up",
  },
  {
    name: "ALARM CLOCK BAKELIKE PINK",
    code: "22728",
    sales: 48,
    revenue: 180.0,
    trend: "up",
  },
  {
    name: "GLASS STAR FROSTED T-LIGHT HOLDER",
    code: "21730",
    sales: 36,
    revenue: 153.0,
    trend: "down",
  },
]

export function TopProducts() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground font-heading">Productos Más Vendidos</CardTitle>
        <CardDescription>Ranking por unidades vendidas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.code} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">#{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.code}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-card-foreground">{product.sales} unidades</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">${product.revenue}</p>
                  <Badge variant={product.trend === "up" ? "default" : "secondary"} className="text-xs">
                    {product.trend === "up" ? "↗" : "↘"}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
