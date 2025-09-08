import { DashboardHeader } from "@/components/dashboard-header"
import { KPICards } from "@/components/kpi-cards"
import { SalesChart } from "@/components/sales-chart"
import { TopProducts } from "@/components/top-products"
import { CountryAnalysis } from "@/components/country-analysis"
import { RecentTransactions } from "@/components/recent-transactions"
import { BusinessInsights } from "@/components/business-insights"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive KPIs Section */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            Métricas de Rendimiento
          </h2>
          <KPICards />
        </section>

        {/* Analytics Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            Análisis de Ventas
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <SalesChart />
            <CountryAnalysis />
          </div>
        </section>

        {/* Operations Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            Operaciones y Productos
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <TopProducts />
            <RecentTransactions />
          </div>
        </section>

        {/* Strategic Insights */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            Insights Estratégicos
          </h2>
          <BusinessInsights />
        </section>
      </main>
    </div>
  )
}
