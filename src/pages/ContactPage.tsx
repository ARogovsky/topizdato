import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Briefcase,
  HelpCircle,
  CheckCircle,
  Star
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IconCircle from '../components/IconCircle';
import { getRedirectUrl } from '../utils/domainUtils';
import { trackContactForm } from '../utils/gtag';
import { trackTelegramClick } from '../utils/outboundTracking';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [ofertaAccepted, setOfertaAccepted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    setRedirectUrl(getRedirectUrl('/thank-you'));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted || !ofertaAccepted) {
      alert('Будь ласка, прийміть умови політики конфіденційності та договору оферти');
      return;
    }
    
    // Отправляем конверсию Google Analytics
    trackContactForm();
    
    // Даем время Google Analytics отправить событие, затем отправляем форму
    setTimeout(() => {
      const form = e.target as HTMLFormElement;
      // Временно убираем onSubmit чтобы избежать повторного вызова
      const originalOnSubmit = form.onsubmit;
      form.onsubmit = null;
      form.submit();
    }, 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactTypes = [
    { id: 'general', name: 'Загальні питання', icon: HelpCircle },
    { id: 'developer', name: 'Для розробників', icon: Users },
    { id: 'business', name: 'Для бізнесу', icon: Briefcase },
    { id: 'support', name: 'Технічна підтримка', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Зв'яжіться{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              з нами
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ми завжди готові відповісти на ваші запитання та допомогти
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <IconCircle 
                icon={<Mail className="w-8 h-8" />}
                bgColor="bg-blue-100"
                textColor="text-blue-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">admin@topizda.to</p>
              <p className="text-sm text-gray-500">Відповідь протягом 24 годин</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <IconCircle 
                icon={<Phone className="w-8 h-8" />}
                bgColor="bg-green-100"
                textColor="text-green-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600 mb-2">+380 44 123 45 67</p>
              <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <IconCircle 
                icon={<MessageCircle className="w-8 h-8" />}
                bgColor="bg-purple-100"
                textColor="text-purple-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telegram</h3>
              <a 
                href="https://t.me/topizdato" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackTelegramClick('Telegram контакт')}
                className="text-gray-600 mb-2 hover:text-purple-600 transition-colors"
              >
                @topizdato
              </a>
              <p className="text-sm text-gray-500">Миттєва підтримка</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <IconCircle 
                icon={<MapPin className="w-8 h-8" />}
                bgColor="bg-orange-100"
                textColor="text-orange-600"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Адреса</h3>
              <p className="text-gray-600 mb-2">м. Київ, вул. Хрещатик, 1</p>
              <p className="text-sm text-gray-500">Офіс 501</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Напишіть нам
              </h2>
              <p className="text-xl text-gray-600">
                Заповніть форму і ми зв'яжемося з вами найближчим часом
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <IconCircle 
                  icon={<CheckCircle className="w-8 h-8" />}
                  bgColor="bg-green-100"
                  textColor="text-green-600"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Дякуємо за звернення!</h3>
                <p className="text-gray-600">Ми отримали ваше повідомлення і зв'яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="access_key" value="f7722820-f1f5-48bf-affb-e762b4d93a77" />
                <input type="hidden" name="redirect" value={redirectUrl} />
                {/* Contact Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Тип звернення
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contactTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <label
                          key={type.id}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.type === type.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={type.id}
                            checked={formData.type === type.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Icon className={`w-5 h-5 mr-3 ${
                            formData.type === type.id ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                          <span className={`font-medium ${
                            formData.type === type.id ? 'text-blue-900' : 'text-gray-700'
                          }`}>
                            {type.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
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
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Введіть ваше ім'я"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема повідомлення *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Коротко опишіть суть питання"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Повідомлення *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Детально опишіть ваше питання або пропозицію..."
                  />
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
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                      Я приймаю{' '}
                      <a href="/terms" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
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
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                    <label htmlFor="oferta" className="ml-2 text-sm text-gray-700">
                      Я приймаю умови{' '}
                      <a href="/oferta" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        договору оферти
                      </a>{' '}
                      та згоден з правилами використання сервісу *
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Відправити повідомлення
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Графік роботи
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Служба підтримки</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Понеділок - П'ятниця</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Субота</span>
                  <span className="font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Неділя</span>
                  <span className="font-semibold">Вихідний</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Онлайн чат</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Доступність</span>
                  <span className="font-semibold text-green-600">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Середній час відповіді</span>
                  <span className="font-semibold">5 хвилин</span>
                </div>
                <div className="flex justify-between">
                  <span>Мови</span>
                  <span className="font-semibold">UA, EN, RU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Можливо, ваше питання вже має відповідь?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Перегляньте наш центр допомоги з найпопулярнішими запитаннями
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Переглянути FAQ
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;