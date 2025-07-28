import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  BookOpen,
  Briefcase,
  Code,
  BarChart3,
  Globe,
  Zap,
  Shield
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getRedirectUrl } from '../utils/domainUtils';
import { trackEducationPartnership } from '../utils/gtag';

const ForEducationPage = () => {
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    setRedirectUrl(getRedirectUrl('/thank-you'));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Отправляем конверсию Google Analytics
    trackEducationPartnership();
    
    // Даем время Google Analytics отправить событие, затем отправляем форму
    setTimeout(() => {
      const form = e.target as HTMLFormElement;
      const originalOnSubmit = form.onsubmit;
      form.onsubmit = null;
      form.submit();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900">Для освіти</h1>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
              Підвищте показник{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                працевлаштування
              </span>{' '}
              своїх випускників
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Дайте студентам можливість працювати над реальними проектами, 
              набиратися досвіду та заробляти гроші ще під час навчання
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#partner-form"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Стати партнером
              </Link>
              <Link 
                to="/how-it-works"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center"
              >
                Дізнатися більше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">85%</div>
              <div className="text-gray-600">Випускників працевлаштовані</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-600">Партнерських закладів</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-gray-600">Студентів на платформі</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">$800</div>
              <div className="text-gray-600">Середній заробіток студента</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Переваги для освіти
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Як ми допомагаємо університетам, коледжам та курсам
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Збільшення працевлаштування</h3>
              <p className="text-gray-600 leading-relaxed">
                Ваші випускники отримають реальний досвід роботи ще під час навчання, 
                що значно підвищує їх шанси на працевлаштування
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Практичний досвід</h3>
              <p className="text-gray-600 leading-relaxed">
                Студенти працюють над реальними проектами замість учбових завдань, 
                отримуючи цінний досвід роботи в команді
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Репутація закладу</h3>
              <p className="text-gray-600 leading-relaxed">
                Підвищуйте престиж навчального закладу успішними кейсами 
                та високим рівнем працевлаштування випускників
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Як це працює
            </h2>
            <p className="text-xl text-gray-600">
              Простий процес інтеграції з навчальним процесом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Партнерство</h3>
              <p className="text-gray-600">
                Підписуємо угоду про співпрацю та інтегруємо платформу в навчальний процес
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Навчання</h3>
              <p className="text-gray-600">
                Проводимо тренінги для викладачів та студентів з роботи на платформі
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Практика</h3>
              <p className="text-gray-600">
                Студенти формують команди та працюють над реальними проектами
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Результат</h3>
              <p className="text-gray-600">
                Отримуємо досвідчених випускників з портфоліо та заробітком
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Що отримують студенти
            </h2>
            <p className="text-xl text-gray-600">
              Реальні переваги для майбутніх IT спеціалістів
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Реальний досвід роботи</h3>
                  <p className="text-gray-600">
                    Працюють над справжніми проектами для реального бізнесу, 
                    а не над навчальними завданнями
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Командна робота</h3>
                  <p className="text-gray-600">
                    Навчаються працювати в команді з іншими спеціалістами, 
                    як це відбувається в реальних IT компаніях
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Портфоліо</h3>
                  <p className="text-gray-600">
                    Створюють вражаюче портфоліо з реальними кейсами, 
                    що допомагає при пошуку роботи
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Заробіток</h3>
                  <p className="text-gray-600">
                    Отримують реальні гроші за свою роботу, 
                    що мотивує та дає фінансову незалежність
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Статистика студентів</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Середній заробіток за проект</span>
                    <span className="text-2xl font-bold">$400-800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Проектів на рік</span>
                    <span className="text-2xl font-bold">3-5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Працевлаштування після випуску</span>
                    <span className="text-2xl font-bold">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Підвищення зарплати</span>
                    <span className="text-2xl font-bold">+40%</span>
                  </div>
                </div>
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
              Реальні результати наших партнерських закладів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">КПІ ім. Ігоря Сікорського</h3>
                  <div className="text-sm text-gray-600">Факультет інформатики</div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "За рік співпраці 78% наших випускників знайшли роботу 
                ще до закінчення університету. Середня зарплата зросла на 35%."
              </blockquote>
              <div className="border-t pt-4">
                <div className="text-sm text-gray-600">
                  <strong>Результат:</strong> 120 студентів, 45 проектів, 78% працевлаштування
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">НУ "Львівська політехніка"</h3>
                  <div className="text-sm text-gray-600">Інститут КН</div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "Студенти отримали практичний досвід, який неможливо 
                отримати в аудиторії. Роботодавці відзначають високий рівень підготовки."
              </blockquote>
              <div className="border-t pt-4">
                <div className="text-sm text-gray-600">
                  <strong>Результат:</strong> 85 студентів, 32 проекти, 82% працевлаштування
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">Харківський політех</h3>
                  <div className="text-sm text-gray-600">Факультет КІТ</div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "Платформа стала невід'ємною частиною навчального процесу. 
                Студенти мотивовані та готові до реальної роботи."
              </blockquote>
              <div className="border-t pt-4">
                <div className="text-sm text-gray-600">
                  <strong>Результат:</strong> 95 студентів, 38 проектів, 89% працевлаштування
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Що ми пропонуємо партнерам
            </h2>
            <p className="text-xl text-gray-600">
              Комплексна підтримка для освіти
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Навчальні матеріали</h3>
              <p className="text-gray-600">
                Готові курси та матеріали для інтеграції в навчальний процес
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Тренінги для викладачів</h3>
              <p className="text-gray-600">
                Навчаємо викладачів роботі з платформою та менторству студентів
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Аналітика та звіти</h3>
              <p className="text-gray-600">
                Детальна статистика успішності студентів та ефективності програми
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Технічна підтримка</h3>
              <p className="text-gray-600">
                Цілодобова підтримка та допомога в вирішенні технічних питань
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Міжнародні проекти</h3>
              <p className="text-gray-600">
                Доступ до проектів від міжнародних клієнтів для розширення досвіду
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Сертифікація</h3>
              <p className="text-gray-600">
                Офіційні сертифікати для студентів після завершення проектів
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Registration Form */}
      <section id="partner-form" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Стати партнером
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Заповніть форму та ми зв'яжемося з вами протягом 24 годин
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="f7722820-f1f5-48bf-affb-e762b4d93a77" />
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="subject" value="Нова заявка на партнерство з навчальним закладом" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                    Назва навчального закладу *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Наприклад: КПІ ім. Ігоря Сікорського"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                    Контактна особа *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="ПІБ контактної особи"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="students" className="block text-sm font-semibold text-gray-700 mb-2">
                    Кількість студентів *
                  </label>
                  <select
                    id="students"
                    name="students"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Оберіть кількість</option>
                    <option value="less-50">Менше 50 студентів</option>
                    <option value="50-100">50-100 студентів</option>
                    <option value="100-300">100-300 студентів</option>
                    <option value="300-500">300-500 студентів</option>
                    <option value="500+">500+ студентів</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Посада *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Оберіть посаду</option>
                    <option value="dean">Декан</option>
                    <option value="head-of-department">Завідувач кафедри</option>
                    <option value="professor">Професор</option>
                    <option value="associate-professor">Доцент</option>
                    <option value="senior-lecturer">Старший викладач</option>
                    <option value="lecturer">Викладач</option>
                    <option value="methodologist">Методист</option>
                    <option value="other">Інша посада</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Додаткова інформація
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Розкажіть про ваші цілі та очікування від співпраці..."
                ></textarea>
              </div>

              {/* Privacy Policy and Oferta Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                    Я приймаю{' '}
                    <a href="/terms" target="_blank" className="text-purple-600 hover:text-purple-800 underline">
                      політику конфіденційності
                    </a>{' '}
                    та згоден з обробкою персональних даних *
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="oferta"
                    name="oferta"
                    required
                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="oferta" className="ml-2 text-sm text-gray-700">
                    Я приймаю умови{' '}
                    <a href="/oferta" target="_blank" className="text-purple-600 hover:text-purple-800 underline">
                      договору оферти
                    </a>{' '}
                    та згоден з правилами використання сервісу *
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Відправити заявку
                </button>
                <button
                  type="button"
                  className="hidden border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Завантажити презентацію
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForEducationPage;