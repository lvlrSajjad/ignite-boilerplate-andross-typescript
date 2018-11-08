<h1 align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/ignite-typescript-logo.png" alt="IgniTypescript" width="400">
<br>
 ignite boilerplate andross typescript
 </br>
</h1>

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* This Boiler Plate is just my Customized version of ignite Andross 
* Installed And Configed With TypeScript
* Updated React Native To The Lastest Version (0.57.2)
* Added Rtl Support
* Added Switchable ColorScheme Support
* Add Better Multi language Support And Add Language To App Settings Redux
* Keep Settings Even When The App Closed
* TODO // Internal Set Of Material Components
* HighLighted Dependencies that installed :

<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/deps.png" width="100%">

    
    You can see more on package .json
 * Recommended Dependencies :
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/recommended.png" width="100%">

## :fire: Ignite Cli
  
  First you must install ignite cli as gobal with this command
  ```
npm install -g ignite-cli
```
  For More Cli Instructions Please refer to below sections and ignite boilerplate page :
  https://github.com/infinitered/ignite

## :snowflake: Usage

  You can create your app using this boilerplate with this commands
  
 ```
 ignite new YourAppName -b ignite-boilerplate-andross-typescript
```
During the installation,
You can choose your login screen style or no login screen:
<p align="center">

<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/login.png" width="100%">

if you choose a login screen, redux,components,login screen will be generated then you can change them.
</p>


You can choose your main screen style or just a simple screen:
<p align="center">

<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/main.png" width="100%">
</p>

You can work with combination of this options for example if you choose simple login and social media after installation your app will be like this:
<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/combine.gif" width="250px">
</p>

after installation run below commands:
```
   cd YourAppName
   react-native link
   npm start
   react-native run-ios or react-native run-android
   ```
## :exclamation: Possible Errors
  
   if you've got transform-hmr error on boundle so start your boundler with this command:
   `` react-native start --reset-cache ``
   
## :file_folder: Folder Structure
        
<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/folder.png" width="100%">
</p>

## :arrow_down_small: Rtl/Ltr support components
<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/rtl.gif" width="250">
</p>

If you want to your app support ltr/rtl layouts separately
you can just use this command inside the app folder (just replace pizza with your app name): 
```
ignite g component pizza --rtlsupport
```
it will produce this file/folders inside your Components folder :

<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/rtl.png" width="100%">
</p>

Just use it as :
```typescript jsx
import Pizza from './path/to/Pizza'
```
The generated index.tsx will be like below:
  ```typescript jsx
  import Ltr from "./Pizza.ltr";
  import Rtl from "./Pizza.rtl";
  import {connect} from "react-redux";
  import * as React from "react";
  
  export interface PizzaProps {
    //you can use this interface in ltr/rtl component
    ...,
    isRtl:boolean
  }
  
  const Direction = (props:PizzaProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;
  
  const mapStateToProps = state => {
    return {
      isRtl: state.appSettings.isRtl // appSettings is my reducer in Redux folder
    };
  };
  
  export default connect(mapStateToProps)(Direction);

  ```
If you don't want Rtl/Ltr Switchable component us just create the component with this command:
```
ignite g component pizza
```
it will produce this file/folders inside your Components folder :

<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/component.png" width="100%">
</p>

Just use it as :
```typescript jsx
import Pizza from './path/to/Pizza'
```
The generated index.tsx will be like below:
```typescript jsx
import * as React from "react";
import Pizza from './Pizzaa';
import {connect} from "react-redux";
import {ColorScheme} from "../../Themes/Colors";


export interface PizzaProps {
isDarkMode?: boolean,
colorScheme?:ColorScheme
}

export const PizzaComponent = (props:PizzaProps) => <Pizza {...props} />;

const mapStateToProps = state => {
return {
};
};

export default connect(mapStateToProps)(PizzaComponent);

```
## :arrow_down_small: Generate Screens
You can generate normal screens in containers folder then add them to the navigation by this command
   ```
    ignite g container ScreenName
   ```
   
   ## :arrow_down_small: Generate Login Screens

You can also generate a material designed Login screen with some related components and reduxs by this command:

<h3 align="center">Normal Login Screen</h3>

   <p align="center">
   <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/login.gif" width="100%">
   </p>
   
```
    ignite g container LoginScreen
   ```
   Or Choosing Simple login screen at project initialization
   

   
