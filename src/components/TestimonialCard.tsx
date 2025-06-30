import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  rating?: number;
  quote?: string;
  author?: string;
  position?: string;
  savings?: string;
  variant?: 'white' | 'gray';
  preset?: 'team' | 'business' | 'education' | 'default';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  quote,
  author,
  position,
  savings,
  variant = 'white',
  preset
}) => {
  // Контент по умолчанию
  const defaultContent = {
    team: {
      rating: 5.0,
      quote: "За 3 тижні ми створили повноцінний бот підтримки OpenAI для інтернет-магазину. Заробили 1500грн кожен і здобули неоціненний досвід!",
      author: "Команда 'BotCrafters'",
      position: "E-commerce проект • 3 учасники",
      savings: undefined
    },
    business: {
      rating: 5.0,
      quote: "Команда створила чудовий інтернет-магазин за $1,200. В студії це коштувало б $15,000!",
      author: "Марія К.",
      position: "Fashion Store • E-commerce",
      savings: "$13,800"
    },
    education: {
      rating: 4.9,
      quote: "За рік співпраці 78% наших випускників знайшли роботу ще до закінчення університету.",
      author: "КПІ ім. Ігоря Сікорського",
      position: "Факультет інформатики",
      savings: undefined
    },
    default: {
      rating: 5.0,
      quote: "За 3 тижні ми створили повноцінний бот підтримки OpenAI для інтернет-магазину. Заробили 1500грн кожен і здобули неоціненний досвід!",
      author: "Команда 'BotCrafters'",
      position: "E-commerce проект • 3 учасники",
      savings: undefined
    }
  };

  // Выбираем контент: сначала проверяем пропсы, потом пресет, потом дефолт
  const content = {
    rating: rating ?? defaultContent[preset || 'default'].rating,
    quote: quote ?? defaultContent[preset || 'default'].quote,
    author: author ?? defaultContent[preset || 'default'].author,
    position: position ?? defaultContent[preset || 'default'].position,
    savings: savings ?? defaultContent[preset || 'default'].savings
  };

  const bgClass = variant === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <div className={`${bgClass} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all`}>
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="ml-2 text-gray-600 font-semibold">{content.rating}</span>
      </div>
      <blockquote className="text-gray-700 mb-6 italic">
        "{content.quote}"
      </blockquote>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{content.author}</div>
        <div className="text-sm text-gray-600">{content.position}</div>
        {content.savings && (
          <div className="text-sm text-green-600 font-semibold">Економія: {content.savings}</div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard; 