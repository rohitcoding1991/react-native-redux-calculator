
// 화면(View)들은 실제 화면을 표현하고, 내부 구성의 명칭은 중요하진 않겠지만 
// component들을 담는 것을 Container(들) 이라 지칭하겠습니다.
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from '../Main';


export default class Root extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor:'grey'}}>
                <Text style={{ marginLeft:20, marginTop:100, fontSize:24 }}>React Native Redux Sample</Text>
                <Main />
            </View>
            
        );
    }
}