import React, { useState } from "react";
import { Sparkles, HelpCircle, ChevronRight, CheckCircle2, Trophy } from "lucide-react";

export const WalkthroughHelper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);

  const steps = [
    {
      title: "1. Connect Your Wallet",
      description: "Click 'Connect Wallet' in the header to connect Freighter, xBull, Albedo, or Rabet (Mainnet or Testnet).",
    },
    {
      title: "2. Register Split Project",
      description: "Click 'Create Split' in the dashboard to register a new film and allocate basis-point shares (totaling 100%) to your crew.",
    },
    {
      title: "3. Distribute Revenue",
      description: "Click 'Distribute Revenue' to deposit funds; the Soroban smart contract will route exact splits atomically to all crew wallets.",
    },
    {
      title: "4. Multi-Sig & Escrows",
      description: "Use the 'Multi-Sig' or 'Escrow' tabs to sign and release production funding tranches securely.",
    },
    {
      title: "5. Local Fiat Off-Ramps",
      description: "Click the 'Fiat Ramp' tab to calculate instant cash and bank payouts in USD, EUR, NGN, BRL, and KES via MoneyGram.",
    },
  ];

  if (!visible) return null;

  return (
    <div className="glass-panel p-5 rounded-2xl border border-indigo-500/30 shadow-xl mb-6 relative">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-3 right-3 text-slate-400 hover:text-white text-xs"
      >
        ✕
      </button>

      <div className="flex items-start space-x-3">
        <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 flex-shrink-0">
          <HelpCircle className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              FilmSplit Interactive Tour & Guide
            </h4>
            <span className="px-1.5 py-0.5 text-[9px] font-bold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30 uppercase">
              UI Walkthrough
            </span>
          </div>
          <p className="text-xs text-slate-200 mt-2 font-semibold">{steps[currentStep].title}</p>
          <p className="text-xs text-slate-400 mt-1">{steps[currentStep].description}</p>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80">
            <span className="text-[10px] text-slate-500 font-mono">
              Step {currentStep + 1} of {steps.length}
            </span>

            <button
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep((prev) => prev + 1);
                } else {
                  setVisible(false);
                }
              }}
              className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold flex items-center space-x-1 transition-all"
            >
              <span>{currentStep === steps.length - 1 ? "Finish Tour" : "Next Step"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
