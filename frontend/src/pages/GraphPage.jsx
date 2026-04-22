import { useMemo, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { sampleFunction } from '../utils/plot.js';

export const GraphPage = () => {
  const [expr, setExpr] = useState('x**2');
  const data = useMemo(() => sampleFunction(expr), [expr]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Graph Visualizer</h2>
      <div className="card space-y-2">
        <input className="w-full rounded border p-2" value={expr} onChange={(e) => setExpr(e.target.value)} placeholder="f(x), e.g. x**2 + 2*x" />
        <p className="text-xs text-slate-500">Use JavaScript expression syntax. Example: Math.sin(x), x**2</p>
      </div>
      <div className="card h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#4f46e5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
