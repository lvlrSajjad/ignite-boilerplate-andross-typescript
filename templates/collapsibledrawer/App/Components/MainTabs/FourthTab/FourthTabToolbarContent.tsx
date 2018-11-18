import * as React from 'react'
import {Image} from 'react-native'

interface FourthTabToolbarContentProps {

}

export default class FourthTabToolbarContent extends React.Component<FourthTabToolbarContentProps> {

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
