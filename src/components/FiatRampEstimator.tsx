import React, { useState } from "react";
import { ArrowLeftRight, Landmark, DollarSign, Globe, CheckCircle2, ShieldCheck } from "lucide-react";

const CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$", rate: 0.12, flag: "🇺🇸", anchor: "MoneyGram Access / Circle" },
  { code: "EUR", name: "Euro", symbol: "€", rate: 0.11, flag: "🇪🇺", anchor: "TEMPO France / SEP-24" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", rate: 180.0, flag: "🇳🇬", anchor: "Cowrie Integrated / SEP-38" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", rate: 0.65, flag: "🇧🇷", anchor: "Ankr LatAm Anchor" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh", rate: 15.5, flag: "🇰🇪", anchor: "ClickPesa East Africa" },
];

export const FiatRampEstimator: React.FC = () => {
  const [xlmAmount, setXlmAmount] = useState("1000");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const curr = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0];
  const inputVal = parseFloat(xlmAmount) || 0;
  const estimatedFiat = (inputVal * curr.rate).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl mb-8">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-white">Stellar Anchors SEP-24 / SEP-38 Fiat Off-Ramp Estimator</h3>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30 uppercase">
                Level 5 Feature Iteration
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Calculate instant local bank & cash payouts for international crew members via MoneyGram & Stellar Anchors
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-xs text-emerald-400 font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>SEP-24 Compliant</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Input XLM */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Received Royalty Revenue (XLM)
          </label>
          <div className="relative">
            <input
              type="number"
              value={xlmAmount}
              onChange={(e) => setXlmAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-lg font-bold text-amber-400 pr-16"
              placeholder="1000"
            />
            <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">XLM</span>
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="flex items-center justify-center">
          <div className="p-3 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
        </div>

        {/* Estimated Output Fiat */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/30">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Local Cash Payout
            </label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="px-2.5 py-1 rounded-lg glass-input text-xs font-bold text-indigo-300"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code} className="bg-slate-900 text-white">
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-extrabold text-white">
              {curr.symbol} {estimatedFiat}
            </span>
            <span className="text-xs text-indigo-300 font-bold">{curr.code}</span>
          </div>

          <p className="text-[11px] text-slate-400 mt-2 flex items-center space-x-1">
            <Globe className="w-3 h-3 text-indigo-400 flex-shrink-0" />
            <span>Via {curr.anchor}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
