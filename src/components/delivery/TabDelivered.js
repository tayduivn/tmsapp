import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ModalHelpPagination } from '@componentsCommon/modal/ModalHelpPagination';

export const TabDelivered = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.viewSectionNoList}>
            </View>
            <View>
                <ModalHelpPagination />
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