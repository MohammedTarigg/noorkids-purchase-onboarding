'use client';

import React, { useState } from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  showShadow?: boolean;
}

export default function CTAButton({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button',
  showShadow = false,
}: CTAButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  const baseStyles = `
    button-3d w-full font-semibold
    relative inline-flex items-center justify-center
    border-none cursor-pointer text-center
    select-none outline-none
    transform-gpu
  `;
  
  const variantStyles = variant === 'primary' 
    ? 'text-black'
    : 'bg-white border-2 text-gray-800 hover:bg-gray-50';
  
  const pressedClass = isPressed ? 'button-3d--pressed' : '';
  const shadowClass = showShadow && !isPressed && !disabled ? 'button-3d--shadow' : '';
  const disabledClass = disabled ? 'button-3d--disabled' : '';
  
  const primaryButtonStyle = variant === 'primary' 
    ? { 
        backgroundColor: 'var(--color-cta)',
        boxShadow: 'inset 0 0 0 var(--button-border-width) rgb(var(--color-button-border))',
      }
    : {};
  
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${pressedClass} ${shadowClass} ${disabledClass} ${className}`.trim()}
      style={{
        borderRadius: 'var(--radius-full)',
        padding: 'var(--spacing-sm) var(--spacing-lg)',
        transition: 'transform 150ms ease-in-out',
        fontSize: '0.875rem',
        ...primaryButtonStyle,
      }}
    >
      <span className="button-3d__text block whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}
