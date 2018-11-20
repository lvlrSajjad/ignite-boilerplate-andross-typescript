import * as React from 'react'
import {Component} from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import {ColorScheme} from "../../Themes/Colors";
import ExampleComponent from '../ExampleComponent/index'

interface FourthTabComponentProps {
    isDarkMode?: boolean,
    isRtl?: boolean,
    navigation?:any,
    colorScheme?: ColorScheme
}

export default class FourthTabComponent extends Component<FourthTabComponentProps> {
    render() {
        return (
            <ExampleComponent
                title='FourthTab'
                onMenuButtonClicked={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        );
    }
}
