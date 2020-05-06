import { createStackNavigator } from 'react-navigation';

// Home MWG
import Delivery from '@screens/delivery';

// Điểm Thưởng
import Reward from '@screens/reward';

// Thông Báo
import Notice from '@screens/notice';

// Cá Nhân
import Profile from '@screens/profile';

// Màn hình lock
import Lock from '@screens/signIn/Lock';

export const DeliveryStack = createStackNavigator(
    {
        Delivery: Delivery,
        Lock: Lock
    },
);

DeliveryStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const RewardStack = createStackNavigator(
    {
        Reward: Reward,
        Lock1: Lock
    }
);

RewardStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const NoticeStack = createStackNavigator(
    {
        Notice: Notice,
        Lock2: Lock
    }
);

NoticeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const ProfileStack = createStackNavigator(
    {
        Profile: Profile,
        Lock3: Lock
    }
);

ProfileStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};