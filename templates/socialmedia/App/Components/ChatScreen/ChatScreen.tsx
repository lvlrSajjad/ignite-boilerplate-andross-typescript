import * as React from 'react'
import { View } from 'react-native'
import {connect} from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modalbox';
import {Card} from "native-base";
import metrics from "../../Themes/Metrics";
import SettingsListItem from "../LaunchScreen/SettingsTab/SettingsListItem/index";
import {ColorScheme, colorScheme} from "../../Themes/Colors";
import {GiftedChat, Actions, InputToolbar, Send, IMessage} from './index'


interface ChatScreenProps {
    navigation?: any,
    colorScheme?: ColorScheme
}

interface ChatScreenState {
    messages?: IMessage[]
}

interface ChatScreen {
    modal?: any,
}


export default class ChatScreen extends React.Component<ChatScreenProps, ChatScreenState> {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        }
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        const ColorScheme = this.props.colorScheme;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: ColorScheme.containersBackground
                }}
            >
                <Modal
                    swipeToClose={true}
                    backButtonClose={true}
                    position={'bottom'}
                    style={{height: 310, backgroundColor: 'transparent'}}
                    ref={(modal) => this.modal = modal}>
                    <Card style={{
                        alignSelf: 'center',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        width: metrics.screenWidth - 32,
                        backgroundColor: ColorScheme.cardBackground

                    }}>
                        <SettingsListItem colorScheme={ColorScheme} icon={'reply'} name={'پاسخ دادن'}/>
                        <SettingsListItem colorScheme={ColorScheme} icon={'forward'} name={'ارسال'}/>
                        <SettingsListItem colorScheme={ColorScheme} icon={'content-copy'} name={'کپی کردن متن'}/>
                        <SettingsListItem colorScheme={ColorScheme} icon={'select'} name={'انتخاب'}/>

                    </Card>
                </Modal>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    locale={'IR'}
                    onLongPress={() => this.modal.open()}
                    //renderActions={() => this.renderActions()}
                    renderInputToolbar={this.renderInputToolbar}
                    renderSend={this.renderSend}
                />
            </View>
        )
    }

    renderInputToolbar = (props) => {
        //Add the extra styles via containerStyle
        return <InputToolbar {...props} />
    }

    renderSend = (props) => {
        return (<Send {...props} >
            <MaterialIcons
                style={{margin: 8}}
                name={'send'}
                size={28}
                color={colorScheme(false).fullToneText}
            />
        </Send>)
    }

    renderActions = () => {
        // if (Platform.OS === 'ios') {
        //   return (
        //     <CustomActions
        //       {...props}
        //     />
        //   );
        // }
        const options = {
            'Action 1': (/**props*/) => {
                alert('option 1');
            },
            'Action 2': (/**props*/) => {
                alert('option 2');
            },
            'Cancel': () => {
            },
        };
        return (
            <Actions
                {...this.props}
                options={options}
            />
        );
    }
}
