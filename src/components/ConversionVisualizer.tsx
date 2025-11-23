import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const ConversionVisualizer: React.FC = () => {
  const [leads, setLeads] = useState(500);
  const [conversionRate, setConversionRate] = useState(2); // %
  const [ticketPrice, setTicketPrice] = useState(200); // $

  // Generate dummy projection data based on inputs
  const data = useMemo(() => {
    const currentRev = leads * (conversionRate / 100) * ticketPrice;
    // Assume our system improves conversion by 2.5x
    const optimizedConversion = conversionRate * 2.5;
    
    const chartData = [];
    for (let i = 0; i < 6; i++) {
      const month = `Month ${i + 1}`;
      // Linear growth simulation
      const base = currentRev;
      const growthFactor = 1 + (i * 0.15); // 15% month over month growth with system
      
      chartData.push({
        name: month,
        Current: Math.round(base * (1 + i * 0.02)), // stagnant
        Phoenix: Math.round((leads * (optimizedConversion / 100) * ticketPrice) * growthFactor)
      });
    }
    return chartData;
  }, [leads, conversionRate, ticketPrice]);

  const currentRevenue = Math.round(leads * (conversionRate / 100) * ticketPrice);
  const projectedRevenue = data[5].Phoenix; // Month 6

  return (
    <section id="calculator" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-phoenix-slate mb-2">Revenue Engine</h2>
              <p className="text-gray-600">Simulate how the Phoenix Protocol impacts your bottom line.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-6 border border-gray-200 shadow-sm">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 flex items-center"><Users className="w-4 h-4 mr-2"/> Monthly Leads</span>
                  <span className="text-phoenix-slate font-mono font-bold">{leads}</span>
                </div>
                <input 
                  type="range" min="100" max="5000" step="50" 
                  value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-phoenix-gold"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 flex items-center"><TrendingUp className="w-4 h-4 mr-2"/> Current Conv. Rate</span>
                  <span className="text-phoenix-slate font-mono font-bold">{conversionRate}%</span>
                </div>
                <input 
                  type="range" min="0.5" max="10" step="0.1" 
                  value={conversionRate} 
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-phoenix-gold"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 flex items-center"><DollarSign className="w-4 h-4 mr-2"/> Avg. Ticket Value</span>
                  <span className="text-phoenix-slate font-mono font-bold">${ticketPrice}</span>
                </div>
                <input 
                  type="range" min="50" max="2000" step="50" 
                  value={ticketPrice} 
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-phoenix-gold"
                />
              </div>
            </div>

            <div className="bg-white border-l-4 border-phoenix-gold p-6 rounded-r-xl shadow-sm">
              <p className="text-sm text-phoenix-gold mb-1 font-semibold tracking-wider uppercase">6-Month Projection</p>
              <p className="text-4xl font-bold text-phoenix-slate">${projectedRevenue.toLocaleString()}</p>
              <p className="text-xs text-gray-400 mt-2">vs ${currentRevenue.toLocaleString()} current baseline</p>
            </div>
          </div>

          {/* Chart */}
          <div className="lg:col-span-8 h-[450px] bg-white rounded-3xl border border-gray-200 p-6 shadow-lg relative overflow-hidden">
             {/* Chart Title */}
             <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-phoenix-gold"></div>
                    <span className="text-sm text-gray-600 font-medium">Phoenix System</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-gray-400">Traditional Methods</span>
                </div>
             </div>

             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPhoenix" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E2E8F0" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#E2E8F0" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#1e293b' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Area 
                    type="monotone" 
                    dataKey="Phoenix" 
                    stroke="#D4AF37" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPhoenix)" 
                    animationDuration={1500}
                />
                <Area 
                    type="monotone" 
                    dataKey="Current" 
                    stroke="#CBD5E1" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fillOpacity={1} 
                    fill="url(#colorCurrent)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConversionVisualizer;