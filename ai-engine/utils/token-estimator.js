/**
 * Conservative heuristic token estimator (~4 chars per token)
 */
export function estimateTokenCount(text = '') {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

export default estimateTokenCount;
