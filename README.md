#  Ignite II TypeScript Enehanced
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)
* This Boiler Plate is just my Customized version of ignite Andross 
* Installed And Configed With TypeScript
* Updated React Native To The Lastest Version (0.57.2)
* Also installed :
    ```"autobind-decorator": "^2.1.0",
    "axios": "^0.18.0",
    "format-json": "^1.0.3",
    "identity-obj-proxy": "^3.0.0",
    "lodash": "^4.17.4",
    "moment": "^2.22.2",
    "native-base": "^2.8.0",
    "prop-types": "^15.6.1",
    "querystringify": "1.0.0",
    "ramda": "^0.25.0",
    "react": "16.5.0",
    "react-native": "0.57.2",
    "react-native-animatable": "^1.3.0",
    "react-native-communications": "^2.2.1",
    "react-native-config": "^0.10.0",
    "react-native-firebase": "^5.0.0",
    "react-native-i18n": "1.0.0",
    "react-native-lightbox": "^0.8.0",
    "react-native-material-kit": "^0.5.1",
    "react-native-modalbox": "^1.6.0",
    "react-native-paper": "^2.0.1",
    "react-native-parsed-text": "0.0.20",
    "react-native-vector-icons": "4.3.0",
    "react-navigation": "^2.17.0",
    "react-navigation-material-bottom-tabs": "^0.4.0",
    "react-navigation-redux-helpers": "^2.0.6",
    "react-redux": "^5.0.7",
    "realm": "^2.17.0",
    "redux": "^4.0.0",
    "redux-axios-middleware": "^4.0.0",
    "redux-persist": "5.4.0",
    "redux-saga": "^0.16.0",
    "reduxsauce": "0.7.0",
    "seamless-immutable": "^7.1.4",
    "socket.io": "^2.1.1",
    "socket.io-client": "^2.1.1"
    "enzyme": "^3.6.0",
    "enzyme-adapter-react-16": "^1.5.0",
    "enzyme-to-json": "^3.3.4",
    "eslint": "5.3.0",
    "eslint-config-airbnb": "17.1.0",
    "eslint-plugin-flowtype": "^2.50.3",
    "eslint-plugin-import": "2.14.0",
    "eslint-plugin-jsx-a11y": "6.1.1",
    "eslint-plugin-prettier": "^3.0.0",
    "eslint-plugin-react": "7.11.0",
    "eslint-plugin-react-native": "^3.3.0",
    "jest": "23.6.0",
    "metro-react-native-babel-preset": "0.48.0",
    "mockery": "^2.1.0",
    "react-addons-test-utils": "^15.6.2",
    "react-dom": "^16.5.2",
    "react-native-typescript-transformer": "^1.2.10",
    "react-test-renderer": "16.5.0",
    "reactotron-react-native": "^2.0.0-alpha.3",
    "reactotron-redux": "^2.0.0-alpha.3",
    "reactotron-redux-saga": "^2.0.0-alpha.3",
    "schedule": "^0.4.0",
    "snazzy": "^8.0.0",
    "standard": "10.0.2",
    "ts-jest": "^23.10.3",
    "typescript": "^3.1.1"```
    
    You can see more on package .json
## :fire: Ignite Cli
  
  For Cli Instructions Please refer to ignite boilerplate page :
  
  https://github.com/infinitered/ignite
  
## :black_nib: Changing The Package Name

  You Can Change PackageName And Boundler ID Using this tool
  https://www.npmjs.com/package/react-native-rename
  
  
## :exclamation: Possible Errors
  
   if you've got transform-hmr error on boundle so start your boundler with this command:
   `` react-native start --reset-cache ``
   
## :file_folder: Folders

    Attention : some files and folders are just for example and you can remove them when ever you want
        
    App  < Almost All Functional Files And Codes are in this folder
    
       |Components  < Components like dialogs , bottons , forms , can be in this folder
       
                   |Styles < Style files of this folder
                                      
                   |--tests-- < Test files of folder
                   
                   |MaterialComponents < Some Components that made with material guidlines

       |Config  < Config files folder
       
       |Containers < Our Main Containers Like Login Screen ...
       
                   |MainTabs < Main Tabs (Made For Example) 
                   
                                  |ChatsTabScreens < Chat Tabs (Made For Example)  
                                                     
       |Fixtures < All key API responses are housed here.
       
       |118n  < Localization
                   
       |Images < Holds all images for the applications.     
                         
       |Lib < Components that reusable even outside of the project and in other projects           
                   
       |Navigation  < Navigation Files And Redux Navigation Config 
                   
       |Redux < All Redux Files , Reducers and Actions 
       
                NavigationRedux File is For Routing Between Screens With Redux So You Dont Need Pass Any Props
                 to access outer navigation screens
                   
       |Sagas  <  Redux Saga Files
                   
       |Services < 

       |Themes < Application specific themes
       
       |Transforms < You can do conversions 
                   
                  
## :heart: Recommended Components For Use In The Project

  Map Component
  
  Mapbox installed in the project and linked with android (not ios yet so open for pull requests)
  
  and you can get your token key with instructions inside mapbox github https://github.com/mapbox/react-native-mapbox-gl
  
  then you can use it inside `App>Config>MapboxConfig.tsx`
  
  then use it like :
  
  ```typescript jsx
  import MapboxGL from '@mapbox/react-native-mapbox-gl';
  import MapboxConfig from "../../Config/MapboxConfig";
  MapboxGL.setAccessToken(MapboxConfig.accessToken);
  ...
  <MapboxGL.MapView
   styleURL={ColorScheme.mapStyleUrl}
   zoomLevel={15}
   centerCoordinate={[51.3890,35.6892]}
   style={{flex:1}}
   >
  </MapboxGL.MapView>
  ```

  List Component 

  https://docs.nativebase.io/Components.html#list-avatar-headref

  Material Button Component 

  Component's Location
  
  MaterialComponents/MaterialButton

  Usage:

    <MaterialButton
      text={'Confirm'}
      color={MKColor.Teal}
      textColor = 'white'
      isLoading={true}
      />

  FAB 

  Component's Location
  
  MaterialComponents/MaterialFab

  Usage :

    <MaterialFab
        size={metrics.regularMaterialFab.size}
        color={MKColor.Teal}
        isLoading={false}
        icon={'check'}
        iconColor={'white'}
      />
      // props {size,color,onPress,iconColor,icon}

 Toggle

https://github.com/xinthink/react-native-material-kit#toggles

 CheckBox

https://github.com/xinthink/react-native-material-kit#checkbox

 RadioButton

https://github.com/xinthink/react-native-material-kit#radio-button

MaterialColors

    import {MKColor} from 'react-native-material-kit';

BottomTabNavigation (See MainTabNavigator.tsx for more info)

    import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

TopTabNavigation (See ChatsTabNavigator.tsx for more info)

    import {createMaterialTopTabNavigator, TabBarTop} from 'react-navigation-tabs';


## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

