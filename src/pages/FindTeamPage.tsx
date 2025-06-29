import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Users, 
  Code, 
  Palette, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  DollarSign,
  Eye
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FindTeamPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const specialties = [
    { id: 'all', name: 'Всі спеціальності', icon: Users },
    { id: 'fullstack', name: 'Full-stack розробка', icon: Code },
    { id: 'frontend', name: 'Frontend розробка', icon: Code },
    { id: 'backend', name: 'Backend розробка', icon: Code },
    { id: 'mobile', name: 'Мобільна розробка', icon: Code },
    { id: 'design', name: 'UI/UX дизайн', icon: Palette },
    { id: 'management', name: 'Проект-менеджмент', icon: Briefcase }
  ];

  const teams = [
    {
      id: 1,
      name: 'WebCrafters',
      specialty: 'fullstack',
      members: [
        { name: 'Олексій', role: 'Frontend Developer', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Марія', role: 'UI/UX Designer', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Дмитро', role: 'Backend Developer', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      rating: 4.9,
      completedProjects: 12,
      location: 'Київ',
      hourlyRate: '$15-25',
      skills: ['React', 'Node.js', 'MongoDB', 'Figma', 'TypeScript'],
      description: 'Досвідчена команда full-stack розробників, що спеціалізується на створенні сучасних веб-додатків та e-commerce рішень.',
      portfolio: [
        'E-commerce платформа для Fashion Store',
        'CRM система для малого бізнесу',
        'Корпоративний сайт для IT компанії'
      ],
      availability: 'Доступна зараз',
      responseTime: '2 години'
    },
    {
      id: 2,
      name: 'MobileDev Pro',
      specialty: 'mobile',
      members: [
        { name: 'Андрій', role: 'React Native Developer', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Ольга', role: 'Mobile UI Designer', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Віктор', role: 'QA Engineer', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      rating: 4.8,
      completedProjects: 8,
      location: 'Львів',
      hourlyRate: '$20-30',
      skills: ['React Native', 'Flutter', 'Firebase', 'iOS', 'Android'],
      description: 'Команда мобільних розробників з досвідом створення додатків для iOS та Android. Спеціалізуємося на кросплатформній розробці.',
      portfolio: [
        'Додаток для доставки їжі',
        'Фітнес трекер з AI',
        'Банківський мобільний додаток'
      ],
      availability: 'Доступна з 15 січня',
      responseTime: '4 години'
    },
    {
      id: 3,
      name: 'DesignStudio',
      specialty: 'design',
      members: [
        { name: 'Катерина', role: 'Lead Designer', avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Максим', role: 'UX Researcher', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      rating: 4.7,
      completedProjects: 15,
      location: 'Дніпро',
      hourlyRate: '$12-20',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      description: 'Креативна команда дизайнерів, що створює сучасні та функціональні інтерфейси для веб та мобільних додатків.',
      portfolio: [
        'Редизайн e-commerce платформи',
        'Мобільний додаток для стартапу',
        'Корпоративна айдентика для FinTech'
      ],
      availability: 'Доступна зараз',
      responseTime: '1 година'
    },
    {
      id: 4,
      name: 'BackendForce',
      specialty: 'backend',
      members: [
        { name: 'Сергій', role: 'Senior Backend Developer', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Ірина', role: 'DevOps Engineer', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Роман', role: 'Database Architect', avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      rating: 4.9,
      completedProjects: 10,
      location: 'Харків',
      hourlyRate: '$18-28',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
      description: 'Команда backend розробників з глибокими знаннями архітектури та досвідом роботи з високонавантаженими системами.',
      portfolio: [
        'API для фінтех платформи',
        'Мікросервісна архітектура для e-commerce',
        'Система аналітики для SaaS продукту'
      ],
      availability: 'Доступна з 20 січня',
      responseTime: '3 години'
    },
    {
      id: 5,
      name: 'StartupBuilders',
      specialty: 'fullstack',
      members: [
        { name: 'Юлія', role: 'Project Manager', avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Павло', role: 'Full-stack Developer', avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Анна', role: 'Product Designer', avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      rating: 4.6,
      completedProjects: 6,
      location: 'Одеса',
      hourlyRate: '$14-22',
      skills: ['Vue.js', 'Laravel', 'MySQL', 'Sketch', 'Agile'],
      description: 'Молода та енергійна команда, що спеціалізується на швидкому створенні MVP та стартап проектів.',
      portfolio: [
        'MVP для EdTech стартапу',
        'Платформа для бронювання послуг',
        'Соціальна мережа для спортсменів'
      ],
      availability: 'Доступна зараз',
      responseTime: '30 хвилин'
    },
    {
      id: 6,
      name: 'FrontendMasters',
      specialty: 'frontend',
      members: [
        { name: 'Тарас', role: 'Senior Frontend Developer', avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Оксана', role: 'Frontend Developer', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      rating: 4.8,
      completedProjects: 14,
      location: 'Запоріжжя',
      hourlyRate: '$16-24',
      skills: ['React', 'Vue.js', 'Angular', 'SASS', 'Webpack'],
      description: 'Команда frontend розробників з великим досвідом створення інтерактивних та швидких веб-інтерфейсів.',
      portfolio: [
        'Інтерактивна панель аналітики',
        'Платформа для онлайн навчання',
        'Корпоративний портал для HR'
      ],
      availability: 'Доступна з 10 січня',
      responseTime: '2 години'
    }
  ];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === 'all' || team.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Знайдіть{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ідеальну команду
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Перевірені команди розробників готові втілити ваші ідеї в життя
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
                placeholder="Пошук команд за назвою, навичками..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {specialties.map(specialty => (
                <option key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </select>

            {/* Experience Filter */}
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Всі рівні</option>
              <option value="junior">Junior (1-3 проекти)</option>
              <option value="middle">Middle (4-10 проектів)</option>
              <option value="senior">Senior (10+ проектів)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Знайдено {filteredTeams.length} команд
            </h2>
          </div>

          <div className="space-y-6">
            {filteredTeams.map(team => {
              const SpecialtyIcon = specialties.find(s => s.id === team.specialty)?.icon || Users;
              
              return (
                <div key={team.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Team Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                            <SpecialtyIcon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{team.name}</h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {team.location}
                              <Star className="w-4 h-4 ml-3 mr-1 text-yellow-400 fill-current" />
                              {team.rating}
                              <span className="ml-1">({team.completedProjects} проектів)</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{team.hourlyRate}/год</div>
                          <div className="text-sm text-gray-600">{team.availability}</div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{team.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {team.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Team Members */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Склад команди:</h4>
                        <div className="flex flex-wrap gap-3">
                          {team.members.map((member, index) => (
                            <div key={index} className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                              <img 
                                src={member.avatar} 
                                alt={member.name}
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{member.name}</div>
                                <div className="text-xs text-gray-600">{member.role}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Portfolio */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Останні проекти:</h4>
                        <ul className="space-y-1">
                          {team.portfolio.slice(0, 3).map((project, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Відповідь: {team.responseTime}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {team.completedProjects} завершених проектів
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="lg:w-64 flex flex-col gap-3">
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                        Зв'язатися з командою
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Переглянути портфоліо
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        Зберегти команду
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Команди не знайдено</h3>
              <p className="text-gray-600">Спробуйте змінити параметри пошуку</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові розпочати проект?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Опублікуйте ваш проект та отримайте пропозиції від найкращих команд
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Опублікувати проект
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindTeamPage;