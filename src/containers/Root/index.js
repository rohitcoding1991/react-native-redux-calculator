//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from '../Main'

// create a component
export default class Root extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'grey'}}>
                <Text style={{ marginLeft:20, marginTop:60, fontSize:24 }}>React Native Redux Sample</Text>
                <Main />
            </View>
        );
    }
}
