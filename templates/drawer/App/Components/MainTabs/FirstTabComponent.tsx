import * as React from 'react'
import {Component} from 'react';
import {DrawerActions} from 'react-navigation-drawer';
import {ColorScheme} from "../../Themes/Colors";
import ExampleComponent from '../ExampleComponent/index'

interface FirstTabComponentProps {
    isDarkMode?: boolean,
    isRtl?: boolean,
    colorScheme: ColorScheme
}

export default class FirstTabComponent extends Component<FirstTabComponentProps> {
    render() {
        return (
            <ExampleComponent
                title='FirstTab'
                onMenuButtonClicked={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        );
    }
}
