import * as React from 'react'
import {Component} from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import {ColorScheme} from "../../Themes/Colors";
import ExampleComponent from '../ExampleComponent/index'

interface SecondTabComponentProps {
    isDarkMode?: boolean,
    isRtl?: boolean,
    colorScheme: ColorScheme
}

export default class SecondTabComponent extends Component<SecondTabComponentProps> {
    render() {
        return (
            <ExampleComponent
                title='SecondTab'
                onMenuButtonClicked={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        );
    }
}
