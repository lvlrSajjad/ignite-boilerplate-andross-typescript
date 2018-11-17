import * as React from 'react'
import {Component} from 'react';
import {FifthTabContent} from ".";

interface SettingsTabProps {
}

export default class FifthTabComponent extends Component<SettingsTabProps> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FifthTabContent {...this.props}/>
        );
    }
}
