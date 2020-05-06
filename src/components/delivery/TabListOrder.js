import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';


export const TabListOrder = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.viewSectionNoList}>
                <View style={styles.icon}>
                    <Icon
                        name='gift'
                        type='font-awesome'
                        color='#d82cfd99'
                        size={120} />
                </View>
                <View style={styles.description}>
                    <Text style={{ color: '#948f8f', fontSize: 20 }}>Bạn chưa có mã quà tặng</Text>
                </View>
            </View>
        </View>
    )
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