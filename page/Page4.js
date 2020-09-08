import {Component} from 'react';
import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default class Page4 extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Page4 Screen</Text>
        <Button title={'Open Drawer'} onPress={()=> navigation.openDrawer()}/>
        <Button title={'Close Drawer'} onPress={()=> navigation.closeDrawer()}/>
        <Button title={'Toggle Drawer'} onPress={()=> navigation.toggleDrawer()}/>

      </View>
    );
  }
}
