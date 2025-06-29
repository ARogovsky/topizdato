import React, { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronRight,
  Users,
  Briefcase,
  CreditCard,
  Shield,
  Settings,
  FileText
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Всі категорії', icon: Book },
    { id: 'getting-started', name: 'Початок роботи', icon: Users },
    { id: 'projects', name: 'Проекти', icon: Briefcase },
    { id: 'payments', name: 'Оплата', icon: CreditCard },
    { id: 'security', name: 'Безпека', icon: Shield },
    { id: 'account', name: 'Акаунт', icon: Settings }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'Як почати роботу на платформі?',
      answer: 'Для початку роботи вам потрібно зареєструватися, заповнити профіль та обрати свою роль: розробник (створити команду) або замовник (опублікувати проект). Після цього ви зможете переглядати доступні проекти або команди.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'Які вимоги до команд розробників?',
      answer: 'Команди повинні складатися з 2-5 учасників з різними навичками. Кожен учасник повинен мати базові знання у своїй сфері та бажання працювати над реальними проектами. Досвід роботи не обов\'язковий, але вітається.'
    },
    {
      id: 3,
      category: 'projects',
      question: 'Як опублікувати проект?',
      answer: 'Перейдіть на сторінку "Опублікувати проект", заповніть детальний опис завдання, вкажіть бюджет та терміни. Після модерації (до 24 годин) ваш проект стане доступним для команд.'
    },
    {
      id: 4,
      category: 'projects',
      question: 'Скільки коштує публікація проекту?',
      answer: 'Публікація проекту абсолютно безкоштовна. Ми беремо комісію тільки після успішного завершення проекту - 10% від суми угоди.'
    },
    {
      id: 5,
      category: 'projects',
      question: 'Як обрати найкращу команду?',
      answer: 'Оцініть портфоліо команд, їх рейтинг, відгуки попередніх клієнтів та релевантність навичок до вашого проекту. Також важливо провести співбесіду з командою перед початком роботи.'
    },
    {
      id: 6,
      category: 'payments',
      question: 'Як відбувається оплата?',
      answer: 'Оплата проходить через ескроу-сервіс: ви вносите кошти на платформу, вони блокуються до завершення проекту. Після здачі роботи кошти автоматично переводяться команді.'
    },
    {
      id: 7,
      category: 'payments',
      question: 'Які способи оплати доступні?',
      answer: 'Ми приймаємо оплату банківськими картами (Visa, MasterCard), банківськими переказами та через електронні гаманці (PayPal, Wise).'
    },
    {
      id: 8,
      category: 'payments',
      question: 'Чи можна повернути кошти?',
      answer: 'Так, якщо команда не виконала роботу згідно з технічним завданням або порушила терміни без поважних причин, ви можете повернути кошти через службу підтримки.'
    },
    {
      id: 9,
      category: 'security',
      question: 'Як захищені мої дані?',
      answer: 'Ми використовуємо SSL-шифрування для всіх даних, дотримуємося стандартів GDPR та регулярно проводимо аудит безпеки. Ваші персональні дані не передаються третім особам.'
    },
    {
      id: 10,
      category: 'security',
      question: 'Що робити при спорі з командою?',
      answer: 'У разі спору зверніться до служби підтримки з детальним описом проблеми. Ми розглянемо ситуацію та допоможемо знайти справедливе рішення для обох сторін.'
    },
    {
      id: 11,
      category: 'account',
      question: 'Як змінити дані профілю?',
      answer: 'Увійдіть в особистий кабінет, перейдіть в розділ "Налаштування" та відредагуйте необхідні поля. Зміни збережуться автоматично.'
    },
    {
      id: 12,
      category: 'account',
      question: 'Як видалити акаунт?',
      answer: 'Для видалення акаунту зверніться до служби підтримки. Зверніть увагу, що після видалення всі дані будуть втрачені назавжди.'
    }
  ];

  const guides = [
    {
      title: 'Гайд для початківців-розробників',
      description: 'Покрокова інструкція як створити команду та знайти перший проект',
      icon: Users,
      readTime: '10 хв'
    },
    {
      title: 'Як написати ефективне технічне завдання',
      description: 'Поради для замовників щодо правильного оформлення проектів',
      icon: FileText,
      readTime: '8 хв'
    },
    {
      title: 'Безпека на платформі',
      description: 'Як захистити себе від шахрайства та працювати безпечно',
      icon: Shield,
      readTime: '12 хв'
    },
    {
      title: 'Ефективна комунікація в команді',
      description: 'Інструменти та методи для успішної роботи в команді',
      icon: MessageCircle,
      readTime: '15 хв'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Центр{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              допомоги
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Знайдіть відповіді на всі ваші запитання про роботу з платформою
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Пошук по базі знань..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Онлайн чат</h3>
              <p className="text-gray-600 mb-4">Миттєва допомога від нашої команди підтримки</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Почати чат →
              </button>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email підтримка</h3>
              <p className="text-gray-600 mb-4">Детальна відповідь протягом 24 годин</p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Написати email →
              </button>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Телефонна підтримка</h3>
              <p className="text-gray-600 mb-4">Дзвінки в робочі дні з 9:00 до 18:00</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                +380 44 123 45 67 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Корисні гайди
            </h2>
            <p className="text-xl text-gray-600">
              Детальні інструкції для успішної роботи на платформі
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часті запитання
            </h2>
            <p className="text-xl text-gray-600">
              Відповіді на найпопулярніші запитання користувачів
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Нічого не знайдено</h3>
              <p className="text-gray-600">Спробуйте змінити пошуковий запит або категорію</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Не знайшли відповідь?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Наша команда підтримки завжди готова допомогти вам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Зв'язатися з підтримкою
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Переглянути всі гайди
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenterPage;