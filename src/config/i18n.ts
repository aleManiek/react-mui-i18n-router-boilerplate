import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { pl, enUS as en } from 'date-fns/locale';
import { isDate, format as formatDate } from 'date-fns';
import { DateFnsOptions } from 'types';

export const DEFAULT_LANGUAGE = 'pl';
export const DEFAULT_NAMESPACE = 'common';

export const dateFnsOptions: Record<string, DateFnsOptions> = {
  pl: {
    locale: { ...pl, options: { ...pl.options } },
  },
  en: {
    locale: { ...en, options: { ...en.options } },
  },
};

const i18nOptions: InitOptions = {
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  defaultNS: DEFAULT_NAMESPACE,
  fallbackNS: DEFAULT_NAMESPACE,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  interpolation: {
    escapeValue: false,
    format: (value, format, lng = DEFAULT_LANGUAGE) => {
      //   if (format === 'daysLeft') {
      //     return differenceInDays(parseISO(value), new Date());
      //   }
      if (isDate(value)) {
        return formatDate(value, format || '');
      }
      return value;
    },
  },
};

const i18n = {
  init: () => i18next.use(initReactI18next).init(i18nOptions),
};

export default i18n;
