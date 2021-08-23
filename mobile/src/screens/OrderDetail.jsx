import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import Header from '../components/Header'
import { Description, Map, Respond } from '../components/common/Svgs'
import { domain } from '../utils/request'
import { getDate } from '../utils/date'

export default function OrderDetail({ route }) {
    const { order } = route.params
    console.log(order.responds)

    // {
    //     UserId: 'cff67636-f8ec-4d8b-83bb-734e989cd1d1',
    //     OrderId: 1,
    //     Text: 'string',
    //     Created_at: '2021-08-23T02:22:49.958Z',
    // } // дата создание откликов

    return (
        <View style={styles.container}>
            <Header title="ПОДПИСКИ" />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={styles.description}>
                    <Description />
                    <Text style={styles.descriptionText}>ОПИСАНИЕ</Text>
                </View>

                <View style={styles.map}>
                    <Map />
                    <Text style={styles.mapText}>КАРТА</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Image style={styles.image} source={{ uri: `${domain}/${order.images.split(';')[0]}` }} />

                <View style={styles.flex}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.createdAt}>{getDate(order.created_at)}</Text>
                        <Text style={styles.price}>{order.cost} ₽</Text>
                    </View>

                    <Text style={styles.name}>{order.name}</Text>
                    <Text style={styles.userName}>{order.owner.fullName}</Text>
                </View>
            </View>

            <Text style={styles.orderDescription}>{order.description}</Text>

            <View style={styles.respondsTitleContainer}>
                <Respond />
                <Text style={styles.respondsTitle}>ОТКЛИКИ ({order.responds.length})</Text>
            </View>

            <FlatList keyExtractor={(item) => item.id} data={order.responds} renderItem={({ item }) => (
                <View>
                    <View style={styles.item}>
                        <Image style={styles.image} source={{ uri: `${domain}/${order.images.split(';')[0]}` }} />

                        <View style={styles.flex}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.createdAt}>{getDate(order.created_at)}</Text>
                                <Text style={styles.price}>{order.cost} ₽</Text>
                            </View>

                            <Text style={styles.name}>Name of User{/* TODO: fix name of user */}</Text>
                            <Text>* * * *{/* TODO: fix stars */}</Text>
                        </View>
                    </View>

                    <Text style={styles.respondsText}>{item.text}</Text>
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
    description: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
        marginRight: 40,
    },
    descriptionText: {
        marginLeft: 15,
        textDecorationLine: 'underline',
        color: '#545E74',
        fontWeight: 'bold',
    },
    map: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 50,
    },
    mapText: {
        color: '#545E74',
        fontSize: 16,
        marginLeft: 15,
    },

    item: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    flex: {
        flex: 1,
    },
    createdAt: {
        color: '#4B4B4B',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 5,
    },
    userName: {
        textDecorationLine: 'underline',
        fontSize: 15,
        marginBottom: 5,
    },
    image: {
        marginRight: 20,
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 0,
        color: '#43BD46',
    },
    orderDescription: {
        color: '#000000',
        marginBottom: 20,
    },
    respondsTitle: {
        color: '#545E74',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    respondsTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    respondsText: {
        color: '#000000',
        marginBottom: 20,
    },
})
