import { MetricsData, SentimentSegment } from '../types/analysis';

export const mockMetricsData: MetricsData[] = [
  { metric: 'Positive Mentions', value: '647', change: '+12.3%' },
  { metric: 'Negative Mentions', value: '124', change: '-5.2%' },
  { metric: 'Neutral Mentions', value: '476', change: '+2.1%' },
  { metric: 'Total Documents', value: '1,247', change: '+8.7%' },
];

export const mockKeywordsData: MetricsData[] = [
  { metric: 'Cloud Services', value: '187', change: '+15.4%' },
  { metric: 'AI/ML', value: '156', change: '+24.8%' },
  { metric: 'Prime', value: '134', change: '+5.2%' },
  { metric: 'AWS', value: '198', change: '+18.3%' },
];

export const mockDocumentSegments: SentimentSegment[] = [
  {
    text: "Amazon Web Services (AWS) continues to demonstrate strong growth, with revenue increasing 33% year-over-year. ",
    sentiment: "positive",
    score: 0.85
  },
  {
    text: "Enterprise adoption remains robust despite macro-economic challenges. ",
    sentiment: "neutral",
    score: 0.6
  },
  {
    text: "Our investments in AI and machine learning capabilities are driving increased customer engagement. ",
    sentiment: "positive",
    score: 0.9
  },
  {
    text: "While facing some headwinds in international markets, ",
    sentiment: "negative",
    score: 0.7
  },
  {
    text: "we're seeing encouraging signs of stabilization and growth in key regions.",
    sentiment: "positive",
    score: 0.75
  }
];