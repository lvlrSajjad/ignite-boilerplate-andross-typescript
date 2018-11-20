import * as React from 'react'
import {MaterialCollapsibleToolbarContainer} from 'react-native-typescript-material-ui-collection'
import { DrawerActions } from 'react-navigation-drawer';
import {ThirdTabMainContent,ThirdTabToolbarContent} from "./index";

interface ThirdTabComponentProps {
    navigation?:any
}

export default class ThirdTabComponent extends React.Component<ThirdTabComponentProps> {

    render () {
        return (
            <MaterialCollapsibleToolbarContainer
                renderContent={()=><ThirdTabMainContent/>}
                imageSource='https://picsum.photos/400/300?image=2'
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                textColor='white'
                renderCollapsedToolbarContent={()=><ThirdTabToolbarContent/>}
                leftButtonIcon='menu'
                onLeftIconPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}
                title="Third"
                // toolBarHeight={300}
            />
        )
    }
}
