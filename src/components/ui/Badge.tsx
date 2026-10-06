import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'caramel' | 'honey' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const variantStyles = {
    accent: 'bg-accent/10 text-accent border border-accent/20',
    caramel: 'bg-caramel/10 text-caramel border border-caramel/20',
    honey: 'bg-honey/15 text-[#915B06] border border-honey/30',
    muted: 'bg-chocolate/5 text-muted border border-chocolate/10',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
