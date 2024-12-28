export interface SentimentData {
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  score: number;
  timestamp: string;
}

export interface AnalyticsData {
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;
  averageScore: number;
}

export interface HistoryItem {
  command: string;
  output: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  color: string;
}