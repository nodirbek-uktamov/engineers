import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { FileText } from 'react-native-feather'
import MapView, { Marker } from 'react-native-maps'
import Header from '../components/Header'
import { useLoad } from '../hooks/request'
import { ACTIVE_ORDERS } from '../urls'

export default function OrdersMapList() {
    const orders = useLoad({ url: ACTIVE_ORDERS })
    const navigation = useNavigation()
    const ordersList = orders.response?.data?.filter((item) => item.longitude !== 0 && item.latitude !== 0) || []

    return (
        <View style={styles.container}>
            <Header title="ПОДПИСКИ" />

            <TouchableOpacity onPress={() => navigation.navigate('OrdersList')} style={styles.changeViewType}>
                <FileText width={40} height={40} color="#43BD46" />
                <Text style={styles.changeViewTypeText}>ЗАДАНИЯ СПИСКОМ</Text>
            </TouchableOpacity>

            <MapView
                showsUserLocation
                style={{ flex: 0.8 }}>
                {ordersList.map((order) => (
                    <Marker
                        key={order.id}
                        onCalloutPress={() => navigation.navigate('OrderDetail', { order })}
                        title={order.name}
                        description={order.description}
                        coordinate={{ latitude: order.longitude, longitude: order.latitude }} />
                ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 50,
    },
    changeViewType: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 40,
    },
    changeViewTypeText: {
        marginBottom: 10,
        marginLeft: 20,
        textDecorationLine: 'underline',
        color: '#545E74',
        fontWeight: 'bold',
    },
})
