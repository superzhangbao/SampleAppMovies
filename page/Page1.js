import {Component} from 'react';
import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default class Page1 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Page1 Screen</Text>
        <Button
          title={'Go Back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title={'push到Page1'}
          onPress={() => {
            navigation.push('Page1', {name: '动态的'});
          }}
        />
        <Button
          title={'navigate到Page1'}
          onPress={() => {
            navigation.navigate('Page1', {name: '动态的'});
          }}
        />
        <Button
          title={'跳转到Page4'}
          onPress={() => {
            navigation.navigate('Page4');
          }}
        />
      </View>
    );
  }
}
