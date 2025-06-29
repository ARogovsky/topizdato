import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock,
  Users,
  Briefcase,
  Code,
  Palette,
  Smartphone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('web');

  const categories = [
    { id: 'web', name: 'Веб-розробка', icon: Code },
    { id: 'mobile', name: 'Мобільні додатки', icon: Smartphone },
    { id: 'design', name: 'Дизайн', icon: Palette },
    { id: 'ecommerce', name: 'E-commerce', icon: Briefcase }
  ];

  const pricingData = {
    web: {
      title: 'Веб-розробка',
      packages: [
        {
          name: 'Лендінг',
          price: '$300-500',
          marketPrice: '$3,000-5,000',
          savings: '90%',
          duration: '1-2 тижні',
          features: [
            'Адаптивний дизайн',
            'SEO оптимізація',
            'Форма зворотного зв\'язку',
            'Інтеграція з Google Analytics',
            'Хостинг на 1 рік',
            'SSL сертифікат'
          ],
          notIncluded: [
            'E-commerce функціонал',
            'Багатомовність',
            'Складна анімація'
          ],
          popular: false
        },
        {
          name: 'Корпоративний сайт',
          price: '$800-1,500',
          marketPrice: '$8,000-15,000',
          savings: '90%',
          duration: '3-4 тижні',
          features: [
            'До 10 сторінок',
            'CMS для управління контентом',
            'Блог',
            'Галерея робіт/послуг',
            'Інтеграція з соцмережами',
            'Форми зворотного зв\'язку',
            'SEO оптимізація',
            'Мобільна версія',
            'Хостинг на 1 рік'
          ],
          notIncluded: [
            'Інтернет-магазин',
            'Особистий кабінет користувачів'
          ],
          popular: true
        },
        {
          name: 'Веб-додаток',
          price: '$2,000-4,000',
          marketPrice: '$20,000-40,000',
          savings: '90%',
          duration: '6-8 тижнів',
          features: [
            'Реєстрація та авторизація',
            'Особистий кабінет',
            'База даних',
            'API інтеграції',
            'Адмін панель',
            'Система ролей',
            'Email повідомлення',
            'Резервне копіювання',
            'Технічна підтримка 3 місяці'
          ],
          notIncluded: [
            'Мобільний додаток',
            'Складна аналітика'
          ],
          popular: false
        }
      ]
    },
    mobile: {
      title: 'Мобільні додатки',
      packages: [
        {
          name: 'Простий додаток',
          price: '$1,500-2,500',
          marketPrice: '$15,000-25,000',
          savings: '90%',
          duration: '4-6 тижнів',
          features: [
            'iOS та Android',
            'До 5 екранів',
            'Базова навігація',
            'Локальне збереження даних',
            'Push повідомлення',
            'Публікація в App Store/Google Play'
          ],
          notIncluded: [
            'Складна логіка',
            'Інтеграція з платіжними системами',
            'Геолокація'
          ],
          popular: false
        },
        {
          name: 'Бізнес додаток',
          price: '$3,000-5,000',
          marketPrice: '$30,000-50,000',
          savings: '90%',
          duration: '6-10 тижнів',
          features: [
            'iOS та Android',
            'Авторизація користувачів',
            'Синхронізація з сервером',
            'Push повідомлення',
            'Офлайн режим',
            'Аналітика використання',
            'Інтеграція з API',
            'Адмін панель',
            'Публікація в сторах'
          ],
          notIncluded: [
            'Складні анімації',
            'AR/VR функції'
          ],
          popular: true
        },
        {
          name: 'Складний додаток',
          price: '$5,000-8,000',
          marketPrice: '$50,000-80,000',
          savings: '90%',
          duration: '10-14 тижнів',
          features: [
            'iOS та Android',
            'Реєстрація через соцмережі',
            'Платіжні системи',
            'Геолокація та карти',
            'Чат та повідомлення',
            'Відео/аудіо функції',
            'Складна бізнес-логіка',
            'Багатомовність',
            'Детальна аналітика',
            'Технічна підтримка 6 місяців'
          ],
          notIncluded: [
            'Штучний інтелект',
            'Blockchain інтеграція'
          ],
          popular: false
        }
      ]
    },
    design: {
      title: 'Дизайн',
      packages: [
        {
          name: 'Логотип та фірмстиль',
          price: '$200-400',
          marketPrice: '$2,000-4,000',
          savings: '90%',
          duration: '1-2 тижні',
          features: [
            '3 варіанти логотипу',
            'Фірмові кольори',
            'Типографіка',
            'Візитка',
            'Бланк',
            'Файли у векторному форматі'
          ],
          notIncluded: [
            'Брендбук',
            'Упаковка',
            'Реклама'
          ],
          popular: false
        },
        {
          name: 'UI/UX дизайн сайту',
          price: '$500-1,000',
          marketPrice: '$5,000-10,000',
          savings: '90%',
          duration: '2-3 тижні',
          features: [
            'UX дослідження',
            'Wireframes',
            'UI дизайн до 10 сторінок',
            'Мобільна версія',
            'Інтерактивний прототип',
            'Гайдлайни для розробників',
            'Файли Figma'
          ],
          notIncluded: [
            'Анімації',
            'Ілюстрації',
            'Іконки'
          ],
          popular: true
        },
        {
          name: 'Повний брендинг',
          price: '$1,000-2,000',
          marketPrice: '$10,000-20,000',
          savings: '90%',
          duration: '4-6 тижнів',
          features: [
            'Дослідження ринку',
            'Стратегія бренду',
            'Логотип та фірмстиль',
            'Брендбук',
            'Веб-дизайн',
            'Соціальні мережі',
            'Рекламні матеріали',
            'Упаковка (якщо потрібно)',
            'Презентація бренду'
          ],
          notIncluded: [
            'Відео реклама',
            'Фотозйомка'
          ],
          popular: false
        }
      ]
    },
    ecommerce: {
      title: 'E-commerce',
      packages: [
        {
          name: 'Простий магазин',
          price: '$1,000-2,000',
          marketPrice: '$10,000-20,000',
          savings: '90%',
          duration: '3-4 тижні',
          features: [
            'До 100 товарів',
            'Каталог з фільтрами',
            'Кошик та оформлення',
            'Інтеграція з платіжними системами',
            'Адмін панель',
            'Управління замовленнями',
            'SEO оптимізація'
          ],
          notIncluded: [
            'Складна логістика',
            'Багато валют',
            'Програма лояльності'
          ],
          popular: false
        },
        {
          name: 'Повноцінний магазин',
          price: '$2,500-4,000',
          marketPrice: '$25,000-40,000',
          savings: '90%',
          duration: '5-7 тижнів',
          features: [
            'Необмежена кількість товарів',
            'Реєстрація користувачів',
            'Особистий кабінет',
            'Відгуки та рейтинги',
            'Знижки та промокоди',
            'Інтеграція з доставкою',
            'Email маркетинг',
            'Аналітика продажів',
            'Мобільна версія'
          ],
          notIncluded: [
            'Мобільний додаток',
            'B2B функціонал'
          ],
          popular: true
        },
        {
          name: 'Маркетплейс',
          price: '$5,000-8,000',
          marketPrice: '$50,000-80,000',
          savings: '90%',
          duration: '8-12 тижнів',
          features: [
            'Мультивендорність',
            'Комісійна система',
            'Кабінет продавця',
            'Модерація товарів',
            'Складна система доставки',
            'Багатовалютність',
            'Програма партнерства',
            'Детальна аналітика',
            'API для інтеграцій',
            'Технічна підтримка 6 місяців'
          ],
          notIncluded: [
            'Власна платіжна система',
            'Штучний інтелект'
          ],
          popular: false
        }
      ]
    }
  };

  const currentData = pricingData[selectedCategory as keyof typeof pricingData];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Прозорі{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ціни
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Економте до 90% бюджету без втрати якості
          </p>
        </div>
      </section>

      {/* Comparison Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">90%</div>
              <div className="text-gray-600">Економія бюджету</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">2x</div>
              <div className="text-gray-600">Швидше за студії</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-gray-600">Гарантія якості</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentData.title}
            </h2>
            <p className="text-xl text-gray-600">
              Оберіть пакет, який підходить для вашого проекту
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentData.packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl ${
                  pkg.popular ? 'ring-4 ring-green-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-2 font-semibold">
                    <Star className="inline-block w-4 h-4 mr-1" />
                    Найпопулярніший
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">{pkg.price}</div>
                    <div className="text-sm text-gray-500 line-through mb-1">
                      Ринкова ціна: {pkg.marketPrice}
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      Економія {pkg.savings}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Включено:</h4>
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-900">Не включено:</h4>
                      {pkg.notIncluded.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 transform hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Замовити проект
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Чому обирають нас?
            </h2>
            <p className="text-xl text-gray-600">
              Переваги роботи з TOPIZDA.TO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Швидко</h3>
              <p className="text-gray-600">Мотивовані команди працюють у 2 рази швидше</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Надійно</h3>
              <p className="text-gray-600">Гарантія результату або повернення коштів</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Перевірено</h3>
              <p className="text-gray-600">Всі команди проходять ретельний відбір</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Якісно</h3>
              <p className="text-gray-600">Середній рейтинг команд 4.8/5</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часті запитання
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Чому ціни такі низькі?
              </h3>
              <p className="text-gray-600">
                Наші команди складаються з початківців та junior спеціалістів, які працюють за нижчими ставками, 
                але під наглядом досвідчених менторів. Це дозволяє знизити вартість без втрати якості.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Що включає гарантія якості?
              </h3>
              <p className="text-gray-600">
                Якщо результат не відповідає технічному завданню, ми безкоштовно доопрацюємо проект 
                або повернемо кошти. Гарантійний період - 3 місяці після здачі проекту.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Як відбувається оплата?
              </h3>
              <p className="text-gray-600">
                Оплата поетапна: 30% передоплата, 40% після показу проміжного результату, 
                30% після здачі готового проекту. Кошти зберігаються на ескроу-рахунку.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Чи можна змінити вимоги під час роботи?
              </h3>
              <p className="text-gray-600">
                Так, але зміни понад 20% від початкового обсягу можуть вплинути на вартість та терміни. 
                Всі зміни узгоджуються заздалегідь.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові заощадити 90% бюджету?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Опублікуйте ваш проект та отримайте пропозиції від перевірених команд
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Опублікувати проект безкоштовно
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;