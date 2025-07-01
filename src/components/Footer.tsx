import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle } from 'lucide-react';
import { trackTelegramClick } from '../utils/outboundTracking';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">ТОП ІЗДАТО</span>
            </Link>
            <p className="text-gray-400">
              Ми - фабрика перевірених команд, які вирішують проблеми бізнесу, а не додають нових
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Для розробників</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/create-team" className="hover:text-white transition-colors">Створити команду</Link></li>
              <li><Link to="/find-projects" className="hover:text-white transition-colors">Знайти проекти</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Для бізнесу</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/publish-project" className="hover:text-white transition-colors">Опублікувати проект</Link></li>
              <li><Link to="/find-team" className="hover:text-white transition-colors">Знайти команду</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Ціни</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Юридична інформація</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">Політика конфіденційності</Link></li>
              <li><Link to="/oferta" className="hover:text-white transition-colors">Договір-оферта</Link></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))} className="hover:text-white transition-colors text-left">Налаштування cookies</button></li>
              {/* <li><Link to="/help-center" className="hover:text-white transition-colors">Центр допомоги</Link></li> */}
              {/* <li><Link to="/contact" className="hover:text-white transition-colors">Контакти</Link></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <a 
              href="https://t.me/topizdato" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackTelegramClick('Footer Telegram')}
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Telegram</span>
            </a>
          </div>
          <p>&copy; 2024 ТОП ІЗДАТО. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;