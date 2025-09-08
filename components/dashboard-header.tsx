import { Calendar, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DashboardHeader() {
  return (
    <Card className="border-0 rounded-none bg-white dark:bg-slate-800 shadow-md border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-700 dark:bg-slate-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                Dashboard de Analytics Retail
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                Plataforma de análisis de ventas y productos de cocina
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-transparent"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Enero 2025
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-transparent"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
