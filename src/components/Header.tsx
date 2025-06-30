import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">ТОП ІЗДАТО</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              Як це працює
            </Link>
            <Link to="/for-teams" className="text-gray-600 hover:text-blue-600 transition-colors">
              Для команд
            </Link>
            <Link to="/for-business" className="text-gray-600 hover:text-blue-600 transition-colors">
              Для бізнесу
            </Link>
            <Link to="/for-education" className="text-gray-600 hover:text-blue-600 transition-colors">
              Для освіти
            </Link>
            <Link to="/create-team" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Приєднатися
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;