export const getCurrentDomain = (): string => {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return 'https://topizda.to'; // fallback для SSR
};

export const getRedirectUrl = (path: string): string => {
  return `${getCurrentDomain()}${path}`;
}; 