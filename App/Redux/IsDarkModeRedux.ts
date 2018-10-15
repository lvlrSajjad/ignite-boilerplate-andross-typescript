
export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_dark_mode':
      return {...state,isDarkMode:!state.isDarkMode};
    default:
      return {...state,isDarkMode:false};
  }
};
