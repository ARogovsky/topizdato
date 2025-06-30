import React from 'react';

interface NumberCircleProps {
  number: number;
  bgColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const NumberCircle: React.FC<NumberCircleProps> = ({
  number,
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-16 h-16 text-xl',
    lg: 'w-20 h-20 text-2xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${bgColor} ${textColor} rounded-full flex items-center justify-center mx-auto mb-4 font-bold ${className}`}>
      {number}
    </div>
  );
};

export default NumberCircle; 