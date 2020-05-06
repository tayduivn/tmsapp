import React from 'react'
import {
    createBottomTabNavigator,
} from 'react-navigation';

import { Icon } from 'react-native-elements';

import {
    DeliveryStack,
    RewardStack,
    NoticeStack,
    ProfileStack
} from '../stackNavigator'

export const Tabs = createBottomTabNavigator(
    {
        Delivery: {
            screen: DeliveryStack,
            navigationOptions: {
                tabBarLabel: 'Giao Hàng',
                tabBarIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={28} color={tintColor} />
            },
        },
        Reward: {
            screen: RewardStack,
            navigationOptions: {
                tabBarLabel: 'Điểm Thưởng',
                tabBarIcon: ({ tintColor }) => <Icon name="history" type="font-awesome" size={28} color={tintColor} />,
            },
        },
        Notice: {
            screen: NoticeStack,
            navigationOptions: {
                tabBarLabel: 'Thông Báo',
                tabBarIcon: ({ tintColor }) => <Icon name="gift" type="font-awesome" size={28} color={tintColor} />,
                headerStyle: {
                    backgroundColor: '#633689',
                },
            },
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: 'Cá Nhân',
                tabBarIcon: ({ tintColor }) => <Icon name="user" type="font-awesome" size={28} color={tintColor} />
            },
        },
    },
    {
        initialRouteName: 'Delivery'
    }
);
Tabs.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
};