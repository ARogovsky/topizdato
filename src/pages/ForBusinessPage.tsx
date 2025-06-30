import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  Award,
  Globe
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import NumberCircle from '../components/NumberCircle';
import IconCircle from '../components/IconCircle';

const ForBusinessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900">Для бізнесу</h1>
                    <p className="text-green-600 font-semibold text-lg">Якість за доступною ціною</p>
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
                  Отримайте замовлення{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    у три рази дешевше за ринок
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Працюйте з перевіреними підрядниками, які створюють 
                  якісні продукти за доступними цінами
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Опублікувати проект
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Переглянути ціни
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="absolute top-4 left-4 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Економія від <span className="text-green-600">30%</span> бюджету
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-700">Лендінг у студії</span>
                      </div>
                      <span className="font-bold text-red-600 text-lg">15,000 грн</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-700">Лендінг у наших команд</span>
                      </div>
                      <span className="font-bold text-green-600 text-lg">5,000 грн</span>
                    </div>
                    
                    <div className="text-center pt-6 border-t border-gray-200">
                      <div className="text-4xl font-bold text-green-600 mb-2">Ціни втричі нижчі</div>
                      <div className="text-gray-600 font-medium">За ринком</div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <BarChart3 className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="text-sm font-semibold text-gray-700">Якісно</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                      <Globe className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                      <div className="text-sm font-semibold text-gray-700">150+ проектів</div>
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Переваги для вашого бізнесу
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Чому підрядників обирають саме у нас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-green-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Низькі ціни</h3>
                  <p className="text-gray-600 text-sm">Економте від 30% до 67% бюджету порівняно з аутсорс-студіями</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Перевірені команди</h3>
                  <p className="text-gray-600 text-sm">Всі команди проходять відбір і мають рейтинги</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-purple-50 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Швидкі терміни</h3>
                  <p className="text-gray-600 text-sm">Мотивовані команди працюють швидше за штатних співробітників</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start p-6 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Зрозуміліше молоді</h3>
                  <p className="text-gray-600 text-sm">Будуйте бренд роботодавця разом з нами.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Порівняння цін
            </h2>
            <p className="text-xl text-gray-600">
              Реальна економія на популярних типах проектів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Лендінг</h3>
                <p className="text-gray-600">Одна сторінка з формою зворотного зв'язку</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Студія розробки</span>
                    <span className="text-red-600 font-bold line-through">15,000 грн</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Наша команда</span>
                    <span className="text-green-600 font-bold text-xl">5,000 грн</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-green-600">Плюс одна інтеграція</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500">
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                Найпопулярніше
              </div>
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900 mb-2">CRM</h3>
                <p className="text-gray-600">Розробка CRM системи</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Студія розробки</span>
                    <span className="text-red-600 font-bold line-through">35,000 грн</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Наша команда</span>
                    <span className="text-green-600 font-bold text-xl">12,000 грн</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-green-600">Інтеграція з ШІ у подарунок</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Box</h3>
                <p className="text-gray-600">AI-асистент для продаж з колл-трекінгом</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Студія розробки</span>
                    <span className="text-red-600 font-bold line-through">70,000 грн</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Наша команда</span>
                    <span className="text-green-600 font-bold text-xl">23,000 грн</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-green-600">Вміємо робити і таке</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Як це працює
            </h2>
            <p className="text-xl text-gray-600">
              Простий процес від ідеї до готового продукту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <NumberCircle 
                number={1}
                bgColor="bg-green-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Опублікуйте проект</h3>
              <p className="text-gray-600">
                Детально опишіть ваш проект, вкажіть бюджет та терміни
              </p>
            </div>

            <div className="text-center">
              <NumberCircle 
                number={2}
                bgColor="bg-blue-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Оберіть команду</h3>
              <p className="text-gray-600">
                Переглядайте заявки, портфоліо та рейтинги команд
              </p>
            </div>

            <div className="text-center">
              <NumberCircle 
                number={3}
                bgColor="bg-purple-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Контролюйте процес</h3>
              <p className="text-gray-600">
                Отримуйте регулярні звіти та переглядайте прогрес
              </p>
            </div>

            <div className="text-center">
              <NumberCircle 
                number={4}
                bgColor="bg-orange-600"
                textColor="text-white"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Отримайте результат</h3>
              <p className="text-gray-600">
                Приймайте готовий продукт та заощаджуйте кошти
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Успішні проекти
            </h2>
            <p className="text-xl text-gray-600">
              Реальні відгуки від наших клієнтів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard preset="business" />
            <TestimonialCard 
              preset="business"
              quote="Мобільний додаток готовий за 6 тижнів. Якість на рівні, ціна в 8 разів менша!"
              author="Олексій П."
              position="Tech Startup • Mobile App"
              savings="$18,000"
            />
            <TestimonialCard 
              preset="business"
              quote="Корпоративний сайт з CRM за $900. Тепер постійно працюємо з цією командою!"
              author="Андрій С."
              position="Business Solutions • Website"
              savings="$7,100"
            />
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Чому ми найкращі
            </h2>
            <p className="text-xl text-gray-600">
              Ваше задоволення - наш пріоритет
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <IconCircle 
                icon={<Shield className="w-8 h-8" />}
                bgColor="bg-green-100"
                textColor="text-green-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантія якості</h3>
              <p className="text-gray-600">Тільки перевірені підрядники</p>
            </div>

            <div className="text-center p-6">
              <IconCircle 
                icon={<Clock className="w-8 h-8" />}
                bgColor="bg-blue-100"
                textColor="text-blue-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Незрівнянна швидкість</h3>
              <p className="text-gray-600">Команди працюють на результат, а не за зарплату</p>
            </div>

            <div className="text-center p-6">
              <IconCircle 
                icon={<Users className="w-8 h-8" />}
                bgColor="bg-purple-100"
                textColor="text-purple-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Пірями контракти</h3>
              <p className="text-gray-600">Без комісій та непотрібних витрат</p>
            </div>

            <div className="text-center p-6">
              <IconCircle 
                icon={<Award className="w-8 h-8" />}
                bgColor="bg-orange-100"
                textColor="text-orange-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Бренд роботодавця</h3>
              <p className="text-gray-600">Ми допоможемо вам стати зрозумілими та цікавими для молоді</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові заощадити від 30% бюджету?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Опублікуйте ваш проект та отримайте пропозиції від перевірених команд
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Опублікувати проект
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105 flex items-center justify-center">
              <Target className="w-5 h-5 mr-2" />
              Переглянути команди
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForBusinessPage;