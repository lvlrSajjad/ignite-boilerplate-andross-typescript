import {ColorScheme} from "../../Themes/Colors";

export interface AppSettingsState {
  isDarkMode:boolean,
  locale: string,
  isLtr:boolean,
  colorScheme:ColorScheme
}
