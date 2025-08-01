// Outbound Link Tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Отслеживание клика по внешней ссылке
export const trackOutboundLink = (url: string, linkText?: string) => {
  if (typeof window.gtag === 'function') {
    // Отправляем в оба трекера
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      link_text: linkText,
      outbound: true,
      value: 1
    });
  }
};

// Специальное отслеживание для Telegram
export const trackTelegramClick = (linkText?: string) => {
  if (typeof window.gtag === 'function') {
    // Отправляем в Google Ads для конверсий
    window.gtag('event', 'outbound_click', {
      event_category: 'outbound',
      event_label: 'telegram_click',
      link_text: linkText,
      value: 1
    });

    // Отправляем в GA4 для аналитики
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: 'telegram',
      link_text: linkText,
      outbound: true
    });
  }
};

// Отслеживание для других социальных сетей
export const trackSocialClick = (platform: string, linkText?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'social_click', {
      event_category: 'social',
      event_label: platform,
      link_text: linkText,
      value: 1
    });
  }
};

// Автоматическое отслеживание всех внешних ссылок
export const initOutboundTracking = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Проверяем, что это внешняя ссылка
    const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
    if (!isExternal) return;
    
    const linkText = link.textContent?.trim() || '';
    
    // Специальное отслеживание для Telegram
    if (href.includes('t.me') || href.includes('telegram.me')) {
      trackTelegramClick(linkText);
      return;
    }
    
    // Отслеживание других внешних ссылок
    trackOutboundLink(href, linkText);
  });
};

// Удобные функции для конкретных платформ
export const trackWhatsAppClick = (linkText?: string) => {
  trackSocialClick('whatsapp', linkText);
};

export const trackEmailClick = (linkText?: string) => {
  trackSocialClick('email', linkText);
};

export const trackPhoneClick = (linkText?: string) => {
  trackSocialClick('phone', linkText);
}; 