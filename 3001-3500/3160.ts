function queryResults(limit: number, queries: number[][]): number[] {
  const res: number[] = [];
  const balls: Map<number, number> = new Map();
  const colors: Map<number, number> = new Map();
  let distinctColors: number = 0;
  colors.set(0, limit + 1);
  for (const query of queries) {
    const ball: number = query[0],
      color: number = query[1];
    const currBallColor: number = balls.get(ball) ?? 0;
    if (currBallColor !== color) {
      colors.set(currBallColor, (colors.get(currBallColor) as number) - 1);
      const currBallColorCount = colors.get(currBallColor);
      const newBallColorCount = (colors.get(color) ?? 0) + 1;
      if (currBallColor !== 0 && currBallColorCount === 0) distinctColors--;
      if (newBallColorCount === 1) distinctColors++;
      colors.set(color, newBallColorCount);
    }
    balls.set(ball, color);
    res.push(distinctColors);
  }
  return res;
}
