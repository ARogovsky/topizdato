import React from 'react';

interface IconCircleProps {
  icon: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconCircle: React.FC<IconCircleProps> = ({
  icon,
  bgColor = 'bg-blue-100',
  textColor = 'text-blue-600',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${bgColor} ${textColor} rounded-full flex items-center justify-center mx-auto mb-4 ${className}`}>
      {icon}
    </div>
  );
};

export default IconCircle; 