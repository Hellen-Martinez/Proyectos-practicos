"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const salesData = [
  { date: "01/12", ventas: 1850.25, ordenes: 12 },
  { date: "02/12", ventas: 2100.5, ordenes: 15 },
  { date: "03/12", ventas: 1650.75, ordenes: 9 },
  { date: "04/12", ventas: 2890.4, ordenes: 18 },
  { date: "05/12", ventas: 3200.15, ordenes: 22 },
  { date: "06/12", ventas: 2750.8, ordenes: 16 },
  { date: "07/12", ventas: 1950.3, ordenes: 11 },
  { date: "08/12", ventas: 4100.65, ordenes: 28 },
  { date: "09/12", ventas: 3850.9, ordenes: 25 },
  { date: "10/12", ventas: 2450.2, ordenes: 14 },
  { date: "11/12", ventas: 3650.45, ordenes: 24 },
  { date: "12/12", ventas: 4200.75, ordenes: 29 },
  { date: "13/12", ventas: 3950.6, ordenes: 26 },
  { date: "14/12", ventas: 2800.35, ordenes: 17 },
]

export function SalesChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground font-heading">Tendencia de Ventas</CardTitle>
        <CardDescription>Ventas diarias de productos de cocina y hogar</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
              formatter={(value, name) => [
                name === "ventas" ? `$${value.toLocaleString()}` : value,
                name === "ventas" ? "Ventas" : "Órdenes",
              ]}
            />
            <Line
              type="monotone"
              dataKey="ventas"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="ordenes"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
