import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const analyticsData = [
  { time: "Q1", efficiency: 45 },
  { time: "Q2", efficiency: 52 },
  { time: "Q3", efficiency: 68 },
  { time: "Q4", efficiency: 89 },
  { time: "Q1", efficiency: 95 },
];

export const AnalyticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={analyticsData}>
        <defs>
          <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(25 85% 55%)" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(25 85% 55%)" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Tooltip 
          contentStyle={{ backgroundColor: 'hsl(335 45% 12%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Area 
          type="monotone" 
          dataKey="efficiency" 
          stroke="hsl(25 85% 55%)" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorEfficiency)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
