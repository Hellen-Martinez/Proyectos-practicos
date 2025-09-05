"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const countryData = [
  { country: "United Kingdom", ventas: 52, revenue: 7850.25 },
  { country: "France", ventas: 18, revenue: 2100.5 },
  { country: "Germany", ventas: 8, revenue: 1200.0 },
  { country: "Spain", ventas: 4, revenue: 800.0 },
  { country: "Italy", ventas: 3, revenue: 500.0 },
]

export function CountryAnalysis() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground font-heading">Análisis por País</CardTitle>
        <CardDescription>Ventas por región - Productos de cocina y hogar</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={countryData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis type="category" dataKey="country" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
              formatter={(value, name) => [
                name === "revenue" ? `$${value.toLocaleString()}` : value,
                name === "revenue" ? "Ingresos" : "Ventas",
              ]}
            />
            <Bar dataKey="revenue" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
