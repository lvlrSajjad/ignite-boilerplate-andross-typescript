import AppNavigation from "../Navigation/AppNavigation";
import { NavigationActions } from 'react-navigation';

export const reducer = (state, action) => {
  let newState;
  console.log(action.type);

  switch (action.type) {
    case 'LoginScreen':
      newState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'LoginScreen',
        }),
        state
      );
      break;
    // case 'ChatScreen':
    //   newState = AppNavigation.router.getStateForAction(
    //     NavigationActions.navigate({
    //       routeName: 'ChatScreen',
    //       params:{isDarkMode:action.payload}
    //     }),
    //     state
    //   );
    //   break;
    default :
      newState = AppNavigation.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};
