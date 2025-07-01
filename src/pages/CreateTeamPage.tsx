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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const roles = [
    { id: 'developer', name: 'Технічна', icon: Code, color: 'blue' },
    { id: 'designer', name: 'Креативна', icon: Palette, color: 'purple' },
    { id: 'pm', name: 'Менеджмент', icon: Briefcase, color: 'green' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!selectedRole) {
      newErrors.role = 'Будь ласка, оберіть роль';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Ім\'я та прізвище обов\'язкові';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email обов\'язковий';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введіть коректний email';
    }
    if (!formData.about.trim()) {
      newErrors.about = 'Розкажіть про себе';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', { role: selectedRole, ...formData });
    }
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
            Об'єднайтеся у команду, працюйте над реальними проектами 
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Справжні гроші</h3>
              <p className="text-gray-600">Досить витрачати час на марні пет-проекти, краще почніть заробляти зараз</p>
            </div>
            <div className="text-center p-6">
              <IconCircle 
                icon={<Award className="w-8 h-8" />}
                bgColor="bg-purple-100"
                textColor="text-purple-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Корисні навички</h3>
              <p className="text-gray-600">Комерційний досвід, продуктове бачення, тайм менеджмент та все інше</p>
            </div>
            <div className="text-center p-6">
              <IconCircle 
                icon={<Users className="w-8 h-8" />}
                bgColor="bg-green-100"
                textColor="text-green-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Швидке зростання</h3>
              <p className="text-gray-600">Ви не закриваєте таски, а вирішуєте реальні проблеми бізнесу та росте професійно</p>
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
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Role Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Оберіть свою роль *
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
                        onClick={() => {
                          setSelectedRole(role.id);
                          if (errors.role) {
                            setErrors(prev => ({ ...prev, role: '' }));
                          }
                        }}
                      >
                        <Icon className={`w-8 h-8 text-${role.color}-600 mb-3`} />
                        <h3 className="font-semibold text-gray-900">{role.name}</h3>
                      </div>
                    );
                  })}
                </div>
                {errors.role && (
                  <p className="text-red-500 text-sm mt-2">{errors.role}</p>
                )}
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ім'я та прізвище *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Введіть ваше ім'я"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* About */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Розкажіть про себе *
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.about ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Опишіть свій досвід, мотивацію та що ви можете принести в команду..."
                />
                {errors.about && (
                  <p className="text-red-500 text-sm mt-1">{errors.about}</p>
                )}
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