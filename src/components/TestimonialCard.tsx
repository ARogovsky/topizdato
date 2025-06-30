import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  author: string;
  position: string;
  savings?: string;
  variant?: 'white' | 'gray';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  quote,
  author,
  position,
  savings,
  variant = 'white'
}) => {
  const bgClass = variant === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <div className={`${bgClass} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all`}>
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="ml-2 text-gray-600 font-semibold">{rating}</span>
      </div>
      <blockquote className="text-gray-700 mb-6 italic">
        "{quote}"
      </blockquote>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">{position}</div>
        {savings && (
          <div className="text-sm text-green-600 font-semibold">Економія: {savings}</div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard; 