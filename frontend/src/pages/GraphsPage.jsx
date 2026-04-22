import { useMemo, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function GraphsPage() {
  const [expr, setExpr] = useState('x*x');

  const data = useMemo(() => {
    const rows = [];
    for (let x = -10; x <= 10; x += 1) {
      let y = 0;
      try {
        // Basic evaluator for demo; supports JS math expressions with x.
        y = Function('x', `return ${expr}`)(x);
      } catch {
        y = NaN;
      }
      rows.push({ x, y: Number.isFinite(y) ? y : null });
    }
    return rows;
  }, [expr]);

  return (
    <div className="space-y-4">
      <div className="card">
        <label className="block mb-2">Enter function f(x) using JS syntax (e.g., x*x, Math.sin(x))</label>
        <input className="input" value={expr} onChange={(e) => setExpr(e.target.value)} />
      </div>
      <div className="card overflow-auto">
        <LineChart width={700} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line dataKey="y" stroke="#2563eb" dot={false} />
        </LineChart>
      </div>
    </div>
  );
}
