import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, FileText, Eye, Lock } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Політика конфіденційності
          </h1>
          <p className="text-xl text-gray-600">
            Як ми захищаємо та використовуємо ваші персональні дані
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Company Information */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Інформація про нас
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>ГО "ТопИздаТо"</strong></p>
                <p><strong>Код ЄДРПОУ:</strong> 44894768</p>
                <p><strong>Адреса:</strong> 65007, Україна, Одеська обл., місто Одеса, вулиця Старопортофранківська, будинок, 107/21</p>
              </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Які дані ми збираємо
                </h2>
                <p className="text-gray-700 mb-4">
                  Ми збираємо тільки ті персональні дані, які необхідні для надання наших послуг:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Ім'я та прізвище</li>
                  <li>Email адреса</li>
                  <li>Контактна інформація</li>
                  <li>Інформація про ваш досвід та навички</li>
                  <li>Дані про проекти та команди</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Як ми захищаємо ваші дані
                </h2>
                <p className="text-gray-700 mb-4">
                  Ми використовуємо сучасні технології захисту для забезпечення безпеки ваших персональних даних:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Шифрування даних при передачі</li>
                  <li>Безпечне зберігання на серверах</li>
                  <li>Регулярні оновлення систем безпеки</li>
                  <li>Обмежений доступ до персональних даних</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Як ми використовуємо ваші дані
                </h2>
                <p className="text-gray-700 mb-4">
                  Ваші персональні дані використовуються виключно для:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Надання послуг платформи ТОП ІЗДАТО</li>
                  <li>Зв'язку з вами щодо проектів та команд</li>
                  <li>Покращення якості наших послуг</li>
                  <li>Відправки важливих повідомлень</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ваші права
                </h2>
                <p className="text-gray-700 mb-4">
                  Ви маєте право:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Отримати доступ до своїх персональних даних</li>
                  <li>Виправити неточні дані</li>
                  <li>Видалити свої дані</li>
                  <li>Обмежити обробку даних</li>
                  <li>Перенести дані до іншого оператора</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cookies та технології відстеження
                </h2>
                <p className="text-gray-700 mb-4">
                  Ми використовуємо cookies для покращення роботи сайту та аналітики. 
                  Ви можете керувати налаштуваннями cookies у вашому браузері.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Зміни до політики конфіденційності
                </h2>
                <p className="text-gray-700 mb-4">
                  Ми можемо оновлювати цю політику конфіденційності. 
                  Про всі зміни ми повідомимо вас через наш сайт або email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Зв'язок з нами
                </h2>
                <p className="text-gray-700 mb-4">
                  Якщо у вас є питання щодо цієї політики конфіденційності або обробки ваших персональних даних, 
                  звертайтеся до нас:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700"><strong>Email:</strong> admin@topizda.to</p>
                  <p className="text-gray-700"><strong>Сайт:</strong> topizda.to</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mt-12">
                <p className="text-sm text-gray-600 text-center">
                  Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage; 