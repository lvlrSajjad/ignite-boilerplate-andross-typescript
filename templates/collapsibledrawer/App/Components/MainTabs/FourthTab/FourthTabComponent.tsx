import * as React from 'react'
import {MaterialCollapsibleToolbarContainer} from 'react-native-typescript-material-ui-collection'
import { DrawerActions } from 'react-navigation-drawer';
import {FourthTabMainContent,FourthTabToolbarContent} from "./index";

interface FourthTabComponentProps {

}

export default class FourthTabComponent extends React.Component<FourthTabComponentProps> {

    render () {
        return (
            <MaterialCollapsibleToolbarContainer
                renderContent={()=><FourthTabMainContent/>}
                imageSource='https://picsum.photos/400/300?image=3'
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                textColor='white'
                renderCollapsedToolbarContent={()=><FourthTabToolbarContent/>}
                leftButtonIcon='menu'
                onLeftIconPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}
                title="Fourth"
                // toolBarHeight={300}
            />
        )
    }
}
