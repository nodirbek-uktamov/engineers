import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Header from '../components/Header'
import { OrdersInMap } from '../components/common/Svgs'
import OrderItem from '../components/OrderItem'
import { useLoad } from '../hooks/request'
import { ACTIVE_ORDERS } from '../urls'

export default function OrdersList() {
    const orders = useLoad({ url: ACTIVE_ORDERS })
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Header title="ПОДПИСКИ" />

            <TouchableOpacity
                onPress={() => navigation.navigate('OrdersMapList')}
                style={styles.changeViewType}>
                <OrdersInMap />
                <Text style={styles.changeViewTypeText}>ЗАДАНИЯ НА КАРТЕ</Text>
            </TouchableOpacity>

            {orders.loading && !orders.response ? <ActivityIndicator size={50} color="#000" style={{ marginTop: 200 }} /> : null}

            <FlatList
                keyExtractor={(item) => item.id}
                data={orders.response?.data || []}
                renderItem={({ item }) => <OrderItem order={item} />} />
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
        marginBottom: 5,
        marginLeft: 20,
        textDecorationLine: 'underline',
        color: '#545E74',
        fontWeight: 'bold',
    },
})
