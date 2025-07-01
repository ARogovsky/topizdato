import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Search,
  AlertTriangle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 404 Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Сторінку не знайдено
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Схоже, що сторінка, яку ви шукаєте, не існує або була переміщена. 
              Спробуйте перевірити URL або повернутися на головну сторінку.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              На головну
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Назад
            </button>
          </div>

          {/* Popular Pages */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Популярні сторінки
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                to="/for-teams"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
              >
                <div className="text-blue-600 font-semibold">Для команд</div>
                <div className="text-sm text-gray-600">Створення команд та заробіток</div>
              </Link>
              <Link 
                to="/for-business"
                className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-center"
              >
                <div className="text-green-600 font-semibold">Для бізнесу</div>
                <div className="text-sm text-gray-600">Пошук виконавців</div>
              </Link>
              <Link 
                to="/pricing"
                className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-center"
              >
                <div className="text-purple-600 font-semibold">Ціни</div>
                <div className="text-sm text-gray-600">Тарифи та послуги</div>
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-gray-400 mr-2" />
              <span className="text-gray-600 font-medium">Не знайшли що шукали?</span>
            </div>
            <Link 
              to="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Зв'яжіться з нами
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFoundPage; 