import React from 'react';

/**
 * Minimalist StrengthMeter component.
 */
export default function StrengthMeter({ strength }) {
  const { label } = strength;

  const activeBars = {
    Strong: 3,
    Medium: 2,
    Weak: 1
  }[label] || 1;

  const colors = {
    Weak: 'bg-red-500/80',
    Medium: 'bg-amber-500/80',
    Strong: 'bg-emerald-500/80'
  };

  const textColors = {
    Weak: 'text-red-500 dark:text-red-400',
    Medium: 'text-amber-500 dark:text-amber-400',
    Strong: 'text-emerald-500 dark:text-emerald-400'
  };

  const selectedColor = colors[label] || colors.Weak;
  const selectedTextColor = textColors[label] || textColors.Weak;

  return (
    <div className="space-y-1.5 p-3 rounded border border-slate-100 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-950/10">
      <div className="flex justify-between items-center text-3xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        <span>Entropy Strength</span>
        <span className={`font-bold ${selectedTextColor}`}>
          {label}
        </span>
      </div>

      <div className="flex gap-1.5 h-1.5 w-full">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`h-full flex-1 rounded transition-colors duration-300 ${
              index < activeBars
                ? selectedColor
                : 'bg-slate-200 dark:bg-slate-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
