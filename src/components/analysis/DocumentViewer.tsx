import React from 'react';

interface SentimentSegment {
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  score: number;
}

interface Props {
  segments: SentimentSegment[];
}

const DocumentViewer: React.FC<Props> = ({ segments }) => {
  const getSentimentColor = (sentiment: string, score: number) => {
    const opacity = Math.min(Math.max(score * 0.8, 0.2), 0.8);
    switch (sentiment) {
      case 'positive': return `rgba(34, 197, 94, ${opacity})`;
      case 'negative': return `rgba(239, 68, 68, ${opacity})`;
      default: return `rgba(156, 163, 175, ${opacity})`;
    }
  };

  return (
    <div className="bg-[#0D0D0D] rounded-lg p-4 mb-6">
      <h3 className="text-[#FF9913] text-sm font-semibold mb-4">DOCUMENT ANALYSIS</h3>
      <div className="max-h-[400px] overflow-y-auto">
        {segments.map((segment, index) => (
          <span
            key={index}
            style={{ backgroundColor: getSentimentColor(segment.sentiment, segment.score) }}
            className="text-white text-sm leading-relaxed"
          >
            {segment.text}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DocumentViewer;