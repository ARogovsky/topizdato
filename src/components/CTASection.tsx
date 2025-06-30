import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: 'default' | 'gradient';
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Готові розпочати?",
  description = "Приєднуйтесь до тисяч розробників та компаній, які вже працюють на платформі",
  primaryButtonText = "Для розробників",
  secondaryButtonText = "Для бізнесу",
  primaryButtonLink = "/for-teams",
  secondaryButtonLink = "/for-business",
  onPrimaryClick,
  onSecondaryClick,
  variant = "default"
}) => {
  const bgClass = variant === "gradient" 
    ? "bg-gradient-to-r from-blue-600 to-purple-600" 
    : "bg-gradient-to-r from-green-600 to-blue-600";
  
  const textColor = variant === "gradient" ? "text-blue-100" : "text-green-100";
  const primaryButtonClass = variant === "gradient" 
    ? "bg-white text-blue-600 hover:bg-gray-100" 
    : "bg-white text-green-600 hover:bg-gray-100";
  const secondaryButtonClass = variant === "gradient"
    ? "border-2 border-white text-white hover:bg-white hover:text-blue-600"
    : "border-2 border-white text-white hover:bg-white hover:text-green-600";

  const PrimaryButton = () => {
    if (onPrimaryClick) {
      return (
        <button 
          onClick={onPrimaryClick}
          className={`${primaryButtonClass} px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center`}
        >
          {primaryButtonText}
        </button>
      );
    }
    
    return (
      <Link 
        to={primaryButtonLink}
        className={`${primaryButtonClass} px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center`}
      >
        {primaryButtonText}
      </Link>
    );
  };

  const SecondaryButton = () => {
    if (onSecondaryClick) {
      return (
        <button 
          onClick={onSecondaryClick}
          className={`${secondaryButtonClass} px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center`}
        >
          {secondaryButtonText}
        </button>
      );
    }
    
    return (
      <Link 
        to={secondaryButtonLink}
        className={`${secondaryButtonClass} px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center`}
      >
        {secondaryButtonText}
      </Link>
    );
  };

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className={`text-xl ${textColor} mb-8`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton />
          <SecondaryButton />
        </div>
      </div>
    </section>
  );
};

export default CTASection; 