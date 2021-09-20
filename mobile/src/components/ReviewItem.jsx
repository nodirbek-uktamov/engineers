import React, { Fragment } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getDate } from '../utils/date'
import { domain } from '../utils/request'

export default function ReviewItem({ item }) {
    const imageUri = 'Upload/Default/DefaultImage.png' // TODO: fix image

    return (
        <Fragment key={item.id}>
            <View style={styles.userInfo}>
                <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

                <View style={styles.userTexts}>
                    <Text>{getDate(item.created_at)}</Text>
                    <Text style={styles.name}>Имя пользователя который поставил отзыв {/* TODO: fix name */}</Text>
                    <Text style={{ color: '#43BD46' }}>★ ★ ★ ★ {/* TODO: fix stars */}</Text>
                </View>
            </View>

            <Text style={styles.description}>{item.text}</Text>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 30,
    },
    image: {
        marginRight: 20,
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    userTexts: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
    description: {
        color: '#000000',
        fontSize: 16,
    },
})
