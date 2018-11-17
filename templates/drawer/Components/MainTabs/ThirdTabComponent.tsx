import * as React from 'react'
import {Component} from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import {Images} from "../../Themes";
import {ColorScheme} from "../../Themes/Colors";
import ExampleComponent from '../../Components/ExampleComponent'

interface ThirdTabComponentProps {
    isDarkMode?: boolean,
    isRtl?: boolean,
    colorScheme: ColorScheme
}


export default class ThirdTabComponent extends Component<ThirdTabComponentProps> {
    render() {
        return (
            <ExampleComponent
                title='ThirdTab'
                onMenuButtonClicked={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        );
    }
}
