import {ColorScheme} from "../../Themes/Colors";

export interface AppSettingsState {
  isDarkMode:boolean,
  locale: string,
  isRtl:boolean,
  colorScheme:ColorScheme
}
