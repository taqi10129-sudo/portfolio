import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({ href, children, className, onClick }: NavLinkProps) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      className={cn(
        "text-sm font-medium text-slate-300 hover:text-primary transition-colors tracking-wide uppercase relative group",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
};
