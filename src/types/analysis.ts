export interface SentimentSegment {
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  score: number;
}

export interface MetricsData {
  metric: string;
  value: string;
  change: string;
}

export interface KeyInsight {
  text: string;
  category: 'primary' | 'secondary';
}