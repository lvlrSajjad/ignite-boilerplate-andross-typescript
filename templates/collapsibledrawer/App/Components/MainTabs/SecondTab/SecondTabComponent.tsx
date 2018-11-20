import * as React from 'react'
import {MaterialCollapsibleToolbarContainer} from 'react-native-typescript-material-ui-collection'
import { DrawerActions } from 'react-navigation-drawer';
import {SecondTabMainContent,SecondTabToolbarContent} from "./index";

interface SecondTabComponentProps {
    navigation?:any
}

export default class SecondTabComponent extends React.Component<SecondTabComponentProps> {

    render () {
        return (
            <MaterialCollapsibleToolbarContainer
                renderContent={()=><SecondTabMainContent/>}
                imageSource='https://picsum.photos/400/300?image=1'
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                textColor='white'
                renderCollapsedToolbarContent={()=><SecondTabToolbarContent/>}
                leftButtonIcon='menu'
                onLeftIconPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}
                title="Second"
                // toolBarHeight={300}
            />
        )
    }
}
