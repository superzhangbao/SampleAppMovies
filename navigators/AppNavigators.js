import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator,} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import React from 'react';
import {Button, Platform, ScrollView, SafeAreaView} from 'react-native';
import HomePage from '../page/HomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AppDrawerNavigator = createDrawerNavigator({
    Page4: {
        screen: Page4,
        navigationOptions: {
            drawerLabel: 'Page4',
            drawerIcon: ({tintColor}) => {
                return <Ionicons
                    name={'airplane'}
                    size={24}
                    style={{color: tintColor}}
                />
            }
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            drawerLabel: 'Page5',
            drawerIcon: ({tintColor}) => {
                return <Ionicons
                    name={'airplane'}
                    size={24}
                    style={{color: tintColor}}
                />
            }
        }
    }
}, {
    initialRouteName: 'Page4',
    contentOptions: {
        activeTintColor: '#e91e63',
    },
    contentComponent: (props) => (
        <ScrollView
            style={{backgroundColor: '#789', flex: 1}}
        >
            <SafeAreaView
                forceInset={{top: 'always', horizontal: 'never'}}
            >
                {/*<DrawerItems screenProps={} renderIcon={} drawerPosition={} items={} onItemPress={} getLabel={}/>*/}
                <DrawerItems {...props}/>
            </SafeAreaView>
        </ScrollView>
    )
});

const AppTopNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'All'
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'Android'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Ios'
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: 'React'
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            tabBarLabel: 'React-Native'
        }
    }
}, {
    tabBarOptions: {
        tabStyle: {
            mindWidth: 10,
            width:100,
            height:50,
        },
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
            backgroundColor: '#678'
        },
        indicatorStyle: {
            width:100,
            height: 2,
            backgroundColor: 'white',
        },
        labelStyle: {
            fontSize: 13,
        }
    }
});

const AppBottomNavigator = createBottomTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'at-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
            tabBarVisible: true,
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'aperture-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'alarm-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'barcode-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
}, {
    initialRouteName: 'Page2', // 设置默认的页面
    lazy: true, // 是否在app打开的时候将底部标签栏全部加载
    backBehavior: null, // 点击返回退到上级界面
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : 'blue',
        //activeBackgroundColor:'blue',
        inactiveTintColor: 'black',
        //inactiveBackgroundColor:'#e91e63'
        showLabel: true,
        showIcon: true,
        labelPosition: 'below-icon',
        allowFontScaling: true,
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'white',
        },
    }
});

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'this is HomePage',
            headerBackTitle: 'hah',
        },
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`,
            headerBackTitle: 'hah',
        }),
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'this is page2',
        },
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'this is page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() =>
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})
                        }
                    />
                ),
            };
        },
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            title: 'this is page4',
        },
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            title: 'this is page5',
        },
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavi',
        },
    },
    Top: {
        screen: AppTopNavigator,
        navigationOptions: {
            title: 'TopNavi',
        },
    },
    DrawerNav:{
        screen:AppDrawerNavigator,
        navigationOptions:{
            title:'DrawerNav',
        }
    }
});
