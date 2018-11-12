import {MainNav} from "../../Navigation/AppNavigation";
import { NavigationActions } from 'react-navigation';

export const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'ChatScreen':
      newState = MainNav.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'ChatScreen',
          params:{isDarkMode:action.payload}
        }),
        state
      );
      break;
    default :
      newState = MainNav.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};
