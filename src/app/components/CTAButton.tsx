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
  textAlign?: 'left' | 'center' | 'right';
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
  textAlign = 'center',
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

  const justifyClass = textAlign === 'left' ? 'justify-start' : textAlign === 'right' ? 'justify-end' : 'justify-center';
  const textAlignClass = textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center';
  
  const baseStyles = `
    button-3d font-semibold
    relative inline-flex items-center ${justifyClass}
    border-none cursor-pointer ${textAlignClass}
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
  
  // Determine background color, box shadow, border, and text color
  // If custom backgroundColor is provided, use it; otherwise use defaults based on variant/selected state
  let finalBackgroundColor = backgroundColor;
  let finalBoxShadow = '';
  let finalBorder = '';
  let finalTextColor = textColor;
  let finalTransform = '';
  
  // Elevation shadow values - matching ContentStepLayout image elevation
  const elevationShadow = isPressed 
    ? '2px 2px 0 0 var(--color-secondary-dark), 0 2px 0 0 var(--color-secondary-dark)' // Reduced shadow when pressed
    : '4px 4px 0 0 var(--color-secondary-dark), 0 4px 0 0 var(--color-secondary-dark)'; // Full elevation
  
  // Transform for press animation
  finalTransform = isPressed ? 'translate(2px, 2px)' : 'translate(0, 0)';
  
  // If disabled, use grey background regardless of other settings
  if (disabled) {
    finalBackgroundColor = '#D1D5DB'; // Grey color for disabled state
    finalBoxShadow = '';
    finalBorder = '1px solid #9CA3AF';
    finalTextColor = '#9CA3AF'; // Lighter grey text
    finalTransform = 'translate(0, 0)'; // No press animation when disabled
  } else if (backgroundColor) {
    // Custom background provided - use it with custom shadow if selected, otherwise elevation shadow
    if (selected) {
      finalBorder = '1px solid var(--color-secondary-dark)';
      finalBoxShadow = elevationShadow;
    } else {
      finalBorder = '1px solid var(--color-secondary-dark)';
      finalBoxShadow = showShadow ? elevationShadow : '';
    }
  } else {
    // No custom background - use defaults with elevation
    if (selected) {
      // Selected state (for age buttons)
      finalBackgroundColor = 'var(--color-cta)';
      finalBorder = '1px solid var(--color-secondary-dark)';
      finalBoxShadow = elevationShadow;
      finalTextColor = finalTextColor || 'black';
    } else if (variant === 'primary') {
      // Default primary variant with elevation
      finalBackgroundColor = 'var(--color-cta)';
      finalBorder = '1px solid var(--color-secondary-dark)';
      finalBoxShadow = elevationShadow;
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
        transition: 'transform 150ms ease-in-out, box-shadow 150ms ease-in-out',
        fontSize: fontSize || '1.125rem',
        backgroundColor: finalBackgroundColor,
        color: finalTextColor,
        boxShadow: finalBoxShadow,
        border: finalBorder,
        transform: finalTransform,
        minHeight: minHeight,
        ...(width && !width.includes('w-') ? { width } : {}),
      }}
    >
      <span className={`button-3d__text block ${textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center'} ${textAlign === 'center' ? 'whitespace-nowrap' : ''}`}>
        {children}
      </span>
    </button>
  );
}
