'use client';

import { cn } from '@/util/style';

const Button = ({
  onClick,
  children,
  className,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'bg-primary-400 rounded-lg py-4 px-6 text-white',
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
