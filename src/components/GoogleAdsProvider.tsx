import React, { useEffect } from 'react';
import { initGoogleAds } from '../utils/gtag';
import { initOutboundTracking } from '../utils/outboundTracking';

interface GoogleAdsProviderProps {
  children: React.ReactNode;
}

const GoogleAdsProvider: React.FC<GoogleAdsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Инициализируем Google Ads при загрузке компонента
    initGoogleAds();
    
    // Инициализируем отслеживание внешних ссылок
    initOutboundTracking();
  }, []);

  return <>{children}</>;
};

export default GoogleAdsProvider; 