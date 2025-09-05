import { DashboardHeader } from "@/components/dashboard-header"
import { KPICards } from "@/components/kpi-cards"
import { SalesChart } from "@/components/sales-chart"
import { TopProducts } from "@/components/top-products"
import { CountryAnalysis } from "@/components/country-analysis"
import { RecentTransactions } from "@/components/recent-transactions"
import { BusinessInsights } from "@/components/business-insights"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* KPIs Section */}
        <KPICards />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart />
          <CountryAnalysis />
        </div>

        {/* Products and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopProducts />
          <RecentTransactions />
        </div>

        <BusinessInsights />
      </main>
    </div>
  )
}
