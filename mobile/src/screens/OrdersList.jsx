import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/core'
import Header from '../components/Header'
import { OrdersInMap } from '../components/common/Svgs'
import OrderItem from '../components/OrderItem'
import { useLoad } from '../hooks/request'
import { ACTIVE_ORDERS } from '../urls'
import Loader from '../components/common/Loader'

export default function OrdersList() {
    const orders = useLoad({ url: ACTIVE_ORDERS })
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) orders.request()
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Header title="ПОДПИСКИ" />

            <TouchableOpacity
                onPress={() => navigation.navigate('OrdersMapList')}
                style={styles.changeViewType}>
                <OrdersInMap />
                <Text style={styles.changeViewTypeText}>ЗАДАНИЯ НА КАРТЕ</Text>
            </TouchableOpacity>

            {orders.loading && !orders.response ? <Loader style={{ marginTop: 200 }} /> : null}

            <FlatList
                keyExtractor={(item, index) => index}
                data={orders.response?.data?.filter((i) => !!i) || []}
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
