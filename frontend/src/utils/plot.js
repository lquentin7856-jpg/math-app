export const sampleFunction = (expr) => {
  const cleanExpr = expr.replace(/\^/g, '**');
  const fn = new Function('x', `return ${cleanExpr};`);
  const points = [];
  for (let x = -10; x <= 10; x += 1) {
    let y = null;
    try {
      y = fn(x);
      if (!Number.isFinite(y)) y = null;
    } catch {
      y = null;
    }
    points.push({ x, y });
  }
  return points;
};
