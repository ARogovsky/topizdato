import React, { useEffect } from 'react';
import { trackThankYouPage } from '../utils/gtag';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Отправляем событие TYP при загрузке страницы благодарности
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'TYP', {
        event_category: 'conversion',
        event_label: 'thank_you_page',
        value: 1
      });
    }
    
    // Также отправляем стандартную конверсию
    trackThankYouPage();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Дякуємо за звернення!
          </h1>
          <p className="text-gray-600">
            Ваше повідомлення успішно відправлено. Ми зв'яжемося з вами найближчим часом.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Що далі?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Ми розглянемо ваше звернення протягом 24 годин</li>
              <li>• Отримаєте відповідь на вказану електронну пошту</li>
              <li>• Можемо призначити дзвінок для детального обговорення</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Корисні посилання</h3>
            <div className="space-y-2">
              <a 
                href="/" 
                className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Повернутися на головну
              </a>
              <a 
                href="/blog" 
                className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Читати наш блог
              </a>
              <a 
                href="/contact" 
                className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Інші способи зв'язку
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Якщо у вас є термінове питання, напишіть нам на{' '}
            <a href="mailto:фвьшт@topizda.to" className="text-blue-600 hover:text-blue-800">
              info@topizdato.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 