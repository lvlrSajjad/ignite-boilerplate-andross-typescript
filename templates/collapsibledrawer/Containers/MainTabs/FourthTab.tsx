import * as React from 'react'
import {Component} from 'react';
import {Image, Text, View} from 'react-native'
import {MaterialCollapsibleToolbarContainer} from 'react-native-typescript-material-ui-collection'
import {connect} from "react-redux";
import { DrawerActions } from 'react-navigation-drawer';

class FourthTab extends Component {
    componentWillMount() {
    }

    renderContent = () => (
        <View>
            {new Array(40).fill().map((_, i) => (
                <View
                    key={i}
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E5E5E5'
                    }}
                >
                    <Text>{`Item ${i + 1}`}</Text>
                </View>
            ))}
        </View>
    );

    renderCollapsedToolbarContent = () => <Image
        source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}
        style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: 'hidden'
        }}/>;

    render() {
        return (
            <MaterialCollapsibleToolbarContainer
                renderContent={this.renderContent}
                imageSource='https://picsum.photos/400/300?image=3'
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                textColor='white'
                renderCollapsedToolbarContent={this.renderCollapsedToolbarContent}
                leftButtonIcon='menu'
                onLeftIconPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}
                title="Fourth"
                // toolBarHeight={300}
            />
        );
    }
}
//const mapStateToProps = state => ({});

//const mapDispatchToProps = dispatch => ({});

export default connect(/**mapStateToProps*/ null,/** mapDispatchToProps*/null)(FourthTab);
