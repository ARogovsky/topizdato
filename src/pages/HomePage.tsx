import React from 'react';
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Target,
  Rocket,
  BarChart3,
  Globe,
  Code,
  Palette,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import IconCircle from '../components/IconCircle';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Перевірені підрядники, які{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                по кишені
              </span>{' '}
              малому та середньому бізнесу
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Платформа, де IT/Digital фахівці об'єднуються в команди, 
              демонструють експертність та заробляють гроші, 
              допомагаючи бізнесу вирішувати проблеми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/create-team"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Створити команду
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/find-team"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center"
              >
                Знайти виконавців
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-gray-600">Активних команд</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-gray-600">Завершених проектів</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">80%</div>
              <div className="text-gray-600">Задоволених клієнтів</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">3x</div>
              <div className="text-gray-600">Дешевше за найм</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Як це працює</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Проста та ефективна система, яка об'єднує таланти і потреби
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <IconCircle 
                icon={<Users className="w-8 h-8" />}
                bgColor="bg-blue-100"
                textColor="text-blue-600"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Команди формуються</h3>
              <p className="text-gray-600 mb-6">
                Розробники, проджект менеджери, дизайнери та інші фахівці об'єднуються в команди
                для виконання проектів
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Крок 1 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <IconCircle 
                icon={<Briefcase className="w-8 h-8" />}
                bgColor="bg-purple-100"
                textColor="text-purple-600"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Проекти надходять</h3>
              <p className="text-gray-600 mb-6">
                Бізнес відкриває міні-тендер, команди подають заявки, 
                найкращі отримують можливість працювати над проектом
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                Крок 2 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <IconCircle 
                icon={<Award className="w-8 h-8" />}
                bgColor="bg-green-100"
                textColor="text-green-600"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Результат досягнуто</h3>
              <p className="text-gray-600 mb-6">
                Команди виконують проекти, отримують гроші, 
                а бізнес — якісний продукт за доступною ціною
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                Крок 3 <CheckCircle className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/how-it-works"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Дізнатися більше про процес
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links to Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Оберіть свій шлях
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Підняття економіки - це складна подорож, яка починається з першого кроку
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Teams */}
            <Link 
              to="/for-teams"
              className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Для команд</h3>
              <p className="text-gray-600 mb-6">
                Перестаньте робити безкоштовні pet-проекти та стартапи — починайте заробляти на реальних завданнях
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  $500-2000 за проект
                </div>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Дізнатися більше <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* For Business */}
            <Link 
              to="/for-business"
              className="group bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-green-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Для бізнесу</h3>
              <p className="text-gray-600 mb-6">
                Вибирайте команду із трьох фахівців за ціною місячної зарплати одного, та отримуйте рішення без втрати якості
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Економія від 30%
                </div>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Дізнатися більше <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* For Education */}
            <Link 
              to="/for-education"
              className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-purple-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Для освіти</h3>
              <p className="text-gray-600 mb-6">
                Підвищте показник працевлаштування випускників підключаючи їх до команд для простих завдань
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  90% успіху
                </div>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                  Дізнатися більше <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Історії успіху
            </h2>
            <p className="text-xl text-gray-600">
              Реальні результати від наших користувачів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard preset="team" />
            <TestimonialCard preset="business" />
            <TestimonialCard preset="education" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection variant="gradient" />

      <Footer />
    </div>
  );
};

export default HomePage;