<h3 align="center">Sms Login Screen<h3>


<p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/smslogin.gif" width="100%">
</p>
 
```
      ignite g container SmsLoginScreen
``` 
   Or Choosing Sms login screen at project initialization

   
   
   then just add 
   ```typescript jsx
  login: require('./Login/LoginRedux').reducer

```
in the end of 
```typescript jsx
reducers: Reducer<ApplicationState> = combineReducers 
```
array in
```
App/Redux/index.tsx
```
If you want set the login screen as launch screen edit 
```
App/Navigation/AppNavigation.tsx
```
this way :
```typescript jsx
...
initialRouteName: "LoginScreen",
...
```
## :arrow_down_small: If you want switchable color theme in your app 
<p align="center">
   
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/darkmode.gif" width="250">
</p>
actually below reducer And action playing important roles for settings like direction(rtl/ltr) 
or colorScheme and any settings like these :

```
App/Redux/AppSettingsRedux
```
```
App/Redux/Actions/AppSettinsAction
```

for example for colorScheme we have colorScheme state in this reducer which contans below structure :

```typescript
export interface ColorScheme {
  fullToneText: string,
  midToneText: string,
  lightText: string,
  fullToneBackground: string,
  midToneBackground: string,
  lightBackground: string,
  cardBackground: string,
  mapStyleUrl: string,
  tabBarBackground: string,
  containersBackground: string
}
```    
you can also view or change it's structure and values in below file :

`App/Themes/Colors`

this scheme have two states for now dark and light themes

this is how we can change state of this scheme :

```typescript jsx
import * as Actions from '../../Redux/Actions/AppSettingsAction';
.
.
.
onValueChange={() => { this.props.toggleDirection() }}
.
.
.
export default connect(mapStateToProps, Actions)(SettingsTab);

```

you can see below file for more detail :

`App/Containers/MainTabs/SettingsTab.tsx`

then you can use it as :

```typescript jsx
.
.
.
const ColorScheme = this.props.colorScheme;
.
.
.
style={{backgroundColor:ColorScheme.containersBackground}}
.
.
.
const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  colorScheme: state.appSettings.colorScheme
});
.
.
export default connect(mapStateToProps, mapDispatchToProps)(ChannelsTab);

```

you can see similiar usage in example files inside Container folder or another folders ...

you can also test this in the settings tab

## :arrow_down_small: Switchable locale
<p align="center">

<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/locale.gif" width="250">
</p>

```typescript jsx
import * as Actions from '../../Redux/Actions/AppSettingsAction';

.
.
.
this.props.selectLocale(localName /** eg. 'en'*/); 
.
.
.
export default connect(mapStateToProps, Actions)(ComponentName);

```

you can create you locales in `App/I18n/locales folder` like :

```typescript jsx
//en.ts

export default {
  confirm:"Confirm",
  back:"Back",
  phoneNumber:"Phone Number",
  verificationNumber:"Verification Number",
  userName:"User Name",
  chats:"Chats",
  channels:"Channels",
  location:"Location",
  search:"Search",
  settings:"Settings",
  groups: "Groups",
  calls:"Calls",
  contacts:"Contacts",
  savedMessages:"Saved Messages",
  inviteFriends:"Invite Friends",
  help:"Help",
  darkMode:"Dark Mode",
  rtl:"Right To Left",
  translate: "Translate"
};
```

then in `App/I18n` folder I18n.ts file :

```typescript jsx
import I18n from 'react-native-i18n';
import en from './locales/en';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fa
};

export default I18n;

```

End usage:

```typescript jsx
import I18n from "../path/to/App/I18n";

<SomeComponent
placeholder={I18n.t('phoneNumber')}
/>
```
## :arrow_down_small: Persisted States (Redux-Persist)
<p align="center">

<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/persist.gif" width="250">
</p>

for using redux-persist to persist your settings or any states you can go to this path

`App/Config/ReduxPersist.tsx`

then add your reducer name to this array :

`whitelist: ["reducer Name",...],`

then go to your reducer and add this code :

`case REHYDRATE:
      return {...state,...action.payload.yourReducerName};`
            
then changes on your reducer will be persisted 


## :heart: Recommended Components For Use In The Project
  ### Mapbox Component
  
  You can install mapbox and link it then use it as below 
    
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
### Material input  (installed on the boilerplate)
https://github.com/n4kz/react-native-material-textfield


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

