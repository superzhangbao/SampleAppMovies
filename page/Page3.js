import {Component} from 'react';
import {Button, Text, View, TextInput, Dimensions} from 'react-native';
import * as React from 'react';

export default class Page3 extends Component {
  render() {
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Page3 Screen</Text>
        <Text>{showText}</Text>
        <TextInput
          style={{
            height: 50,
            width: Dimensions.get('window').width,
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 25,
          }}
          onChangeText={(text) => {
            setParams({title: text});
          }}
        />
      </View>
    );
  }
}
