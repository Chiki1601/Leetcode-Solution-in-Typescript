function maxScoreSightseeingPair(values: number[]): number {
  let max = 0, score = values[0];
  for (let i = 1; i < values.length; ++i) {
    --score;
    if (score + values[i] > max) max = score + values[i];
    if (values[i] > score) score = values[i];
  }
  return max;
};
