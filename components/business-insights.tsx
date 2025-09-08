import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react"

const keyInsights = [
  {
    title: "Exceptional Growth Performance",
    description: "Revenue increased 46.5% this period, exceeding projections by 23% with strong market momentum",
    type: "success",
    impact: "High",
    icon: TrendingUp,
  },
  {
    title: "UK Market Dominance",
    description: "United Kingdom represents 91.2% of total revenue with £7,850,250 in sales volume",
    type: "info",
    impact: "High",
    icon: Target,
  },
  {
    title: "Home Decoration Category Leadership",
    description: "Decorative home products generate 45% of total revenue with premium margins",
    type: "success",
    impact: "Medium",
    icon: CheckCircle,
  },
  {
    title: "German Market Expansion Opportunity",
    description: "German market shows 45% growth trajectory with significant expansion potential",
    type: "warning",
    impact: "Medium",
    icon: AlertTriangle,
  },
]

const recommendations = [
  {
    priority: "High",
    action: "Expand decorative product inventory",
    reason: "Category represents 45% of revenue with sustained high demand patterns",
    expectedImpact: "+15% revenue",
  },
  {
    priority: "High",
    action: "Develop German market strategy",
    reason: "45% growth rate indicates substantial market opportunity for expansion",
    expectedImpact: "+£2,000 monthly",
  },
  {
    priority: "Medium",
    action: "Optimize kitchen product pricing",
    reason: "64% average margin allows for strategic pricing adjustments",
    expectedImpact: "+8% margin",
  },
  {
    priority: "Medium",
    action: "Implement customer retention program",
    reason: "47% retention rate presents improvement opportunity for customer lifetime value",
    expectedImpact: "+12% retention",
  },
]

const performanceMetrics = [
  { metric: "Sales Efficiency", value: "92%", status: "excellent", benchmark: "85%" },
  { metric: "Customer Satisfaction", value: "4.2/5", status: "good", benchmark: "4.0/5" },
  { metric: "Inventory Turnover", value: "8.5x", status: "excellent", benchmark: "6.0x" },
  { metric: "Conversion Rate", value: "85%", status: "good", benchmark: "75%" },
]

const forecasts = [
  { period: "Next Month", revenue: 22500, confidence: "85%", trend: "up" },
  { period: "Next Quarter", revenue: 65000, confidence: "78%", trend: "up" },
  { period: "Next 6 Months", revenue: 125000, confidence: "72%", trend: "up" },
]

export function BusinessInsights() {
  return (
    <div className="space-y-6">
      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-slate-800 font-serif text-lg font-semibold">
            Strategic Business Intelligence
          </CardTitle>
          <CardDescription className="text-slate-600 text-sm">
            Data-driven insights and performance analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyInsights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <Alert
                  key={index}
                  className={`border-l-4 ${
                    insight.type === "success"
                      ? "border-l-emerald-600 bg-emerald-50"
                      : insight.type === "warning"
                        ? "border-l-amber-600 bg-amber-50"
                        : "border-l-blue-600 bg-blue-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className={`h-5 w-5 mt-0.5 ${
                        insight.type === "success"
                          ? "text-emerald-700"
                          : insight.type === "warning"
                            ? "text-amber-700"
                            : "text-blue-700"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-slate-800">{insight.title}</h4>
                        <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                          {insight.impact}
                        </Badge>
                      </div>
                      <AlertDescription className="text-xs text-slate-700">{insight.description}</AlertDescription>
                    </div>
                  </div>
                </Alert>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-slate-800 font-serif text-lg font-semibold">Strategic Recommendations</CardTitle>
          <CardDescription className="text-slate-600 text-sm">
            Actionable insights for performance optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg bg-slate-50 border-l-4 border-l-blue-600">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={rec.priority === "High" ? "destructive" : "secondary"} className="text-xs">
                      {rec.priority}
                    </Badge>
                    <h4 className="font-semibold text-sm text-slate-800">{rec.action}</h4>
                  </div>
                  <span className="text-xs font-medium text-emerald-700">{rec.expectedImpact}</span>
                </div>
                <p className="text-xs text-slate-600">{rec.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-slate-800 font-serif text-lg font-semibold">Performance Benchmarks</CardTitle>
          <CardDescription className="text-slate-600 text-sm">
            Industry comparison and performance indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-600">{metric.metric}</span>
                  <Badge
                    variant={
                      metric.status === "excellent" ? "default" : metric.status === "good" ? "secondary" : "destructive"
                    }
                    className="text-xs"
                  >
                    {metric.status === "excellent" ? "Excellent" : metric.status === "good" ? "Good" : "Improve"}
                  </Badge>
                </div>
                <div className="text-lg font-bold text-slate-800">{metric.value}</div>
                <div className="text-xs text-slate-500">Benchmark: {metric.benchmark}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-slate-800 font-serif text-lg font-semibold">Revenue Projections</CardTitle>
          <CardDescription className="text-slate-600 text-sm">
            Forward-looking financial forecasts based on current trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {forecasts.map((forecast, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <div>
                    <p className="font-medium text-slate-800">{forecast.period}</p>
                    <p className="text-xs text-slate-600">Confidence: {forecast.confidence}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-slate-800">£{forecast.revenue.toLocaleString()}</p>
                  <p className="text-xs text-emerald-600">Upward trajectory</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
