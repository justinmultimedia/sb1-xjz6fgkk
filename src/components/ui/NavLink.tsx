import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick 
}) => {
  // In a real app, you'd use React Router's NavLink
  // For this demo, we'll create a simple component
  return (
    <a 
      href={to}
      className={`font-rajdhani font-medium transition-all duration-200 ${className}`}
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation for demo
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};