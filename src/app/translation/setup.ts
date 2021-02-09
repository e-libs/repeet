import { Platform, NativeModules } from 'react-native';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import resources from 'app/translation/languages';

const deviceLanguage: string = (Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  : NativeModules.I18nManager?.localeIdentifier || 'en'
).slice(0, 2);

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
