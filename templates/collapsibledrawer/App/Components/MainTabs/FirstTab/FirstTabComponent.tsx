import * as React from 'react'
import {MaterialCollapsibleToolbarContainer} from 'react-native-typescript-material-ui-collection'
import { DrawerActions } from 'react-navigation-drawer';
import {FirstTabMainContent,FirstTabToolbarContent} from "./index";

interface FirstTabComponentProps {
    navigation?:any
}

export default class FirstTabComponent extends React.Component<FirstTabComponentProps> {

    render () {
        return (
            <MaterialCollapsibleToolbarContainer
                renderContent={()=><FirstTabMainContent/>}
                imageSource='https://picsum.photos/400/300?image=0'
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                textColor='white'
                renderCollapsedToolbarContent={()=><FirstTabToolbarContent/>}
                leftButtonIcon='menu'
                onLeftIconPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}
                title="First"
                // toolBarHeight={300}
            />
        )
    }
}
