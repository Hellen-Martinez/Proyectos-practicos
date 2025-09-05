import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentTransactions = [
  {
    invoice: "536378",
    date: "01/12/2010",
    customer: "14688",
    country: "United Kingdom",
    amount: 50.4,
    status: "completed",
  },
  {
    invoice: "536377",
    date: "01/12/2010",
    customer: "17850",
    country: "United Kingdom",
    amount: 22.2,
    status: "completed",
  },
  {
    invoice: "536376",
    date: "01/12/2010",
    customer: "15291",
    country: "United Kingdom",
    amount: 329.1,
    status: "completed",
  },
  {
    invoice: "536375",
    date: "01/12/2010",
    customer: "17850",
    country: "United Kingdom",
    amount: 168.72,
    status: "completed",
  },
  {
    invoice: "536370",
    date: "01/12/2010",
    customer: "12583",
    country: "France",
    amount: 498.15,
    status: "completed",
  },
]

export function RecentTransactions() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground font-heading">Transacciones Recientes</CardTitle>
        <CardDescription>Últimas 5 facturas procesadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.invoice} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground">#{transaction.invoice}</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Cliente {transaction.customer}</p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date} • {transaction.country}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-card-foreground">${transaction.amount}</p>
                <Badge
                  variant="secondary"
                  className="text-xs bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100"
                >
                  Completado
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
