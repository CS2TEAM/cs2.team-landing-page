export const getApiUrl = (): string => {
  const env = import.meta.env.VITE_ENV;

  switch (env) {
    case "production":
      return import.meta.env.VITE_API_URL_PROD;
    case "staging":
      return import.meta.env.VITE_API_URL_STAGING;
    case "development":
    default:
      return import.meta.env.VITE_API_URL_DEV;
  }
};
