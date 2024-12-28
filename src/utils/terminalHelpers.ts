import { COMMANDS } from './constants';

export const getCommandOutput = (command: string): string => {
  const [cmd, ...args] = command.toLowerCase().split(' ');

  switch (cmd) {
    case COMMANDS.HELP:
      return 'Available commands: analyze <ticker>, sentiment <ticker>, clear, help, export';
    case COMMANDS.ANALYZE:
      return getAnalysisOutput(args[0]);
    case COMMANDS.CLEAR:
      return '';
    default:
      return 'Command not found. Type "help" for available commands.';
  }
};

const getAnalysisOutput = (ticker: string): string => {
  if (!ticker) return 'Please provide a ticker symbol. Example: analyze AMZN';
  
  return `${ticker.toUpperCase()} Sentiment Analysis Report
Date: ${new Date().toLocaleDateString()}

SUMMARY
-------
Overall Sentiment: BULLISH
Confidence Score: 85.7%
Analysis based on 1,247 data points

KEY FINDINGS
------------
• Strong positive sentiment in recent earnings call transcripts
• Retail segment showing robust growth indicators
• AWS maintains market leadership position
• AI initiatives receiving favorable market reception

SENTIMENT BREAKDOWN
------------------
Positive mentions: 65%
Neutral mentions: 25%
Negative mentions: 10%

TOP POSITIVE FACTORS
-------------------
1. Cloud services growth
2. AI/ML implementation
3. Prime membership metrics
4. International expansion

RISK FACTORS
-----------
• Regulatory concerns (LOW)
• Competition in cloud (MODERATE)
• Operating costs (LOW)

Use 'export ${ticker}' to save this report.`;
};