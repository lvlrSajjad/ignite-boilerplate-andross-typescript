import {colorScheme} from "../Themes/Colors";
const DEFAULT_LOCALE = 'fa';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_dark_mode':
      return {...state,isDarkMode:!state.isDarkMode,colorScheme:colorScheme(!state.isDarkMode)};
    case 'toggle_direction':
      return {...state,isLtr:!state.isLtr};
    case 'select_local':
      return {...state,local:action.payload,isLtr:!isRtlLocale(action.payload)};
    default:
      return {...state,
        isDarkMode:false,
        local: DEFAULT_LOCALE,
        isLtr:!isRtlLocale(DEFAULT_LOCALE),
        colorScheme:colorScheme(false)
      };
  }
};

function isRtlLocale (locale) {
  const rtlLocales = ['fa','ar'];
  return !!rtlLocales.includes(locale);
}
