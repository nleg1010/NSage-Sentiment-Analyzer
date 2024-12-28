import React from 'react';
import Terminal from './terminal/Terminal';
import AnalysisHeader from './analysis/AnalysisHeader';
import DataTable from './analysis/DataTable';
import SentimentIndicator from './analysis/SentimentIndicator';
import DocumentViewer from './analysis/DocumentViewer';
import KeyInsights from './analysis/KeyInsights';
import { mockMetricsData, mockKeywordsData, mockDocumentSegments } from '../data/mockAnalysisData';

const keyInsights = [
  { text: 'Strong positive sentiment in recent earnings call transcripts with 85.7% confidence score', category: 'primary' },
  { text: 'AWS continues to dominate cloud market with increased enterprise adoption', category: 'primary' },
  { text: 'AI initiatives receiving favorable market reception, particularly in cloud services', category: 'secondary' },
  { text: 'Retail segment shows robust growth indicators despite macro headwinds', category: 'secondary' },
];

const MainPanel: React.FC = () => {
  return (
    <div className="flex-1 bg-[#1F274B] flex flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <AnalysisHeader 
          ticker="AMZN"
          date="March 12, 2024"
          tags={['Earnings', 'Tech Sector']}
        />
        
        <SentimentIndicator score={0.75} confidence={0.857} />
        
        <div className="grid grid-cols-2 gap-6">
          <DataTable 
            title="SENTIMENT METRICS"
            data={mockMetricsData}
          />
          <DataTable 
            title="TOP KEYWORDS"
            data={mockKeywordsData}
          />
        </div>

        <DocumentViewer segments={mockDocumentSegments} />
        <KeyInsights insights={keyInsights} />
      </div>
      
      <Terminal />
    </div>
  );
};

export default MainPanel;