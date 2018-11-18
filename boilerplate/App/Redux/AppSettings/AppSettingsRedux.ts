import {colorScheme} from "../../Themes/Colors";
import I18n from "../../I18n/index";
import { REHYDRATE } from 'redux-persist';
import Immutable from "seamless-immutable";
import {Reducer} from "redux";
import {AppSettingsState} from "./Types";

const DEFAULT_LOCALE = 'en';

export const INITIAL_STATE = Immutable({
  isDarkMode:false,
  locale: DEFAULT_LOCALE,
  isRtl:isRtlLocale(DEFAULT_LOCALE),
  colorScheme:colorScheme(false)
});


export const reducer : Reducer<AppSettingsState> = (state:AppSettingsState=INITIAL_STATE, action) => {

  switch (action.type) {
    case 'toggle_dark_mode':
      return {...state,isDarkMode:!state.isDarkMode,colorScheme:colorScheme(!state.isDarkMode)};
    case 'toggle_direction':
      return {...state,isRtl:!state.isRtl};
    case 'select_locale':
      I18n.locale=action.payload;
      return {...state,
        locale:action.payload,
        isRtl:isRtlLocale(action.payload)
      };
   case REHYDRATE:
     I18n.locale = action.payload.appSettings.locale;
     return {...state,...action.payload.appSettings};
   default:
     I18n.locale = state.locale;
      return {...state};
  }
};

function isRtlLocale (locale) {
  const rtlLocales = ['fa','ar'];
  return !!rtlLocales.includes(locale);
}
