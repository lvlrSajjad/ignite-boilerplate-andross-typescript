#  Ignite II TypeScript Enehanced
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)
* This Boiler Plate is just my Customized version of ignite Andross 
* Installed And Configed With TypeScript
* Updated React Native To The Lastest Version (0.57.2)
* HighLighted Dependencies that installed and linked to android :

    ```
      MapBox For Maps And Locations Using
    
      Realm For DB Uses
      
      Jest And Enzyme For Tests
      
      Axios
      
      Redux
      
      Redux-Saga
      
      ReduxSauce For Reducers/Actions Management
      
      socket.io,socket.io-client For Socket Uses 
        For using socket you can use this tutorial link below
        https://hackernoon.com/a-simple-messaging-app-with-react-native-and-socket-io-e1cae3df7bda
        
      eslint , eslint-config-airbnb For Code formatting
      
      Typescript for oop and typechecking 
      
      react-native-firebase for firebase usage
      
      react-navigation,react-navigation-material-bottom-tabs,... for navigation
      
      native-base,paper,react-native-material-kit for Ui/Ux
        Actually the goal is deploying ui/ux exactly like material design guidlines
        so i'm using a combination of above libraries components to achive this goal
        
      react-native-animatable For animations
      
      react-native-vector-icons For Vector Icons  
      
    ```
    
    You can see more on package .json
 * Recommended Dependencies :
    
       Lottie React Native 
        For Animations Like Animated Logos
        
       react-navigation-fluid-transitions 
        For Animations Like Shared Elements For React-navigation
        
       HightCharts And D3js
        For Data Visualizations
        
       WebRtc
        Real-Time Communications
  
   
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

  ### Map Component
  
  Mapbox installed in the project and linked with android (not ios yet so open for pull requests)
  
  and you can get your token key with instructions inside mapbox github https://github.com/mapbox/react-native-mapbox-gl
  
  then you can use it inside `App>Config>MapboxConfig.tsx`
  
 #### then use it like :
  
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

  ### List Component 

  https://docs.nativebase.io/Components.html#list-avatar-headref

  ### Material Button Component 

  #### Component's Location
  
  MaterialComponents/MaterialButton

  #### Usage:
  ```typescript jsx
    <MaterialButton
      text={'Confirm'}
      color={MKColor.Teal}
      textColor = 'white'
      isLoading={true}
      />
  ```
  ### FAB 

  Component's Location
  
  MaterialComponents/MaterialFab

  #### Usage :
```typescript jsx
    <MaterialFab
        size={metrics.regularMaterialFab.size}
        color={MKColor.Teal}
        isLoading={false}
        icon={'check'}
        iconColor={'white'}
      />
      // props {size,color,onPress,iconColor,icon}
 ```
 ### Toggle

https://github.com/xinthink/react-native-material-kit#toggles

 ### CheckBox

https://github.com/xinthink/react-native-material-kit#checkbox

 ### RadioButton

https://github.com/xinthink/react-native-material-kit#radio-button

### MaterialColors

    import {MKColor} from 'react-native-material-kit';

### BottomTabNavigation (See MainTabNavigator.tsx for more info)

    import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

### TopTabNavigation (See ChatsTabNavigator.tsx for more info)

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

