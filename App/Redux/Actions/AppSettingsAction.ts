export const toggleDarkMode = () => {
  return {
    type: 'toggle_dark_mode'
  };
};

export const toggleDirection = () => {
  return {
    type: 'toggle_direction'
  };
};

export const selectLocale = (locale:string) => {
  return {
    type: 'select_locale',
    payload:locale
  };
};
