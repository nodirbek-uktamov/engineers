import React, { useContext, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/core'
import { Trash2 } from 'react-native-feather'
import Header from '../components/Header'
import OrderItem from '../components/OrderItem'
import { useDeleteRequest, useGetRequest } from '../hooks/request'
import { ACTIVE_ORDERS, DELETE_ORDER } from '../urls'
import { GlobalContext } from '../contexts/GlobalContext'
import { deleteAlert } from '../utils/helpers'
import { CreateOrder } from '../components/common/Svgs'
import Loader from '../components/common/Loader'

export default function OrdersList() {
    const navigation = useNavigation()
    const { user } = useContext(GlobalContext)
    const orders = useGetRequest({ url: ACTIVE_ORDERS, params: { userId: user.id } }) // TODO: change url to GET_ORDER_BY_USER
    const orderDelete = useDeleteRequest()

    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) orders.request()
    }, [isFocused])

    async function handleDelete(id) {
        deleteAlert(async () => {
            await orderDelete.request({ url: DELETE_ORDER.replace('{id}', id) })
            orders.request()
        })
    }

    return (
        <View style={styles.container}>
            <Header title="ФИЛЬТР ЗАДАНИЙ" />

            <TouchableOpacity
                onPress={() => navigation.navigate('OrderCreate')}
                style={styles.changeViewType}>
                <CreateOrder />
                <Text style={styles.changeViewTypeText}>СОЗДАТЬ ЗАДАНИЕ</Text>
            </TouchableOpacity>

            {orders.loading
                ? <Loader style={{ marginTop: orders.response ? 20 : 200 }} />
                : null}

            <FlatList
                style={{ marginTop: 40 }}
                keyExtractor={(item) => item.id}
                data={orders.response?.data || []}
                renderItem={({ item }) => (
                    <View>
                        <OrderItem order={item} />

                        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteOrder}>
                            <Trash2 color="#43BD46" width={25} height={25} />
                            <Text style={{ marginLeft: 5, color: 'gray' }}>Удалить</Text>
                        </TouchableOpacity>
                    </View>
                )} />
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
    },
    changeViewTypeText: {
        marginBottom: 5,
        marginLeft: 20,
        textDecorationLine: 'underline',
        color: '#545E74',
        fontWeight: 'bold',
    },
    deleteOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 5,
        marginBottom: 20,
    },
})
