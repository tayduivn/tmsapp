import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'

export const ButtonBottomComponent = (props) => {

    return (
        <View style={props.containerButtonGroup ? props.containerButtonGroup : styles.containerButtonGroup} >
            <Button
                title={props.title ? props.title : "Xác nhận"}
                buttonStyle={styles.confirmButton}
                containerStyle={props.containerButton ? props.containerButton : styles.containerButton}
                textStyle={styles.title}
                type="solid"
                onPress={props.onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerButtonGroup: {
        height: 80,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "flex-end",
        marginVertical: 20
    },
    containerButton: {
        width: "90%",
        height: 40,
    },
    title: {
        textAlign: 'center'
    },
    confirmButton: {
        // backgroundColor: 'blue',
        borderRadius: 2,
    }
});