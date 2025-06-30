import React, { useState } from 'react';
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
  Plus,
  X
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IconCircle from '../components/IconCircle';
import TestimonialCard from '../components/TestimonialCard';

const CreateTeamPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const roles = [
    { id: 'developer', name: 'Розробник', icon: Code, color: 'blue' },
    { id: 'designer', name: 'Дизайнер', icon: Palette, color: 'purple' },
    { id: 'pm', name: 'Проект-менеджер', icon: Briefcase, color: 'green' }
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Створіть свою{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              команду мрії
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Об'єднайтеся з іншими талантами, працюйте над реальними проектами 
            та заробляйте гроші разом
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <IconCircle 
                icon={<DollarSign className="w-8 h-8" />}
                bgColor="bg-blue-100"
                textColor="text-blue-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Стабільний дохід</h3>
              <p className="text-gray-600">$500-2000 з проекту для кожного учасника команди</p>
            </div>
            <div className="text-center p-6">
              <IconCircle 
                icon={<Award className="w-8 h-8" />}
                bgColor="bg-purple-100"
                textColor="text-purple-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Реальний досвід</h3>
              <p className="text-gray-600">Працюйте над справжніми проектами для бізнесу</p>
            </div>
            <div className="text-center p-6">
              <IconCircle 
                icon={<Users className="w-8 h-8" />}
                bgColor="bg-green-100"
                textColor="text-green-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Командна робота</h3>
              <p className="text-gray-600">Навчіться працювати в професійній команді</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Creation Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Створити команду
            </h2>
            
            <form className="space-y-8">
              {/* Role Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Оберіть свою роль
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <div
                        key={role.id}
                        className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                          selectedRole === role.id
                            ? `border-${role.color}-500 bg-${role.color}-50`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedRole(role.id)}
                      >
                        <Icon className={`w-8 h-8 text-${role.color}-600 mb-3`} />
                        <h3 className="font-semibold text-gray-900">{role.name}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ім'я та прізвище
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Навички та технології
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Наприклад: React, Figma, Scrum"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-blue-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Досвід роботи
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Оберіть рівень досвіду</option>
                  <option value="beginner">Початківець (0-1 рік)</option>
                  <option value="junior">Junior (1-2 роки)</option>
                  <option value="middle">Middle (2-4 роки)</option>
                  <option value="senior">Senior (4+ років)</option>
                </select>
              </div>

              {/* Portfolio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Посилання на портфоліо (необов'язково)
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://your-portfolio.com"
                />
              </div>

              {/* About */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Розкажіть про себе
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Опишіть свій досвід, мотивацію та що ви можете принести в команду..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Створити профіль та приєднатися
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Історії успіху наших команд
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard preset="team" variant="gray" />
            <TestimonialCard 
              preset="team" 
              variant="gray"
              quote="Працювали над мобільним додатком для стартапу. Клієнт був в захваті, а ми заробили по $2000!"
              author="Команда 'MobileDev'"
              position="Мобільний додаток"
            />
            <TestimonialCard 
              preset="team" 
              variant="gray"
              quote="Створили брендинг та лендінг для IT-компанії. Тепер маємо постійного клієнта!"
              author="Команда 'DesignPro'"
              position="Брендинг проект"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreateTeamPage;