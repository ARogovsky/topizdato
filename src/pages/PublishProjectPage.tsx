import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  Users, 
  FileText, 
  Upload,
  Plus,
  X,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Star
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRedirectUrl } from '../utils/domainUtils';
import { trackProjectPublish } from '../utils/gtag';

const PublishProjectPage = () => {
  const [projectType, setProjectType] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [files, setFiles] = useState<string[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [ofertaAccepted, setOfertaAccepted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    setRedirectUrl(getRedirectUrl('/thank-you'));
  }, []);

  const projectTypes = [
    { id: 'web', name: 'Веб-сайт', description: 'Корпоративний сайт, лендінг, портфоліо' },
    { id: 'ecommerce', name: 'Інтернет-магазин', description: 'E-commerce платформа з каталогом та оплатою' },
    { id: 'mobile', name: 'Мобільний додаток', description: 'iOS/Android додаток' },
    { id: 'design', name: 'Дизайн', description: 'Логотип, брендинг, UI/UX дизайн' },
    { id: 'crm', name: 'CRM/ERP система', description: 'Система управління бізнесом' },
    { id: 'other', name: 'Інше', description: 'Опишіть ваш проект детальніше' }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted || !ofertaAccepted) {
      alert('Будь ласка, прийміть умови політики конфіденційності та договору оферти');
      return;
    }
    
    // Отправляем конверсию Google Analytics
    trackProjectPublish();
    
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
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Опублікуйте свій{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              проект
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Отримайте якісне рішення у 10 разів дешевше за ринкові ціни
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Економія до 90%</h3>
              <p className="text-gray-600">Платіть у 10 разів менше ніж в аутсорс студіях</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Швидкі терміни</h3>
              <p className="text-gray-600">Мотивовані команди працюють швидше</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантія якості</h3>
              <p className="text-gray-600">Результат або повернення коштів</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Порівняння цін
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-red-50">
                <h3 className="text-2xl font-bold text-red-800 mb-6">Аутсорс студії</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Простий лендінг</span>
                    <span className="font-bold">$3,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Корпоративний сайт</span>
                    <span className="font-bold">$8,000-15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Інтернет-магазин</span>
                    <span className="font-bold">$15,000-30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Мобільний додаток</span>
                    <span className="font-bold">$25,000-50,000</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-green-50">
                <h3 className="text-2xl font-bold text-green-800 mb-6">ТОП ІЗДАТО</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Простий лендінг</span>
                    <span className="font-bold text-green-600">$300-500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Корпоративний сайт</span>
                    <span className="font-bold text-green-600">$800-1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Інтернет-магазин</span>
                    <span className="font-bold text-green-600">$1,500-3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Мобільний додаток</span>
                    <span className="font-bold text-green-600">$2,500-5,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
              <div className="text-3xl font-bold">Економія до 90%</div>
              <div className="text-green-100">Без втрати якості</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Опублікувати проект
            </h2>
            
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="f7722820-f1f5-48bf-affb-e762b4d93a77" />
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="subject" value="Новий проект для розробки" />
              <input type="hidden" name="project_type" value={projectType} />
              <input type="hidden" name="required_skills" value={skills.join(', ')} />
              {/* Project Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Тип проекту
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        projectType === type.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setProjectType(type.id)}
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Назва проекту
                  </label>
                  <input
                    type="text"
                    name="project_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Наприклад: Інтернет-магазин одягу"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Компанія
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Назва вашої компанії"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Опис проекту
                </label>
                <textarea
                  name="description"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Детально опишіть що потрібно зробити, які функції повинні бути, цільову аудиторію..."
                />
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Бюджет ($)
                  </label>
                  <select name="budget" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Оберіть бюджет</option>
                    <option value="500-1000">$500-1,000</option>
                    <option value="1000-2500">$1,000-2,500</option>
                    <option value="2500-5000">$2,500-5,000</option>
                    <option value="5000-10000">$5,000-10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Терміни виконання
                  </label>
                  <select name="timeline" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Оберіть терміни</option>
                    <option value="1-2">1-2 тижні</option>
                    <option value="2-4">2-4 тижні</option>
                    <option value="1-2-months">1-2 місяці</option>
                    <option value="2-3-months">2-3 місяці</option>
                    <option value="3+months">3+ місяці</option>
                  </select>
                </div>
              </div>

              {/* Required Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Необхідні навички та технології
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Наприклад: React, Figma, Node.js"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-green-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email для зв'язку
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон (необов'язково)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Додаткові файли (технічне завдання, макети, приклади)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Перетягніть файли сюди або натисніть для вибору</p>
                  <p className="text-sm text-gray-500">PDF, DOC, PNG, JPG до 10MB</p>
                  <button
                    type="button"
                    className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Вибрати файли
                  </button>
                </div>
              </div>

              {/* Privacy Policy and Oferta Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                    Я приймаю{' '}
                    <a href="/terms" target="_blank" className="text-green-600 hover:text-green-800 underline">
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
                    checked={ofertaAccepted}
                    onChange={(e) => setOfertaAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="oferta" className="ml-2 text-sm text-gray-700">
                    Я приймаю умови{' '}
                    <a href="/oferta" target="_blank" className="text-green-600 hover:text-green-800 underline">
                      договору оферти
                    </a>{' '}
                    та згоден з правилами використання сервісу *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Опублікувати проект
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Успішні проекти наших клієнтів
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Команда створила чудовий інтернет-магазин за $1,200. 
                В студії це коштувало б $15,000!"
              </p>
              <div className="text-sm text-gray-600">
                Марія К. • Fashion Store
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Мобільний додаток готовий за 6 тижнів. 
                Якість на рівні, ціна в 8 разів менша!"
              </p>
              <div className="text-sm text-gray-600">
                Олексій П. • Tech Startup
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Корпоративний сайт з CRM за $900. 
                Тепер постійно працюємо з цією командою!"
              </p>
              <div className="text-sm text-gray-600">
                Андрій С. • Business Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublishProjectPage;