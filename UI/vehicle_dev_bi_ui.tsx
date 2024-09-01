import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Scatter, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Car, ShieldCheck, Factory, Cpu, Calendar, AlertTriangle, CheckCircle2, Brain, Workflow, GitBranch, MessageSquare, TrendingUp, FileText, BookOpen, TestTube, Zap, Truck, List, BarChart2, Users, Eye, EyeOff, GitCommit, GitMerge, GitPullRequest, Info, XCircle, Code, AlertOctagon, Activity, DollarSign, UserCheck, Recycle, Briefcase, TrendingDown, Lightbulb, Target, Sliders, Thermometer, Droplet, Wind } from "lucide-react"

export default function Component() {
  const [timeRange, setTimeRange] = useState('week')
  const [aiInsightsEnabled, setAiInsightsEnabled] = useState(true)
  const [selectedProject, setSelectedProject] = useState('all')
  const [collaborationMode, setCollaborationMode] = useState(false)
  const [viewMode, setViewMode] = useState('manager') // 'manager' or 'developer'

  const [aSpiceData, setASpiceData] = useState([
    { name: 'システム要件', value: 85, target: 100 },
    { name: 'ソフトウェア要件', value: 92, target: 100 },
    { name: 'ソフトウェア設計', value: 78, target: 100 },
    { name: '実装', value: 88, target: 100 },
    { name: 'テスト', value: 95, target: 100 },
  ])

  const asilLevels = {
    A: 95,
    B: 88,
    C: 92,
    D: 85,
  }

  const ganttData = [
    { id: 1, department: '設計', task: 'システム要件定義', start: new Date(2023, 0, 1), end: new Date(2023, 1, 15), progress: 100 },
    { id: 2, department: '設計', task: 'ソフトウェア要件定義', start: new Date(2023, 1, 16), end: new Date(2023, 3, 1), progress: 80 },
    { id: 3, department: '開発', task: 'ソフトウェア設計', start: new Date(2023, 3, 2), end: new Date(2023, 4, 15), progress: 60 },
    { id: 4, department: '開発', task: '実装', start: new Date(2023, 4, 16), end: new Date(2023, 6, 30), progress: 40 },
    { id: 5, department: 'テスト', task: 'ユニットテスト', start: new Date(2023, 7, 1), end: new Date(2023, 8, 15), progress: 20 },
    { id: 6, department: 'テスト', task: '統合テスト', start: new Date(2023, 8, 16), end: new Date(2023, 10, 30), progress: 0 },
  ]

  const branchData = [
    { name: 'main', commits: 120, mergeRequests: 5 },
    { name: 'feature/new-ui', commits: 45, mergeRequests: 2 },
    { name: 'bugfix/critical-issue', commits: 15, mergeRequests: 1 },
    { name: 'release/v1.2', commits: 30, mergeRequests: 3 },
  ]

  const requirementTraceabilityData = [
    { id: 'REQ-001', description: 'システムは最大100km/hで走行できること', implementation: 80, test: 60, verification: 40 },
    { id: 'REQ-002', description: 'ブレーキシステムは0.1秒以内に反応すること', implementation: 100, test: 90, verification: 80 },
    { id: 'REQ-003', description: 'ユーザーインターフェースは3言語をサポートすること', implementation: 70, test: 50, verification: 30 },
    { id: 'REQ-004', description: 'バッテリー残量は1%単位で表示されること', implementation: 90, test: 80, verification: 70 },
  ]

  const tailoredArtifacts = [
    { name: 'システム要件仕様書', status: 'completed', reviewProgress: 100, openIssues: 0 },
    { name: 'ソフトウェア設計書', status: 'inProgress', reviewProgress: 75, openIssues: 5 },
    { name: 'テスト計画書', status: 'notStarted', reviewProgress: 0, openIssues: 0 },
    { name: 'ユーザーマニュアル', status: 'inProgress', reviewProgress: 50, openIssues: 8 },
  ]

  const riskData = [
    { name: '技術的リスク', probability: 0.7, impact: 0.8, mitigation: 60 },
    { name: 'スケジュールリスク', probability: 0.5, impact: 0.9, mitigation: 75 },
    { name: '予算リスク', probability: 0.3, impact: 0.7, mitigation: 80 },
    { name: '品質リスク', probability: 0.4, impact: 0.6, mitigation: 70 },
    { name: 'リソースリスク', probability: 0.6, impact: 0.5, mitigation: 65 },
  ]

  const qualityMetrics = [
    { name: '不具合率', value: 2.5, target: 2.0, unit: '%' },
    { name: '顧客満足度', value: 4.2, target: 4.5, unit: '/5' },
    { name: '製品信頼性', value: 98, target: 99, unit: '%' },
    { name: 'テストカバレッジ', value: 85, target: 90, unit: '%' },
  ]

  const supplyChainData = [
    { name: 'サプライヤーA', onTime: 95, quality: 98, inventory: 80 },
    { name: 'サプライヤーB', onTime: 92, quality: 95, inventory: 75 },
    { name: 'サプライヤーC', onTime: 88, quality: 97, inventory: 60 },
    { name: 'サプライヤーD', onTime: 97, quality: 99, inventory: 85 },
  ]

  const environmentalData = [
    { name: 'CO2排出量', value: 120, target: 100, unit: 'g/km' },
    { name: 'リサイクル可能率', value: 85, target: 90, unit: '%' },
    { name: 'エネルギー効率', value: 22, target: 25, unit: 'km/kWh' },
  ]

  const financialData = {
    budgetUsage: 65,
    costForecast: 110,
    roi: 15,
  }

  const humanResourcesData = [
    { name: 'エンジニアリング', allocated: 45, available: 50, utilization: 90 },
    { name: 'デザイン', allocated: 15, available: 20, utilization: 75 },
    { name: '品質保証', allocated: 25, available: 30, utilization: 83 },
    { name: 'プロジェクト管理', allocated: 10, available: 12, utilization: 83 },
  ]

  const competitorAnalysisData = [
    { name: '自社', performance: 85, efficiency: 80, safety: 90, price: 75 },
    { name: '競合A', performance: 80, efficiency: 85, safety: 85, price: 70 },
    { name: '競合B', performance: 90, efficiency: 75, safety: 80, price: 80 },
    { name: '競合C', performance: 75, efficiency: 90, safety: 85, price: 85 },
  ]

  const customerFeedbackData = {
    satisfactionScore: 4.2,
    topIssues: [
      { name: '燃費', count: 45 },
      { name: '乗り心地', count: 30 },
      { name: 'インフォテインメント', count: 25 },
    ],
  }

  const projectDependencies = [
    { id: 1, name: '車両Aプラットフォーム開発', dependencies: [2, 3] },
    { id: 2, name: 'パワートレイン最適化', dependencies: [4] },
    { id: 3, name: '車体設計', dependencies: [5] },
    { id: 4, name: 'バッテリー技術開発', dependencies: [] },
    { id: 5, name: '内装デザイン', dependencies: [] },
  ]

  const managerAiInsights = [
    {
      type: 'warning',
      message: "プロジェクト全体の進捗が予定より15%遅れています。主な原因は、ソフトウェア設計フェーズの遅延です。",
      action: "設計チームとの緊急ミーティングを設定し、遅延の詳細な原因を特定し、回復計画を立案してください。"
    },
    {
      type: 'success',
      message: "ASIL D要件のコンプライアンスが85%に達し、目標を5%上回っています。",
      action: "成功要因を分析し、他のASILレベルにも適用することを検討してください。"
    },
    {
      type: 'info',
      message: "サプライチェーンの遅延リスクが10%増加しています。主に半導体部品の供給に関する問題が原因です。",
      action: "代替サプライヤーの検討と在庫管理戦略の見直しを行ってください。"
    },
    {
      type: 'error',
      message: "最新の車両シミュレーションで、高速走行時の安定性に関する新たな問題が検出されました。",
      action: "シャーシ設計チームと空力チームの合同レビューを即時に実施し、問題の根本原因を特定してください。"
    },
    {
      type: 'success',
      message: "新しい自動テストスイートの導入により、回帰テストの時間が30%短縮されました。",
      action: "この成功を他のテスト領域にも展開し、全体的なテスト効率を向上させることを検討してください。"
    }
  ]

  const developerAiInsights = [
    {
      type: 'warning',
      message: "あなたが担当するモジュールのコードカバレッジが75%で、目標の85%を下回っています。",
      action: "未カバーの部分を特定し、優先的にユニットテストを追加してください。"
    },
    {
      type: 'success',
      message: "最近のコミットで、静的解析ツールによって検出されるワーニングが30%減少しました。",
      action: "効果的だったリファクタリング手法を文書化し、チーム内で共有してください。"
    },
    {
      type: 'info',
      message: "新しいセンサーAPIの統合が予定より2日早く完了する見込みです。",
      action: "余剰時間を利用して、APIの追加テストやドキュメンテーションの改善を検討してください。"
    },
    {
      type: 'error',
      message: "最新のパフォーマンステストで、メモリリークの可能性が検出されました。",
      action: "メモリプロファイリングツールを使用して問題を特定し、修正してください。"
    },
    {
      type: 'success',
      message: "あなたのプルリクエストの平均レビュー時間が先週比で20%短縮されました。",
      action: "効果的だったコードレビュープラクティスを他のチームメンバーと共有してください。"
    }
  ]

  const innovationIdeas = [
    { id: 1, title: '自動運転AI改善', votes: 45, status: 'under_review' },
    { id: 2, title: 'バッテリー寿命延長技術', votes: 38, status: 'approved' },
    { id: 3, title: '車内空気質モニタリング', votes: 27, status: 'in_progress' },
    { id: 4, title: 'ジェスチャー制御インターフェース', votes: 19, status: 'under_review' },
    { id: 5, title: 'ソーラーパネル統合ボディ', votes: 31, status: 'approved' },
  ]

  const performanceTestData = [
    { name: '加速性能', value: 92, target: 95 },
    { name: '制動距離', value: 88, target: 90 },
    { name: '最高速度', value: 98, target: 100 },
    { name: '燃費', value: 95, target: 95 },
    { name: 'ハンドリング', value: 90, target: 92 },
  ]

  const weatherData = [
    { time: '9:00', temperature: 22, humidity: 60, windSpeed: 5 },
    { time: '12:00', temperature: 26, humidity: 55, windSpeed: 7 },
    { time: '15:00', temperature: 28, humidity: 50, windSpeed: 8 },
    { time: '18:00', temperature: 25, humidity: 58, windSpeed: 6 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-4 border rounded-lg shadow-lg">
          <p className="label font-bold">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="p-8 bg-background text-foreground">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          自動車開発ダッシュボード
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="期間を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">日次</SelectItem>
              <SelectItem value="week">週次</SelectItem>
              <SelectItem value="month">月次</SelectItem>
              <SelectItem value="quarter">四半期</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="プロジェクトを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全プロジェクト</SelectItem>
              <SelectItem value="vehicleA">車両A</SelectItem>
              <SelectItem value="vehicleB">派生車両B</SelectItem>
              <SelectItem value="manufacturing">製造</SelectItem>
              <SelectItem value="hardware">ハードウェア</SelectItem>
            </SelectContent>
          </Select>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="view-mode"
                    checked={viewMode === 'developer'}
                    onCheckedChange={(checked) => setViewMode(checked ? 'developer' : 'manager')}
                  />
                  <label htmlFor="view-mode">
                    {viewMode === 'manager' ? <Eye className="h-4 w-4" /> : <Code className="h-4 w-4" />}
                    {viewMode === 'manager' ? 'マネージャービュー' : '開発者ビュー'}
                  </label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>ビューモードを切り替えます</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="ai-insights"
                    checked={aiInsightsEnabled}
                    onCheckedChange={setAiInsightsEnabled}
                  />
                  <label htmlFor="ai-insights">AI分析</label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>AI分析を有効/無効にします</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {aiInsightsEnabled && (
        <Card className="mb-6 border-primary/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Brain className="mr-2 text-primary" />
              AI分析インサイト
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {(viewMode === 'manager' ? managerAiInsights : developerAiInsights).map((insight, index) => (
                <Card key={index} className={`bg-${insight.type} text-${insight.type}-foreground`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      {insight.type === 'warning' && <AlertTriangle className="mr-2" />}
                      {insight.type === 'success' && <CheckCircle2 className="mr-2" />}
                      {insight.type === 'info' && <Info className="mr-2" />}
                      {insight.type === 'error' && <XCircle className="mr-2" />}
                      {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{insight.message}</p>
                    <p className="text-sm font-bold">推奨アクション: {insight.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <TabsTrigger value="overview">概要</TabsTrigger>
          <TabsTrigger value="risk">リスク管理</TabsTrigger>
          <TabsTrigger value="quality">品質メトリクス</TabsTrigger>
          <TabsTrigger value="supplyChain">サプライチェーン</TabsTrigger>
          <TabsTrigger value="environmental">環境影響</TabsTrigger>
          <TabsTrigger value="financial">財務</TabsTrigger>
          <TabsTrigger value="hr">人材リソース</TabsTrigger>
          <TabsTrigger value="competitors">競合分析</TabsTrigger>
          <TabsTrigger value="feedback">顧客フィードバック</TabsTrigger>
          <TabsTrigger value="dependencies">プロジェクト依存関係</TabsTrigger>
          <TabsTrigger value="innovation">イノベーション</TabsTrigger>
          <TabsTrigger value="performance">性能テスト</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Car className="mr-2 inline-block" /> 車両開発進捗
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">全体進捗率</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <AlertOctagon className="mr-2 inline-block" /> リスク状況
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">中</div>
                <p className="text-xs text-muted-foreground">全体リスクレベル</p>
                <Progress value={50} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Activity className="mr-2 inline-block" /> 品質指標
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2/5</div>
                <p className="text-xs text-muted-foreground">顧客満足度</p>
                <Progress value={84} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <DollarSign className="mr-2 inline-block" /> 予算使用状況
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65%</div>
                <p className="text-xs text-muted-foreground">予算消化率</p>
                <Progress value={65} className="mt-2" />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>プロジェクトマイルストーン</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ganttData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="task" type="category" />
                  <Tooltip />
                  <Bar dataKey="progress" fill="#8884d8">
                    {ganttData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertOctagon className="mr-2" />
                リスク管理ダッシュボード
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid />
                  <XAxis type="number" dataKey="impact" name="影響度" unit="" />
                  <YAxis type="number" dataKey="probability" name="発生確率" unit="" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                  <Legend />
                  <Scatter name="リスク" data={riskData} fill="#8884d8">
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">リスク軽減進捗</h3>
                {riskData.map((risk, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span>{risk.name}</span>
                    <div className="flex items-center">
                      <Progress value={risk.mitigation} className="w-24 mr-2" />
                      <span>{risk.mitigation}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2" />
                品質メトリクス
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {qualityMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{metric.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}{metric.unit}</div>
                      <p className="text-sm text-muted-foreground">目標: {metric.target}{metric.unit}</p>
                      <Progress value={(metric.value / metric.target) * 100} className="mt-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="supplyChain" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="mr-2" />
                サプライチェーン可視化
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={supplyChainData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="onTime" name="納期遵守率" fill="#8884d8" />
                  <Bar dataKey="quality" name="品質スコア" fill="#82ca9d" />
                  <Bar dataKey="inventory" name="在庫レベル" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="environmental" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Recycle className="mr-2" />
                環境影響評価
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {environmentalData.map((metric, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{metric.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}{metric.unit}</div>
                      <p className="text-sm text-muted-foreground">目標: {metric.target}{metric.unit}</p>
                      <Progress value={(metric.value / metric.target) * 100} className="mt-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2" />
                財務トラッキング
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>予算使用状況</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{financialData.budgetUsage}%</div>
                    <Progress value={financialData.budgetUsage} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>コスト予測</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{financialData.costForecast}%</div>
                    <p className="text-sm text-muted-foreground">予算比</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>ROI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{financialData.roi}%</div>
                    <p className="text-sm text-muted-foreground">予測投資収益率</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hr" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="mr-2" />
                人材リソース管理
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={humanResourcesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="allocated" name="割り当て済み" fill="#8884d8" />
                  <Bar dataKey="available" name="利用可能" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">リソース稼働率</h3>
                {humanResourcesData.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span>{dept.name}</span>
                    <div className="flex items-center">
                      <Progress value={dept.utilization} className="w-24 mr-2" />
                      <span>{dept.utilization}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                競合分析
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={competitorAnalysisData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="性能" dataKey="performance" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="効率" dataKey="efficiency" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Radar name="安全性" dataKey="safety" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                  <Radar name="価格競争力" dataKey="price" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" />
                顧客フィードバック
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>顧客満足度スコア</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{customerFeedbackData.satisfactionScore}/5</div>
                    <Progress value={(customerFeedbackData.satisfactionScore / 5) * 100} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>主要な改善領域</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={customerFeedbackData.topIssues}
                          dataKey="count"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {customerFeedbackData.topIssues.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dependencies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitBranch className="mr-2" />
                プロジェクト間の依存関係
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>プロジェクト名</TableHead>
                      <TableHead>依存関係</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projectDependencies.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>
                          {project.dependencies.length > 0 ? (
                            project.dependencies.map((depId) => (
                              <Badge key={depId} variant="secondary" className="mr-1">
                                {projectDependencies.find((p) => p.id === depId)?.name}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-muted-foreground">なし</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="innovation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2" />
                イノベーションアイデア
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>アイデア</TableHead>
                      <TableHead>投票数</TableHead>
                      <TableHead>ステータス</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {innovationIdeas.map((idea) => (
                      <TableRow key={idea.id}>
                        <TableCell>{idea.title}</TableCell>
                        <TableCell>{idea.votes}</TableCell>
                        <TableCell>
                          <Badge variant={
                            idea.status === 'approved' ? 'success' :
                            idea.status === 'in_progress' ? 'warning' : 'secondary'
                          }>
                            {idea.status === 'approved' ? '承認済み' :
                             idea.status === 'in_progress' ? '進行中' : '審査中'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2" />
                性能テスト結果
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={performanceTestData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="実績値" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="目標値" dataKey="target" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {viewMode === 'developer' && (
        <Card className="mt-6 border-primary/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Code className="mr-2 text-primary" />
              開発者ビュー
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold mb-2">担当タスク</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'ブレーキシステムの最適化', priority: 'high', deadline: '2023-10-15', progress: 60 },
                    { name: 'ユーザーインターフェースの多言語対応', priority: 'medium', deadline: '2023-10-30', progress: 40 },
                    { name: 'バッテリー管理システムのテスト', priority: 'low', deadline: '2023-11-15', progress: 20 },
                  ].map((task, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div>
                        <span>{task.name}</span>
                        <div className="flex items-center mt-1">
                          <Progress value={task.progress} className="w-24 mr-2" />
                          <span className="text-sm text-muted-foreground">{task.progress}%</span>
                        </div>
                      </div>
                      <div>
                        <Badge variant={
                          task.priority === 'high' ? 'destructive' :
                          task.priority === 'medium' ? 'warning' : 'secondary'
                        }>
                          {task.priority}
                        </Badge>
                        <span className="ml-2 text-sm text-muted-foreground">{task.deadline}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">最近のコードレビュー</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'PR #123: Add new sensor integration', status: 'approved', reviewer: 'Alice', comments: 5 },
                    { name: 'PR #124: Refactor authentication module', status: 'changes_requested', reviewer: 'Bob', comments: 8 },
                    { name: 'PR #125: Update documentation', status: 'pending', reviewer: 'Charlie', comments: 2 },
                  ].map((review, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span>{review.name}</span>
                      <div>
                        <Badge variant={
                          review.status === 'approved' ? 'success' :
                          review.status === 'changes_requested' ? 'destructive' : 'secondary'
                        }>
                          {review.status}
                        </Badge>
                        <span className="ml-2 text-sm text-muted-foreground">by {review.reviewer}</span>
                        <span className="ml-2 text-sm text-muted-foreground">({review.comments} comments)</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {collaborationMode && (
        <Card className="mt-6 border-primary/50 shadow-lg">
          <CardHeader>
            <Car className="mr-2 text-primary" />
            <CardTitle className="flex items-center text-2xl">
              <MessageSquare className="mr-2 text-primary" />
              リアルタイムコラボレーション
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {['Alice', 'Bob', 'Charlie', 'Diana'].map((member, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={`/avatars/${member.toLowerCase()}.png`} alt={member} />
                    <AvatarFallback>{member[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{member}</p>
                    <p className="text-xs text-muted-foreground">オンライン</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                チャットを開始
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="mt-6 border-primary/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Sliders className="mr-2 text-primary" />
            テスト環境モニタリング
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {weatherData.map((data, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{data.time}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Thermometer className="mr-2 h-4 w-4" />
                      <span>{data.temperature}°C</span>
                    </div>
                    <div className="flex items-center">
                      <Droplet className="mr-2 h-4 w-4" />
                      <span>{data.humidity}%</span>
                    </div>
                    <div className="flex items-center">
                      <Wind className="mr-2 h-4 w-4" />
                      <span>{data.windSpeed} m/s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}