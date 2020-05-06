import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import { Container, Tab, Tabs, StyleProvider } from 'native-base';

import AsyncStorage from '@react-native-community/async-storage'

import { TabListOrder } from '@components/delivery/TabListOrder'
import { TabDelivering } from '@components/delivery/TabDelivering'
import { TabDelivered } from '@components/delivery/TabDelivered'
export default class Preferential extends Component {
    static navigationOptions = {
        title: 'Giao Hàng'
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            setTimeout(async () => {
                const timeout = await this.appSettingData();
                this.interval = setInterval(() => {
                    this.props.navigation.push("Lock2", { routeName: this.props.navigation.state.routeName })
                }, timeout);
            }, 500);
        });
        this.didBlurListener = this.props.navigation.addListener('didBlur', () => {
            clearInterval(this.interval);
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
        this.didBlurListener.remove();
        clearInterval(this.interval);
    }

    appSettingData = async () => {
        const StorageInfo = await AsyncStorage.getItem('AppSetting')
        const appSetting = JSON.parse(StorageInfo)
        return appSetting.timeout
    }

    deliveringDetail = () => {
        console.log("deliveringDetail")
    }

    render() {
        return (

            <Container>
                <Tabs>
                    <Tab heading='Chờ Giao'>
                        <TabListOrder />
                    </Tab>
                    <Tab heading='Đang Giao'>
                        <TabDelivering deliveringDetail={this.deliveringDetail} />
                    </Tab>
                    <Tab heading='Hoàn Thành'>
                        <TabDelivered />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#eff1f4',
    },
    viewSectionNoList: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});