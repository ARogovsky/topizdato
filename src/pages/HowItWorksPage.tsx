import React from 'react';
import { 
  Users, 
  Briefcase, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Search,
  MessageCircle,
  DollarSign,
  Star,
  Clock,
  Shield,
  Target,
  Zap,
  TrendingUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Як це{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              працює
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Проста та ефективна система, яка об'єднує таланти і потреби
          </p>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Команди формуються</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Розробники, дизайнери та проект-менеджери об'єднуються в команди 
                по 3-5 осіб з різними навичками для виконання проектів
              </p>
              <div className="flex items-center justify-center text-blue-600 font-semibold">
                Крок 1 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Проекти надходять</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Бізнес публікує свої завдання, команди подають заявки, 
                найкращі отримують можливість працювати над проектом
              </p>
              <div className="flex items-center justify-center text-purple-600 font-semibold">
                Крок 2 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Результат досягнуто</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Команди виконують проекти, отримують реальний досвід і гроші, 
                а бізнес — якісний продукт за низькою ціною
              </p>
              <div className="flex items-center justify-center text-green-600 font-semibold">
                Крок 3 <CheckCircle className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process for Teams */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Для команд розробників
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Покроковий процес від реєстрації до отримання першого проекту
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Створення команди</h3>
                  <p className="text-gray-600">
                    Зареєструйтеся, заповніть профіль та знайдіть однодумців. 
                    Ідеальна команда: розробник, дизайнер, проект-менеджер.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Search className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Пошук проектів</h3>
                  <p className="text-gray-600">
                    Переглядайте доступні проекти, аналізуйте вимоги та 
                    обирайте ті, що відповідають вашим навичкам.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Подача заявки</h3>
                  <p className="text-gray-600">
                    Напишіть переконливу заявку, покажіть портфоліо та 
                    запропонуйте реалістичні терміни виконання.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Виконання та оплата</h3>
                  <p className="text-gray-600">
                    Працюйте над проектом, регулярно звітуйте про прогрес 
                    та отримуйте оплату після здачі роботи.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Ваші переваги</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="w-6 h-6 mr-3 text-yellow-300" />
                    <span>Реальний досвід роботи</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-3 text-green-300" />
                    <span>Стабільний дохід $500-2000</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-300" />
                    <span>Гарантія оплати</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-6 h-6 mr-3 text-purple-300" />
                    <span>Портфоліо з реальними кейсами</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process for Business */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Для бізнесу
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Як отримати якісний продукт за доступною ціною
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Економія до 90%</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                    <span>Лендінг у студії</span>
                    <span className="font-bold">$5,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                    <span>Лендінг на TOPIZDA</span>
                    <span className="font-bold text-green-300">$500</span>
                  </div>
                  <div className="text-center pt-4 border-t border-white/20">
                    <div className="text-3xl font-bold text-green-300">90% економії</div>
                    <div className="text-green-100">Без втрати якості</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Публікація проекту</h3>
                  <p className="text-gray-600">
                    Детально опишіть ваш проект, вкажіть бюджет та терміни. 
                    Чим детальніше ТЗ, тим кращий результат.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Вибір команди</h3>
                  <p className="text-gray-600">
                    Отримайте заявки від команд, переглядайте портфоліо, 
                    рейтинги та відгуки попередніх клієнтів.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Контроль процесу</h3>
                  <p className="text-gray-600">
                    Отримуйте регулярні звіти, переглядайте проміжні результати 
                    та надавайте зворотний зв'язок.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Отримання результату</h3>
                  <p className="text-gray-600">
                    Приймайте готовий продукт, тестуйте функціонал та 
                    отримуйте гарантійну підтримку.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Результати платформи
            </h2>
            <p className="text-xl text-gray-600">
              Цифри, які говорять самі за себе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Активних розробників</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Завершених проектів</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Середній рейтинг</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-gray-600">Економія бюджету</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Часті запитання
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Як гарантується якість роботи?
              </h3>
              <p className="text-gray-600">
                Всі команди проходять ретельний відбір, мають рейтинги та відгуки. 
                Ми надаємо гарантію результату або повернення коштів.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Чому ціни такі низькі?
              </h3>
              <p className="text-gray-600">
                Наші команди складаються з початківців та junior спеціалістів, 
                які працюють за нижчими ставками для набуття досвіду.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Як відбувається оплата?
              </h3>
              <p className="text-gray-600">
                Оплата поетапна через ескроу-сервіс: передоплата, проміжні етапи, 
                фінальний платіж після здачі проекту.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Скільки часу займає пошук команди?
              </h3>
              <p className="text-gray-600">
                Зазвичай 1-3 дні. Після публікації проекту ви почнете отримувати 
                заявки від команд протягом кількох годин.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові розпочати?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Приєднуйтесь до тисяч розробників та компаній, які вже працюють на платформі
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Для розробників
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Для бізнесу
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;