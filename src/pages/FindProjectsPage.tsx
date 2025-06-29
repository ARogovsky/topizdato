import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Star,
  ArrowRight,
  Briefcase,
  Code,
  Palette,
  Smartphone,
  Globe,
  ShoppingCart
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FindProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  const categories = [
    { id: 'all', name: 'Всі проекти', icon: Briefcase },
    { id: 'web', name: 'Веб-розробка', icon: Code },
    { id: 'mobile', name: 'Мобільні додатки', icon: Smartphone },
    { id: 'design', name: 'Дизайн', icon: Palette },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'landing', name: 'Лендінги', icon: Globe }
  ];

  const projects = [
    {
      id: 1,
      title: 'Інтернет-магазин для одягу',
      description: 'Потрібно створити сучасний інтернет-магазин з каталогом товарів, кошиком та системою оплати.',
      budget: '$1500-2500',
      duration: '4-6 тижнів',
      category: 'ecommerce',
      skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: {
        name: 'Fashion Store',
        rating: 4.8,
        location: 'Київ'
      },
      applications: 12,
      posted: '2 дні тому'
    },
    {
      id: 2,
      title: 'Мобільний додаток для доставки їжі',
      description: 'Розробка мобільного додатку для замовлення їжі з геолокацією та push-повідомленнями.',
      budget: '$2000-3500',
      duration: '6-8 тижнів',
      category: 'mobile',
      skills: ['React Native', 'Firebase', 'Google Maps API'],
      client: {
        name: 'FoodDelivery',
        rating: 4.9,
        location: 'Львів'
      },
      applications: 8,
      posted: '1 день тому'
    },
    {
      id: 3,
      title: 'Редизайн корпоративного сайту',
      description: 'Потрібен сучасний дизайн та верстка для корпоративного сайту IT-компанії.',
      budget: '$800-1200',
      duration: '2-3 тижні',
      category: 'design',
      skills: ['Figma', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
      client: {
        name: 'TechCorp',
        rating: 4.7,
        location: 'Дніпро'
      },
      applications: 15,
      posted: '3 дні тому'
    },
    {
      id: 4,
      title: 'Лендінг для стартапу',
      description: 'Створення продающого лендінгу для нового фінтех стартапу з анімаціями.',
      budget: '$500-800',
      duration: '1-2 тижні',
      category: 'landing',
      skills: ['HTML/CSS', 'JavaScript', 'GSAP', 'Figma'],
      client: {
        name: 'FinTech Startup',
        rating: 5.0,
        location: 'Харків'
      },
      applications: 20,
      posted: '5 днів тому'
    },
    {
      id: 5,
      title: 'CRM система для малого бізнесу',
      description: 'Розробка простої CRM системи для управління клієнтами та продажами.',
      budget: '$1200-2000',
      duration: '3-5 тижнів',
      category: 'web',
      skills: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      client: {
        name: 'SmallBiz Solutions',
        rating: 4.6,
        location: 'Одеса'
      },
      applications: 10,
      posted: '1 тиждень тому'
    },
    {
      id: 6,
      title: 'Мобільний додаток для фітнесу',
      description: 'Додаток для відстеження тренувань з можливістю створення власних програм.',
      budget: '$1800-2800',
      duration: '5-7 тижнів',
      category: 'mobile',
      skills: ['Flutter', 'Firebase', 'Health APIs'],
      client: {
        name: 'FitLife',
        rating: 4.8,
        location: 'Запоріжжя'
      },
      applications: 6,
      posted: '4 дні тому'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Знайдіть{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ідеальний проект
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Сотні цікавих проектів від реального бізнесу чекають на вашу команду
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Пошук проектів..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Budget Filter */}
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Всі бюджети</option>
              <option value="500-1000">$500-1000</option>
              <option value="1000-2000">$1000-2000</option>
              <option value="2000-3000">$2000-3000</option>
              <option value="3000+">$3000+</option>
            </select>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Знайдено {filteredProjects.length} проектів
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map(project => {
              const CategoryIcon = categories.find(c => c.id === project.category)?.icon || Briefcase;
              
              return (
                <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <CategoryIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.client.location}
                          <Star className="w-4 h-4 ml-3 mr-1 text-yellow-400 fill-current" />
                          {project.client.rating}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{project.posted}</span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {project.budget}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.applications} заявок
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Клієнт: <span className="font-semibold">{project.client.name}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      Подати заявку
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Проекти не знайдено</h3>
              <p className="text-gray-600">Спробуйте змінити параметри пошуку</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Не знайшли підходящий проект?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Створіть команду та чекайте на нові цікаві пропозиції
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Створити команду
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindProjectsPage;