const chartPatterns = [
  {
    pattern: "Ascending Continuation Triangle",
    implication:
      "A bullish signal indicating a possible continuation of the current uptrend.",
    description:
      "An Ascending Continuation Triangle shows two converging trendlines. The lower trendline is rising, and the upper trendline is horizontal. This pattern occurs because the lows are moving increasingly higher, but the highs are maintaining a constant price level. The pattern will have two highs and two lows, all touching the trendlines. This pattern is confirmed when the price breaks out of the triangle formation to close above the upper trendline.",
    chart: "Figure 1: Ascending Continuation Triangle",
    chartDescription:
      "Volume is an important factor to consider. Typically, volume follows a reliable pattern: volume should diminish as the price swings back and forth between an increasingly narrow range of highs and lows. However, when breakout occurs, there should be a noticeable increase in volume. If this volume picture is not clear, investors should be cautious about decisions based on this Triangle.",
    characteristics: [
      "Occurrence of a Breakout: Prices should break out somewhere between three-quarters and two-thirds of the horizontal width of the formation.",
      "Duration of the Triangle: It may take between one and three months to form.",
      "Shape of Triangle: The horizontal top trendline should be close to horizontal.",
      "Volume: Volume should decrease as the pattern progresses toward the apex. At breakout, there should be a noticeable increase in volume.",
    ],
    tradingConsiderations: [
      "Duration of the Pattern: Consider the pattern's duration in relation to your trading time horizons.",
      "Target Price: Ensure the target price provides adequate returns after costs.",
      "Inbound Trend: A longer inbound trend may indicate consolidation before the price move.",
    ],
    criteriaSupport: [
      "Support and Resistance: Look for a region of support at the lowest low and a line of resistance at the top of the Triangle.",
      "Moving Average: Compare prices to the 200-day Moving Average for a stronger signal.",
      "Volume: A strong volume spike on the day of pattern confirmation is a strong indicator.",
    ],
    criteriaRefute: [
      "No Volume Spike on Breakout: Lack of a volume spike on confirmation indicates less reliability.",
      "Short Inbound Trend: A significantly shorter inbound trend makes the pattern less reliable.",
      "Underlying Behavior: The pattern indicates that buyers are more aggressive than sellers, and supply depletes causing a breakout from the top trendline.",
    ],
  },
];
///{pattern,implication,description,chart,chartDescription,characteristics:[],[tradingConsiderations:[],criteriaSupport:[],criteriaRefute:[]} this is the json schema

export default chartPatterns;
