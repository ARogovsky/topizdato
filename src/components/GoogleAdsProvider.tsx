import React, { useEffect } from 'react';
import { initGoogleAds } from '../utils/gtag';

interface GoogleAdsProviderProps {
  children: React.ReactNode;
}

const GoogleAdsProvider: React.FC<GoogleAdsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Инициализируем Google Ads при загрузке компонента
    initGoogleAds();
  }, []);

  return <>{children}</>;
};

export default GoogleAdsProvider; 