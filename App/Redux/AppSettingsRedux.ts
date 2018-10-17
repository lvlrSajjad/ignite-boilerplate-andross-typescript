import {colorScheme} from "../Themes/Colors";

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
        isLtr:!isRtlLocale('fa'),
        colorScheme:colorScheme(false),
        local: 'fa'
      };
  }
};

function isRtlLocale (locale) {
  const rtlLocales = ['fa','ar'];
  return !!rtlLocales.includes(locale);
}
