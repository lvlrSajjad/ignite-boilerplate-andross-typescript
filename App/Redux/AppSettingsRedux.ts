import {colorScheme} from "../Themes/Colors";
import I18n from "react-native-i18n";

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_dark_mode':
      return {...state,isDarkMode:!state.isDarkMode,colorScheme:colorScheme(!state.isDarkMode)};
    case 'toggle_direction':
      return {...state,isLtr:!state.isLtr};
    case 'select_local':
      return {...state,local:action.payload};
    default:
      return {...state,
        isDarkMode:false,
        isLtr:!isRtlLocale(),
        colorScheme:colorScheme(false),
        local: 'en'
      };
  }
};

function isRtlLocale () {
  const rtlLocales = ['fa','ar'];
  let locale = I18n.locale.substr(0, 2);
  return !!rtlLocales.includes(locale);

}
