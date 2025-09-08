"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const salesData = [
  { date: "Dec 1", ventas: 685420, ordenes: 364 },
  { date: "Dec 2", ventas: 729850, ordenes: 389 },
  { date: "Dec 3", ventas: 612340, ordenes: 298 },
  { date: "Dec 6", ventas: 794680, ordenes: 445 },
  { date: "Dec 7", ventas: 856920, ordenes: 478 },
  { date: "Dec 8", ventas: 923150, ordenes: 512 },
  { date: "Dec 9", ventas: 1045680, ordenes: 587 },
  { date: "Dec 10", ventas: 887340, ordenes: 456 },
  { date: "Dec 13", ventas: 756890, ordenes: 398 },
  { date: "Dec 14", ventas: 834570, ordenes: 423 },
  { date: "Dec 15", ventas: 1156780, ordenes: 634 },
  { date: "Dec 16", ventas: 1289450, ordenes: 698 },
  { date: "Dec 17", ventas: 1098760, ordenes: 589 },
  { date: "Dec 20", ventas: 945680, ordenes: 512 },
]

export function SalesChart() {
  return (
    <Card className="bg-white border-slate-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-slate-800 font-serif text-lg font-semibold">Revenue Trends Analysis</CardTitle>
        <CardDescription className="text-slate-600 text-sm">Daily sales performance - December 2010</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
            <YAxis stroke="#64748b" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              formatter={(value, name) => [
                name === "ventas" ? `£${Number(value).toLocaleString()}` : Number(value).toLocaleString(),
                name === "ventas" ? "Revenue" : "Orders",
              ]}
            />
            <Line
              type="monotone"
              dataKey="ventas"
              stroke="#1e40af"
              strokeWidth={2.5}
              dot={{ fill: "#1e40af", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="ordenes"
              stroke="#059669"
              strokeWidth={2}
              dot={{ fill: "#059669", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
