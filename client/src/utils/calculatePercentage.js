export function calculatePercentage(obtained, maximum) {
  if (!maximum || maximum <= 0 || obtained === null || obtained === undefined) {
    return 0;
  }
  const pct = (Number(obtained) / Number(maximum)) * 100;
  return Math.min(100, Math.max(0, parseFloat(pct.toFixed(2))));
}

export default calculatePercentage;
