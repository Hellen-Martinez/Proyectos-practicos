"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

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
          <BarChart data={countryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis dataKey="country" stroke="#64748b" fontSize={11} angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value, name) => {
                if (name === "revenue") return [`$${value.toLocaleString()}`, "Ingresos"]
                if (name === "ventas") return [value, "Transacciones"]
                if (name === "porcentaje") return [`${value}%`, "% del Total"]
                return [value, name]
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#0ea5e9" name="Ingresos ($)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="ventas" fill="#10b981" name="Transacciones" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Top 3 Países</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Reino Unido</span>
                <span className="font-medium">91.2%</span>
              </div>
              <div className="flex justify-between">
                <span>Francia</span>
                <span className="font-medium">4.2%</span>
              </div>
              <div className="flex justify-between">
                <span>Alemania</span>
                <span className="font-medium">2.1%</span>
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
                <span>Oportunidad</span>
                <span className="font-medium">Europa</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
