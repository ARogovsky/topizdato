import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }

    const handleOpenSettings = () => {
      setShowModal(true);
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showBanner && !showModal) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ми використовуємо cookies</h3>
                <p className="text-sm text-gray-600">
                  Ми використовуємо cookies для покращення роботи сайту та аналітики. 
                  Продовжуючи використання сайту, ви погоджуєтесь з нашою політикою cookies.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Тільки необхідні
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                Прийняти всі
              </button>
            </div>
            <button
              onClick={acceptNecessary}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-blue-600" />
                  Налаштування cookies
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Необхідні cookies</h3>
                  <p className="text-gray-600 mb-3">
                    Ці cookies необхідні для роботи сайту та не можуть бути відключені.
                  </p>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Функціональні cookies</span>
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Аналітичні cookies</h3>
                  <p className="text-gray-600 mb-3">
                    Допомагають нам розуміти, як використовується сайт, щоб покращити його роботу.
                  </p>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Google Analytics</span>
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Маркетингові cookies</h3>
                  <p className="text-gray-600 mb-3">
                    Використовуються для показу релевантної реклами та відстеження ефективності кампаній.
                  </p>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Рекламні cookies</span>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Важливо:</strong> Ви можете змінити налаштування cookies в будь-який час 
                    через налаштування браузера або звернувшись до нас.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Тільки необхідні
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Прийняти всі
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent; 