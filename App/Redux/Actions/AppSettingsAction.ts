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

export const selectLocal = (local:string) => {
  return {
    type: 'select_local',
    payload:local
  };
};
