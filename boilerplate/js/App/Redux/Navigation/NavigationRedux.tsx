import AppNavigation from "../../Navigation/AppNavigation";
import { NavigationActions } from 'react-navigation';

export const reducer = (state, action) => {
  let newState;

  switch (action.type) {

    case 'ChatScreen':
      newState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'ChatScreen',
          params:{isDarkMode:action.payload}
        }),
        state
      );
      break;
    case 'LaunchScreen':
      newState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'LaunchScreen',
          params:{isDarkMode:action.payload}
        }),
        state
      );
      break;
    default :
      newState = AppNavigation.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};
