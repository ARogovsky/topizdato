import React, { useState } from 'react';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  Star, 
  Clock, 
  Users,
  Play,
  CheckCircle,
  ArrowRight,
  Code,
  Palette,
  Briefcase,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LearningMaterialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Всі матеріали', icon: BookOpen },
    { id: 'development', name: 'Розробка', icon: Code },
    { id: 'design', name: 'Дизайн', icon: Palette },
    { id: 'management', name: 'Менеджмент', icon: Briefcase },
    { id: 'soft-skills', name: 'Soft Skills', icon: Users }
  ];

  const materials = [
    {
      id: 1,
      title: 'Повний курс React для початківців',
      description: 'Вивчіть React з нуля до створення повноцінних додатків. Включає hooks, context, routing та багато іншого.',
      type: 'video',
      category: 'development',
      duration: '12 годин',
      lessons: 45,
      rating: 4.9,
      students: 1250,
      level: 'Початківець',
      author: 'Олексій Петренко',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React', 'JavaScript', 'Frontend'],
      free: false,
      price: '$49'
    },
    {
      id: 2,
      title: 'Основи UX/UI дизайну в Figma',
      description: 'Навчіться створювати сучасні інтерфейси та проводити UX дослідження для веб та мобільних додатків.',
      type: 'video',
      category: 'design',
      duration: '8 годин',
      lessons: 32,
      rating: 4.8,
      students: 890,
      level: 'Початківець',
      author: 'Марія Коваленко',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Figma', 'UX/UI', 'Design'],
      free: true,
      price: 'Безкоштовно'
    },
    {
      id: 3,
      title: 'Гайд по командній роботі в IT',
      description: 'Практичні поради щодо ефективної роботи в команді, комунікації та управління проектами.',
      type: 'article',
      category: 'management',
      duration: '30 хв читання',
      lessons: 1,
      rating: 4.7,
      students: 2100,
      level: 'Всі рівні',
      author: 'Андрій Сидоренко',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Teamwork', 'Communication', 'Project Management'],
      free: true,
      price: 'Безкоштовно'
    },
    {
      id: 4,
      title: 'Node.js та Express для бекенд розробки',
      description: 'Створюйте потужні серверні додатки з Node.js, Express, MongoDB та автентифікацією.',
      type: 'video',
      category: 'development',
      duration: '15 годин',
      lessons: 58,
      rating: 4.9,
      students: 756,
      level: 'Середній',
      author: 'Дмитро Іваненко',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Node.js', 'Express', 'MongoDB', 'Backend'],
      free: false,
      price: '$69'
    },
    {
      id: 5,
      title: 'Психологія продажів для фрілансерів',
      description: 'Як правильно презентувати свої послуги, вести переговори з клієнтами та збільшувати доходи.',
      type: 'video',
      category: 'soft-skills',
      duration: '6 годин',
      lessons: 24,
      rating: 4.6,
      students: 1890,
      level: 'Всі рівні',
      author: 'Ольга Мельник',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Sales', 'Communication', 'Freelancing'],
      free: true,
      price: 'Безкоштовно'
    },
    {
      id: 6,
      title: 'Створення мобільних додатків з React Native',
      description: 'Розробляйте кросплатформні мобільні додатки для iOS та Android з одним кодом.',
      type: 'video',
      category: 'development',
      duration: '20 годин',
      lessons: 72,
      rating: 4.8,
      students: 634,
      level: 'Середній',
      author: 'Віктор Бондаренко',
      thumbnail: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React Native', 'Mobile', 'iOS', 'Android'],
      free: false,
      price: '$89'
    }
  ];

  const filteredMaterials = materials.filter(material => 
    selectedCategory === 'all' || material.category === selectedCategory
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'article':
        return FileText;
      default:
        return BookOpen;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Початківець':
        return 'bg-green-100 text-green-800';
      case 'Середній':
        return 'bg-yellow-100 text-yellow-800';
      case 'Просунутий':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Навчальні{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              матеріали
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Безкоштовні та платні курси, статті та гайди для розвитку ваших навичок
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-gray-600">Курсів та матеріалів</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-600">Безкоштовних ресурсів</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">10k+</div>
              <div className="text-gray-600">Студентів навчається</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">4.8</div>
              <div className="text-gray-600">Середній рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
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
                      ? 'bg-blue-600 text-white shadow-lg'
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

      {/* Materials Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredMaterials.length} матеріалів знайдено
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map(material => {
              const TypeIcon = getTypeIcon(material.type);
              
              return (
                <div key={material.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={material.thumbnail} 
                      alt={material.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(material.level)}`}>
                        {material.level}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <TypeIcon className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                    {material.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        material.free ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {material.price}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {material.rating}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {material.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {material.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {material.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {material.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {material.students}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        {material.author}
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        {material.free ? 'Почати' : 'Купити'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Рекомендовані курси
            </h2>
            <p className="text-xl text-gray-600">
              Найпопулярніші матеріали серед наших користувачів
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Швидкий старт у веб-розробці</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Комплексний курс для тих, хто хоче швидко увійти в IT. 
                HTML, CSS, JavaScript, React та перший проект в портфоліо.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="flex items-center mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    25 годин • 89 уроків
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    2,340 студентів
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Детальніше
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Від ідеї до готового продукту</h3>
              </div>
              <p className="text-green-100 mb-6">
                Навчіться створювати повноцінні проекти від концепції до деплою. 
                Включає дизайн, розробку, тестування та запуск.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="flex items-center mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    18 годин • 67 уроків
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    1,890 студентів
                  </div>
                </div>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Детальніше
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові почати навчання?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Приєднуйтесь до тисяч студентів, які вже розвивають свої навички
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Переглянути всі курси
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningMaterialsPage;