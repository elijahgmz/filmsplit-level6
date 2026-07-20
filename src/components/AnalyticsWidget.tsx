import React from "react";
import { BarChart3, Zap, ShieldCheck, Users, Activity, CheckCircle, ArrowUpRight } from "lucide-react";

interface AnalyticsWidgetProps {
  contractCallsCount: number;
  uniqueWalletsCount: number;
  totalVolumeXlm: number;
  rpcLatencyMs: number;
}

export const AnalyticsWidget: React.FC<AnalyticsWidgetProps> = ({
  contractCallsCount,
  uniqueWalletsCount,
  totalVolumeXlm,
  rpcLatencyMs,
}) => {
  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-800 mb-8">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Application Telemetry & Analytics</h3>
            <p className="text-xs text-slate-400">Real-world usage metrics, contract calls, and RPC performance</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1">
          <CheckCircle className="w-3 h-3" />
          <span>Monitoring Active</span>
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Contract Invocation Volume</span>
            <Zap className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <p className="text-xl font-extrabold text-white">{contractCallsCount} calls</p>
          <p className="text-[10px] text-emerald-400 mt-1">100% Soroban RPC uptime</p>
        </div>

        {/* Metric 2 */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Onboarded Wallets</span>
            <Users className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <p className="text-xl font-extrabold text-indigo-300">{uniqueWalletsCount} wallets</p>
          <p className="text-[10px] text-indigo-400 mt-1">Level 4 Target: &gt;= 10 users</p>
        </div>

        {/* Metric 3 */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Total Value Settled</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-xl font-extrabold text-emerald-400">{totalVolumeXlm.toLocaleString()} XLM</p>
          <p className="text-[10px] text-slate-500 mt-1">Atomic multi-payee settlement</p>
        </div>

        {/* Metric 4 */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Soroban RPC Response</span>
            <Activity className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <p className="text-xl font-extrabold text-purple-300">{rpcLatencyMs} ms</p>
          <p className="text-[10px] text-purple-400 mt-1">Stellar Testnet Node Health</p>
        </div>
      </div>
    </div>
  );
};
