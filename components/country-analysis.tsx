"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const countryData = [
  { country: "Reino Unido", ventas: 354, revenue: 7850.25, porcentaje: 91.2 },
  { country: "Francia", ventas: 18, revenue: 2100.5, porcentaje: 4.2 },
  { country: "Alemania", ventas: 12, revenue: 1200.0, porcentaje: 2.1 },
  { country: "España", ventas: 8, revenue: 800.0, porcentaje: 1.5 },
  { country: "Italia", ventas: 5, revenue: 500.0, porcentaje: 0.7 },
  { country: "Países Bajos", ventas: 3, revenue: 350.0, porcentaje: 0.3 },
]

export function CountryAnalysis() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground font-heading">Análisis por País</CardTitle>
        <CardDescription>Distribución de ventas por región - Productos de cocina y hogar</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={countryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis dataKey="country" stroke="#64748b" fontSize={11} angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" stroke="#0ea5e9" fontSize={12} />
            <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value, name) => {
                if (name === "revenue") return [`$${value.toLocaleString()}`, "Ingresos"]
                if (name === "ventas") return [`${value} transacciones`, "Transacciones"]
                if (name === "porcentaje") return [`${value}%`, "% del Total"]
                return [value, name]
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" fill="#0ea5e9" name="Ingresos ($)" radius={[4, 4, 0, 0]} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="ventas"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
              name="Transacciones"
            />
          </ComposedChart>
        </ResponsiveContainer>

        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Top 3 Países (Ingresos)</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Reino Unido</span>
                <span className="font-medium text-blue-600">$7,850</span>
              </div>
              <div className="flex justify-between">
                <span>Francia</span>
                <span className="font-medium text-blue-600">$2,101</span>
              </div>
              <div className="flex justify-between">
                <span>Alemania</span>
                <span className="font-medium text-blue-600">$1,200</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Top 3 Países (Transacciones)</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Reino Unido</span>
                <span className="font-medium text-green-600">354</span>
              </div>
              <div className="flex justify-between">
                <span>Francia</span>
                <span className="font-medium text-green-600">18</span>
              </div>
              <div className="flex justify-between">
                <span>Alemania</span>
                <span className="font-medium text-green-600">12</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Métricas Clave</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Total Países</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between">
                <span>Mercado Principal</span>
                <span className="font-medium">Reino Unido</span>
              </div>
              <div className="flex justify-between">
                <span>Ticket Promedio</span>
                <span className="font-medium">$22.17</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
