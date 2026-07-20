import React, { useState } from "react";
import { MessageSquareHeart, Star, Send, CheckCircle2, ThumbsUp } from "lucide-react";

export interface FeedbackItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  timestamp: string;
}

interface FeedbackModalProps {
  onClose: () => void;
  onSubmitFeedback: (item: Omit<FeedbackItem, "id" | "timestamp">) => void;
  feedbackList: FeedbackItem[];
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  onClose,
  onSubmitFeedback,
  feedbackList,
}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Indie Director");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    onSubmitFeedback({
      name: name.trim(),
      role,
      rating,
      comment: comment.trim(),
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setComment("");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-2xl my-8 relative">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20">
              <MessageSquareHeart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Level 4 Product Feedback Portal</h2>
              <p className="text-xs text-slate-400">Mandatory user feedback & product validation collection</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">✕</button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Feedback Submitted!</h3>
            <p className="text-xs text-slate-400">Thank you for validating the FilmSplit Soroban MVP.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name / Alias</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Role / Persona</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                >
                  <option value="Indie Filmmaker" className="bg-slate-900">Indie Filmmaker</option>
                  <option value="Production Manager" className="bg-slate-900">Production Manager</option>
                  <option value="Film Investor" className="bg-slate-900">Film Investor</option>
                  <option value="Cinematographer" className="bg-slate-900">Cinematographer</option>
                  <option value="Stellar Web3 Tester" className="bg-slate-900">Stellar Web3 Tester</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Rating</label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= rating ? "text-amber-400 fill-amber-400" : "text-slate-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Feedback & Usability Experience</label>
              <textarea
                rows={3}
                placeholder="How easy was it to create a film split or execute automated payouts?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-500/25 flex items-center justify-center space-x-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Submit Product Feedback</span>
            </button>
          </form>
        )}

        {/* Existing Feedback List */}
        <div className="border-t border-slate-800 pt-4">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Community Feedback & Validation</span>
            <span className="text-purple-400 font-mono">({feedbackList.length} Responses)</span>
          </h4>

          <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
            {feedbackList.map((f) => (
              <div key={f.id} className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">{f.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 text-[10px]">
                      {f.role}
                    </span>
                  </div>
                  <div className="flex items-center space-x-0.5 text-amber-400">
                    {[...Array(f.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 text-[11px] italic">"{f.comment}"</p>
                <span className="text-[10px] text-slate-500 mt-1 block">{f.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
