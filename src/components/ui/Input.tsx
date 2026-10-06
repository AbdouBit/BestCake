import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        className={`w-full px-4 py-3 bg-white border ${
          error ? 'border-red-400 focus:ring-red-200' : 'border-chocolate/15 focus:border-accent focus:ring-accent/20'
        } rounded-xl text-chocolate placeholder-muted/50 text-sm transition-all duration-200 focus:outline-none focus:ring-4 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        className={`w-full px-4 py-3 bg-white border ${
          error ? 'border-red-400 focus:ring-red-200' : 'border-chocolate/15 focus:border-accent focus:ring-accent/20'
        } rounded-xl text-chocolate placeholder-muted/50 text-sm transition-all duration-200 focus:outline-none focus:ring-4 ${className}`}
        rows={3}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
