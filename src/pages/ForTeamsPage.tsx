import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Code, 
  Palette, 
  Briefcase, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Award,
  Target,
  TrendingUp,
  Coffee,
  Rocket,
  Shield,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import IconCircle from '../components/IconCircle';
import NumberCircle from '../components/NumberCircle';

const ForTeamsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Перестаньте робити безкоштовні проекти —{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                починайте заробляти
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Об'єднайтеся з іншими талантами, працюйте над реальними проектами 
              та заробляйте гроші з першого дня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                Створити команду
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center">
                <Coffee className="w-5 h-5 mr-2" />
                Дізнатися більше
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Ваші можливості</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <TrendingUp className="w-10 h-10 mx-auto mb-3 text-green-300" />
                    <div className="text-2xl font-bold text-green-300">$500-2000</div>
                    <div className="text-blue-100 text-sm">Дохід з проекту</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
                    <div className="text-2xl font-bold text-yellow-300">2-4 тижні</div>
                    <div className="text-blue-100 text-sm">Тривалість проекту</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Star className="w-10 h-10 mx-auto mb-3 text-orange-300" />
                    <div className="text-2xl font-bold text-orange-300">4.8/5</div>
                    <div className="text-blue-100 text-sm">Рейтинг команд</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Shield className="w-10 h-10 mx-auto mb-3 text-purple-300" />
                    <div className="text-2xl font-bold text-purple-300">100%</div>
                    <div className="text-blue-100 text-sm">Гарантія оплати</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-100">Середній заробіток:</span>
                    <span className="font-bold text-green-300">$1,200/місяць</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Чому обирають ТОП ІЗДАТО
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Переваги роботи на нашій платформі для команд розробників
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Реальний досвід</h3>
                  <p className="text-gray-600 text-sm">Працюйте над справжніми проектами для реального бізнесу</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-purple-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Командна робота</h3>
                  <p className="text-gray-600 text-sm">Навчіться працювати в команді з іншими спеціалістами</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-green-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Стабільний дохід</h3>
                  <p className="text-gray-600 text-sm">Отримуйте гроші за свою роботу з першого проекту</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                  <Rocket className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Портфоліо</h3>
                  <p className="text-gray-600 text-sm">Створюйте вражаюче портфоліо з реальними кейсами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ролі в команді
            </h2>
            <p className="text-xl text-gray-600">
              Ідеальна команда складається з 3-5 спеціалістів різних напрямків
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <IconCircle 
                icon={<Code className="w-8 h-8" />}
                bgColor="bg-blue-100"
                textColor="text-blue-600"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Розробники</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Frontend (React, Vue, Angular)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Backend (Node.js, Python, PHP)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Fullstack розробники
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Mobile (React Native, Flutter)
                </li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-blue-600">$600-1500</span>
                <div className="text-gray-500">за проект</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <IconCircle 
                icon={<Palette className="w-8 h-8" />}
                bgColor="bg-purple-100"
                textColor="text-purple-600"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Дизайнери</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  UI/UX дизайн
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Веб-дизайн
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Мобільний дизайн
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Брендинг та логотипи
                </li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-purple-600">$400-1000</span>
                <div className="text-gray-500">за проект</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <IconCircle 
                icon={<Briefcase className="w-8 h-8" />}
                bgColor="bg-green-100"
                textColor="text-green-600"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Менеджери</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Проект-менеджмент
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Комунікація з клієнтами
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Планування та контроль
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  QA та тестування
                </li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-green-600">$300-800</span>
                <div className="text-gray-500">за проект</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Історії успіху
            </h2>
            <p className="text-xl text-gray-600">
              Реальні команди, реальні результати
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard preset="team" variant="gray" />
            <TestimonialCard 
              preset="team" 
              variant="gray"
              quote="Працювали над мобільним додатком для стартапу. Клієнт був в захваті, а ми заробили по $2000!"
              author="Команда 'MobileDev'"
              position="Мобільний додаток • 4 учасники"
            />
            <TestimonialCard 
              preset="team" 
              variant="gray"
              quote="Створили брендинг та лендінг для IT-компанії. Тепер маємо постійного клієнта!"
              author="Команда 'DesignPro'"
              position="Брендинг проект • 2 учасники"
            />
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Як почати
            </h2>
            <p className="text-xl text-gray-600">
              4 простих кроки до вашого першого проекту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <NumberCircle 
                number={1}
                bgColor="bg-blue-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Реєстрація</h3>
              <p className="text-gray-600">
                Створіть профіль, вкажіть свої навички та досвід
              </p>
            </div>

            <div className="text-center">
              <NumberCircle 
                number={2}
                bgColor="bg-purple-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Команда</h3>
              <p className="text-gray-600">
                Знайдіть однодумців або приєднайтеся до існуючої команди
              </p>
            </div>

            <div className="text-center">
              <NumberCircle 
                number={3}
                bgColor="bg-green-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Проект</h3>
              <p className="text-gray-600">
                Оберіть підходящий проект та подайте заявку
              </p>
            </div>

            <div className="text-center">
              <NumberCircle 
                number={4}
                bgColor="bg-orange-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Заробіток</h3>
              <p className="text-gray-600">
                Виконайте проект та отримайте оплату
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові почати заробляти?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Приєднуйтесь до сотень команд, які вже працюють на платформі
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Створити команду
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Знайти проекти
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForTeamsPage;