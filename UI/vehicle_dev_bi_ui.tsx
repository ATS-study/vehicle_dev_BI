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
import { Car, ShieldCheck, Factory, Cpu, Calendar, AlertTriangle, CheckCircle2, Brain, Workflow, GitBranch, MessageSquare, TrendingUp, FileText, BookOpen, TestTube, Zap, Truck, List, BarChart2, Users, Eye, EyeOff, GitCommit, GitMerge, GitPullRequest, Info, XCircle, Code, AlertOctagon, Activity, DollarSign, UserCheck, Recycle, Briefcase, TrendingDown, Lightbulb, Target, Sliders, Thermometer, Droplet, Wind, Settings, Layers, GitFork, GitPullRequestDraft, Palette } from "lucide-react"

export default function Component() {
  const [timeRange, setTimeRange] = useState('week')
  const [aiInsightsEnabled, setAiInsightsEnabled] = useState(true)
  const [selectedProject, setSelectedProject] = useState('all')
  const [collaborationMode, setCollaborationMode] = useState(false)
  const [viewMode, setViewMode] = useState('manager') // 'manager' or 'developer'
  const [baseColor, setBaseColor] = useState('blue')

  // カラーテーマの定義
  const colorThemes = {
    blue: {
      primary: '#3b82f6',
      secondary: '#60a5fa',
      accent: '#2563eb',
      background: '#f0f9ff',
      text: '#1e3a8a',
    },
    green: {
      primary: '#10b981',
      secondary: '#34d399',
      accent: '#059669',
      background: '#ecfdf5',
      text: '#064e3b',
    },
    purple: {
      primary: '#8b5cf6',
      secondary: '#a78bfa',
      accent: '#7c3aed',
      background: '#f5f3ff',
      text: '#4c1d95',
    },
    orange: {
      primary: '#f97316',
      secondary: '#fb923c',
      accent: '#ea580c',
      background: '#fff7ed',
      text: '#7c2d12',
    },
  }

  const currentTheme = colorThemes[baseColor]

  const aSpiceData = [
    { name: 'システム要件', value: 85, target: 100 },
    { name: 'ソフトウェア要件', value: 92, target: 100 },
    { name: 'ソフトウェア設計', value: 78, target: 100 },
    { name: '実装', value: 88, target: 100 },
    { name: 'テスト', value: 95, target: 100 },
  ]

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

  const configurationItems = [
    { id: 'CI-001', name: 'エンジン制御ユニット', version: '2.3.1', lastModified: '2023-09-15', status: 'approved' },
    { id: 'CI-002', name: 'インフォテインメントシステム', version: '4.0.2', lastModified: '2023-09-20', status: 'in_review' },
    { id: 'CI-003', name: 'ブレーキ制御モジュール', version: '1.5.0', lastModified: '2023-09-18', status: 'approved' },
    { id: 'CI-004', name: 'バッテリー管理システム', version: '3.1.4', lastModified: '2023-09-22', status: 'in_development' },
  ]

  const baselineData = [
    { id: 'BL-001', name: '車両Aプラットフォーム基本設計', date: '2023-08-01', status: 'locked' },
    { id: 'BL-002', name: 'パワートレイン仕様v2', date: '2023-08-15', status: 'locked' },
    { id: 'BL-003', name: '安全システム要件', date: '2023-09-01', status: 'in_review' },
    { id: 'BL-004', name: 'ユーザーインターフェース設計', date: '2023-09-10', status: 'proposed' },
  ]

  const changeRequests = [
    { id: 'CR-001', title: 'バッテリー容量増加', status: 'approved', priority: 'high', impact: '中' },
    { id: 'CR-002', title: 'ダッシュボードUIの改善', status: 'in_review', priority: 'medium', impact: '低' },
    { id: 'CR-003', title: '自動駐車機能の追加', status: 'proposed', priority: 'low', impact: '高' },
    { id: 'CR-004', title: 'ブレーキシステムの最適化', status: 'implemented', priority: 'high', impact: '中' },
  ]

  const developmentPhases = [
    { name: '要件定義', progress: 100, startDate: '2023-01-01', endDate: '2023-02-28' },
    { name: '設計', progress: 85, startDate: '2023-03-01', endDate: '2023-05-31' },
    { name: '実装', progress: 60, startDate: '2023-06-01', endDate: '2023-09-30' },
    { name: 'テスト', progress: 30, startDate: '2023-10-01', endDate: '2023-12-31' },
    { name: '検証', progress: 10, startDate: '2024-01-01', endDate: '2024-02-29' },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-4 border rounded-lg shadow-lg" style={{ background: currentTheme.background, color: currentTheme.text }}>
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
    <div className="p-8" style={{ background: currentTheme.background, color: currentTheme.text }}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
        <h1 className="text-4xl font-bold" style={{ color: currentTheme.primary }}>
          自動車開発ダッシュボード
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]" style={{ borderColor: currentTheme.primary }}>
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
            <SelectTrigger className="w-[180px]" style={{ borderColor: currentTheme.primary }}>
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
                    style={{ backgroundColor: viewMode === 'developer' ? currentTheme.primary : currentTheme.background }}
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
                    style={{ backgroundColor: aiInsightsEnabled ? currentTheme.primary : currentTheme.background }}
                  />
                  <label htmlFor="ai-insights">AI分析</label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>AI分析を有効/無効にします</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Select value={baseColor} onValueChange={setBaseColor}>
            <SelectTrigger className="w-[180px]" style={{ borderColor: currentTheme.primary }}>
              <SelectValue placeholder="カラーテーマを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blue">ブルー</SelectItem>
              <SelectItem value="green">グリーン</SelectItem>
              <SelectItem value="purple">パープル</SelectItem>
              <SelectItem value="orange">オレンジ</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {aiInsightsEnabled && (
        <Card className="mb-6 border-primary/50 shadow-lg" style={{ borderColor: currentTheme.primary }}>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl" style={{ color: currentTheme.primary }}>
              <Brain className="mr-2" />
              AI分析インサイト
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {(viewMode === 'manager' ? managerAiInsights : developerAiInsights).map((insight, index) => (
                <Card key={index} style={{ backgroundColor: currentTheme.background, borderColor: currentTheme[insight.type === 'warning' ? 'accent' : 'secondary'] }}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center" style={{ color: currentTheme[insight.type === 'warning' ? 'accent' : 'secondary'] }}>
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
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <TabsTrigger value="overview" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>概要</TabsTrigger>
          <TabsTrigger value="configuration" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>構成管理</TabsTrigger>
          <TabsTrigger value="baseline" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>ベースライン</TabsTrigger>
          <TabsTrigger value="changes" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>変更管理</TabsTrigger>
          <TabsTrigger value="phases" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>開発フェーズ</TabsTrigger>
          <TabsTrigger value="risk" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>リスク管理</TabsTrigger>
          <TabsTrigger value="quality" style={{ backgroundColor: currentTheme.background, color: currentTheme.text, borderColor: currentTheme.primary }}>品質メトリクス</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card style={{ borderColor: currentTheme.primary }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium" style={{ color: currentTheme.primary }}>
                  <Car className="mr-2 inline-block" /> 車両開発進捗
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">全体進捗率</p>
                <Progress value={75} className="mt-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
              </CardContent>
            </Card>
            <Card style={{ borderColor: currentTheme.primary }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium" style={{ color: currentTheme.primary }}>
                  <AlertOctagon className="mr-2 inline-block" /> リスク状況
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">中</div>
                <p className="text-xs text-muted-foreground">全体リスクレベル</p>
                <Progress value={50} className="mt-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
              </CardContent>
            </Card>
            <Card style={{ borderColor: currentTheme.primary }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium" style={{ color: currentTheme.primary }}>
                  <Activity className="mr-2 inline-block" /> 品質指標
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2/5</div>
                <p className="text-xs text-muted-foreground">顧客満足度</p>
                <Progress value={84} className="mt-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
              </CardContent>
            </Card>
            <Card style={{ borderColor: currentTheme.primary }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium" style={{ color: currentTheme.primary }}>
                  <DollarSign className="mr-2 inline-block" /> 予算使用状況
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65%</div>
                <p className="text-xs text-muted-foreground">予算消化率</p>
                <Progress value={65} className="mt-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
              </CardContent>
            </Card>
          </div>
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle style={{ color: currentTheme.primary }}>開発フェーズ進捗</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={developmentPhases} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="progress" fill={currentTheme.primary}>
                    {developmentPhases.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? currentTheme.primary : currentTheme.secondary} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuration" className="space-y-4">
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: currentTheme.primary }}>
                <Settings className="mr-2" />
                構成管理
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>名称</TableHead>
                    <TableHead>バージョン</TableHead>
                    <TableHead>最終更新日</TableHead>
                    <TableHead>ステータス</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {configurationItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.version}</TableCell>
                      <TableCell>{item.lastModified}</TableCell>
                      <TableCell>
                        <Badge variant={item.status === 'approved' ? 'success' : 'secondary'} style={{ backgroundColor: item.status === 'approved' ? currentTheme.accent : currentTheme.secondary }}>
                          {item.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="baseline" className="space-y-4">
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: currentTheme.primary }}>
                <Layers className="mr-2" />
                ベースライン管理
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>名称</TableHead>
                    <TableHead>日付</TableHead>
                    <TableHead>ステータス</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {baselineData.map((baseline) => (
                    <TableRow key={baseline.id}>
                      <TableCell>{baseline.id}</TableCell>
                      <TableCell>{baseline.name}</TableCell>
                      <TableCell>{baseline.date}</TableCell>
                      <TableCell>
                        <Badge variant={baseline.status === 'locked' ? 'success' : 'secondary'} style={{ backgroundColor: baseline.status === 'locked' ? currentTheme.accent : currentTheme.secondary }}>
                          {baseline.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="changes" className="space-y-4">
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: currentTheme.primary }}>
                <GitFork className="mr-2" />
                変更管理
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>タイトル</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead>優先度</TableHead>
                    <TableHead>影響度</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {changeRequests.map((cr) => (
                    <TableRow key={cr.id}>
                      <TableCell>{cr.id}</TableCell>
                      <TableCell>{cr.title}</TableCell>
                      <TableCell>
                        <Badge variant={cr.status === 'approved' ? 'success' : 'secondary'} style={{ backgroundColor: cr.status === 'approved' ? currentTheme.accent : currentTheme.secondary }}>
                          {cr.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={cr.priority === 'high' ? 'destructive' : 'secondary'} style={{ backgroundColor: cr.priority === 'high' ? currentTheme.accent : currentTheme.secondary }}>
                          {cr.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{cr.impact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phases" className="space-y-4">
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: currentTheme.primary }}>
                <GitPullRequestDraft className="mr-2" />
                開発フェーズ
              </CardTitle>
            </CardHeader>
            <CardContent>
              {developmentPhases.map((phase, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{phase.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {phase.startDate} - {phase.endDate}
                    </span>
                  </div>
                  <Progress value={phase.progress} className="w-full" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
                  <span className="text-sm text-muted-foreground">{phase.progress}% 完了</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="space-y-4">
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: currentTheme.primary }}>
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
                  <Scatter name="リスク" data={riskData} fill={currentTheme.primary}>
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? currentTheme.primary : currentTheme.secondary} />
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
                      <Progress value={risk.mitigation} className="w-24 mr-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
                      <span>{risk.mitigation}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <Card style={{ borderColor: currentTheme.primary }}>
            <CardHeader>
              <CardTitle className="flex items-center" style={{ color: currentTheme.primary }}>
                <Activity className="mr-2" />
                品質メトリクス
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {qualityMetrics.map((metric, index) => (
                  <Card key={index} style={{ borderColor: currentTheme.secondary }}>
                    <CardHeader>
                      <CardTitle style={{ color: currentTheme.secondary }}>{metric.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}{metric.unit}</div>
                      <p className="text-sm text-muted-foreground">目標: {metric.target}{metric.unit}</p>
                      <Progress value={(metric.value / metric.target) * 100} className="mt-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {viewMode === 'developer' && (
        <Card className="mt-6 border-primary/50 shadow-lg" style={{ borderColor: currentTheme.primary }}>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl" style={{ color: currentTheme.primary }}>
              <Code className="mr-2" />
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
                          <Progress value={task.progress} className="w-24 mr-2" style={{ backgroundColor: currentTheme.secondary, color: currentTheme.primary }} />
                          <span className="text-sm text-muted-foreground">{task.progress}%</span>
                        </div>
                      </div>
                      <div>
                        <Badge variant={
                          task.priority === 'high' ? 'destructive' :
                          task.priority === 'medium' ? 'warning' : 'secondary'
                        } style={{ backgroundColor: task.priority === 'high' ? currentTheme.accent : currentTheme.secondary }}>
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
                        } style={{ backgroundColor: review.status === 'approved' ? currentTheme.accent : currentTheme.secondary }}>
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

      <Card className="mt-6 border-primary/50 shadow-lg" style={{ borderColor: currentTheme.primary }}>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl" style={{ color: currentTheme.primary }}>
            <Sliders className="mr-2" />
            テスト環境モニタリング
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {weatherData.map((data, index) => (
              <Card key={index} style={{ borderColor: currentTheme.secondary }}>
                <CardHeader>
                  <CardTitle style={{ color: currentTheme.secondary }}>{data.time}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Thermometer className="mr-2 h-4 w-4" style={{ color: currentTheme.accent }} />
                      <span>{data.temperature}°C</span>
                    </div>
                    <div className="flex items-center">
                      <Droplet className="mr-2 h-4 w-4" style={{ color: currentTheme.accent }} />
                      <span>{data.humidity}%</span>
                    </div>
                    <div className="flex items-center">
                      <Wind className="mr-2 h-4 w-4" style={{ color: currentTheme.accent }} />
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