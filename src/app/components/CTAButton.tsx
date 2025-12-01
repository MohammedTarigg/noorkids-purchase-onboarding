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
  // Customizable styling props
  borderRadius?: string;
  width?: string;
  minHeight?: string;
  padding?: string;
  fontSize?: string;
  backgroundColor?: string;
  textColor?: string;
  selected?: boolean;
}

export default function CTAButton({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button',
  showShadow = false,
  borderRadius,
  width,
  minHeight,
  padding,
  fontSize,
  backgroundColor,
  textColor,
  selected,
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
    button-3d font-semibold
    relative inline-flex items-center justify-center
    border-none cursor-pointer text-center
    select-none outline-none
    transform-gpu
    ${width || 'w-full'}
  `;
  
  const variantStyles = variant === 'primary' 
    ? (textColor ? '' : 'text-black')
    : 'bg-white border-2 text-gray-800 hover:bg-gray-50';
  
  const pressedClass = isPressed ? 'button-3d--pressed' : '';
  const shadowClass = showShadow && !isPressed && !disabled ? 'button-3d--shadow' : '';
  const disabledClass = disabled ? 'button-3d--disabled' : '';
  
  // Determine background color, box shadow, and text color
  // If custom backgroundColor is provided, use it; otherwise use defaults based on variant/selected state
  let finalBackgroundColor = backgroundColor;
  let finalBoxShadow = '';
  let finalTextColor = textColor;
  
  if (backgroundColor) {
    // Custom background provided - use it with custom shadow if selected, otherwise default shadow
    if (selected) {
      finalBoxShadow = 'inset 0 0 0 var(--button-border-width) rgb(var(--color-button-border))';
    } else {
      finalBoxShadow = showShadow ? '0 1px 2px rgba(239, 239, 239, 0.078)' : '';
    }
  } else {
    // No custom background - use defaults
    if (selected) {
      // Selected state (for age buttons)
      finalBackgroundColor = 'var(--color-cta)';
      finalBoxShadow = 'inset 0 0 0 var(--button-border-width) rgb(var(--color-button-border))';
      finalTextColor = finalTextColor || 'black';
    } else if (variant === 'primary') {
      // Default primary variant
      finalBackgroundColor = 'var(--color-cta)';
      finalBoxShadow = 'inset 0 0 0 var(--button-border-width) rgb(var(--color-button-border))';
      finalTextColor = finalTextColor || 'black';
    }
  }
  
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
        borderRadius: borderRadius || 'var(--radius-full)',
        padding: padding || 'var(--spacing-sm) var(--spacing-lg)',
        transition: 'transform 150ms ease-in-out',
        fontSize: fontSize || '0.875rem',
        backgroundColor: finalBackgroundColor,
        color: finalTextColor,
        boxShadow: finalBoxShadow,
        minHeight: minHeight,
        ...(width && !width.includes('w-') ? { width } : {}),
      }}
    >
      <span className="button-3d__text block whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}
