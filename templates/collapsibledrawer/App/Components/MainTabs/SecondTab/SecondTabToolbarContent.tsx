import * as React from 'react'
import {Image} from 'react-native'

interface SecondTabToolbarContentProps {

}

export default class SecondTabToolbarContent extends React.Component<SecondTabToolbarContentProps> {

    render () {
        return (
            <Image
                source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    overflow: 'hidden'
                }}/>
        )
    }
}
