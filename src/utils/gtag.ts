// Google Ads Conversion Tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GOOGLE_ADS_ID = 'AW-11390978942';
const GA4_ID = 'G-X8SM5S50QZ';

// Инициализация Google Analytics (GA4 + Google Ads)
export const initGoogleAds = () => {
  // Проверяем, не загружен ли уже скрипт
  if (typeof window.gtag === 'function') {
    return;
  }

  // Создаем скрипт gtag для GA4
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script1);

  // Инициализируем dataLayer и gtag функцию
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Конфигурируем оба трекера
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID);          // GA4 для аналитики
  window.gtag('config', GOOGLE_ADS_ID);   // Google Ads для конверсий
};

// Отправка конверсии в Google Ads и событий в GA4
export const sendConversion = (conversionId: string, conversionLabel: string, value?: number) => {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized');
    return;
  }

  // Отправляем конверсию в Google Ads
  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${conversionId}/${conversionLabel}`,
    value: value,
    currency: 'USD'
  });

  // Отправляем событие в GA4
  window.gtag('event', conversionLabel, {
    event_category: 'conversion',
    value: value,
    currency: 'USD'
  });
};

// Предустановленные конверсии
export const CONVERSIONS = {
  // Регистрация команды
  TEAM_REGISTRATION: {
    id: 'TEAM_REGISTRATION',
    label: 'team_registration'
  },
  
  // Публикация проекта
  PROJECT_PUBLISH: {
    id: 'PROJECT_PUBLISH', 
    label: 'project_publish'
  },
  
  // Контакт с клиентом
  CONTACT_FORM: {
    id: 'CONTACT_FORM',
    label: 'contact_form'
  },
  
  // Партнерство с университетом
  EDUCATION_PARTNERSHIP: {
    id: 'EDUCATION_PARTNERSHIP',
    label: 'education_partnership'
  },
  
  // Переход на страницу цен
  PRICING_PAGE: {
    id: 'PRICING_PAGE',
    label: 'pricing_page'
  },
  
  // Страница благодарности
  THANK_YOU_PAGE: {
    id: 'THANK_YOU_PAGE',
    label: 'thank_you_page'
  }
};

// Удобные функции для отправки конверсий
export const trackTeamRegistration = (value?: number) => {
  sendConversion(
    CONVERSIONS.TEAM_REGISTRATION.id,
    CONVERSIONS.TEAM_REGISTRATION.label,
    value
  );
};

export const trackProjectPublish = (value?: number) => {
  sendConversion(
    CONVERSIONS.PROJECT_PUBLISH.id,
    CONVERSIONS.PROJECT_PUBLISH.label,
    value
  );
};

export const trackContactForm = (value?: number) => {
  sendConversion(
    CONVERSIONS.CONTACT_FORM.id,
    CONVERSIONS.CONTACT_FORM.label,
    value
  );
};

export const trackEducationPartnership = (value?: number) => {
  sendConversion(
    CONVERSIONS.EDUCATION_PARTNERSHIP.id,
    CONVERSIONS.EDUCATION_PARTNERSHIP.label,
    value
  );
};

export const trackPricingPage = (value?: number) => {
  sendConversion(
    CONVERSIONS.PRICING_PAGE.id,
    CONVERSIONS.PRICING_PAGE.label,
    value
  );
};

export const trackThankYouPage = (value?: number) => {
  sendConversion(
    CONVERSIONS.THANK_YOU_PAGE.id,
    CONVERSIONS.THANK_YOU_PAGE.label,
    value
  );
}; 