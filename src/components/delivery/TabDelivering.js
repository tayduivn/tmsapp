import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItem, Divider } from 'react-native-elements';
import { ButtonBottomComponent } from '@componentsCommon/button/ButtonBottomComponent';

export const TabDelivering = (props) => {

    return (
        <View style={styles.container}>
            <View>
                <ListItem
                    // key={props.index}
                    title="Vận đơn: 123456"
                    subtitle="Khách hàng: Võ Minh Hiếu"
                    leftIcon={{ name: "resistance", type: "font-awesome" }}
                    bottomDivider={true}
                    containerStyle={{ backgroundColor: "#fff" }}
                    titleStyle={{ fontSize: 18, width: "100%", textAlign: "left", color: "blue" }}
                    subtitleStyle={{ fontSize: 14, textAlign: "left" }}
                />
                <View style={{
                    height: 80, width: "100%", flexDirection: 'row',
                    backgroundColor: "#fff",
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                }}>
                    <View style={{
                        width: '60%', flexDirection: 'column', alignItems: 'flex-start'
                    }}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>Địa chỉ</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>532/1/16 Lê Trọng Tấn, Tây Thạnh, Tân Phú, tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{
                        width: '40%', flexDirection: 'column', alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>Thời gian giao</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>16:30 05/05/2020</Text>
                    </View>
                </View>
                <ButtonBottomComponent
                    title="Chi Tiết"
                    onPress={props.deliveringDetail}
                    containerButtonGroup={styles.containerButtonGroup}
                />
                <Divider style={{ backgroundColor: 'blue', height: 2 }} />
            </View>
            <View>
                <ListItem
                    title="Vận đơn: 123458"
                    subtitle="Khách hàng: Lâm Mai Khanh"
                    leftIcon={{ name: "resistance", type: "font-awesome" }}
                    bottomDivider={true}
                    containerStyle={{ backgroundColor: "#fff" }}
                    titleStyle={{ fontSize: 18, width: "100%", textAlign: "left", color: "blue" }}
                    subtitleStyle={{ fontSize: 14, textAlign: "left" }}
                />
                <View style={{
                    height: 80, width: "100%", flexDirection: 'row',
                    backgroundColor: "#fff",
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                }}>
                    <View style={{
                        width: '60%', flexDirection: 'column', alignItems: 'flex-start'
                    }}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>Địa chỉ</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>567 Lý Thái Tổ, Phường 5, Quận 10, tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{
                        width: '40%', flexDirection: 'column', alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>Thời gian giao</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>19:30 05/05/2020</Text>
                    </View>
                </View>
                <ButtonBottomComponent
                    title="Chi Tiết"
                    onPress={props.deliveringDetail}
                    containerButtonGroup={styles.containerButtonGroup}
                />
                <Divider style={{ backgroundColor: 'blue', height: 2 }} />
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
    containerButtonGroup: {
        height: 40,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingVertical: 5,
        backgroundColor: '#fff'
    },
});