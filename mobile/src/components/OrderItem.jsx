import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { getDate } from '../utils/date'
import { domain } from '../utils/request'

export default function OrderItem({ order }) {
    const navigation = useNavigation()
    const imageUri = order?.images?.split(';')[0] || 'Upload/Default/DefaultImage.png'

    return (
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { order })} style={styles.item}>
            <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

            <View style={styles.content}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.greyText}>{getDate(order?.created_at)}</Text>
                    <Text style={styles.price}>{order?.cost} ₽</Text>
                </View>

                <Text style={styles.name}>{order?.name}</Text>
                <Text style={styles.userName}>{order?.ownerName}</Text>
                <Text style={styles.greyText} numberOfLines={2}>{order?.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 25,
        flexDirection: 'row',
    },
    content: {
        flex: 1,
    },
    greyText: {
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
})
