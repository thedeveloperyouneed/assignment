import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Images } from '../../themes'

export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf:'center', backgroundColor:'red'}}>
                <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={Images.user} />
                <View style={{paddingHorizontal:60}}>
                    <Text>UserName</Text>
                    <Text>First Name</Text>
                </View>
            </View>
        )
    }
}