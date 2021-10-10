import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Header from '../components/Header'
import { domain } from '../utils/request'

export default function Dialogs() {
    const dialogs = [
        { image: 'Upload/Default/DefaultImage.png', lastMessage: 'Hello Tom, asd asd asd asd', orderName: 'Some order name. Some order name. Some order name.', name: 'Anton Andreyev', id: 1 },
        { image: 'Upload/Default/DefaultImage.png', lastMessage: 'Hello Tom, asd asd asd asd', orderName: 'Some order name. Some order name. Some order name.', name: 'Anton Andreyev', id: 2 },
        { image: 'Upload/Default/DefaultImage.png', lastMessage: 'Hello Tom, asd asd asd asd', orderName: 'Some order name. Some order name. Some order name.', name: 'Anton Andreyev', id: 3 },
        { image: 'Upload/Default/DefaultImage.png', lastMessage: 'Hello Tom, asd asd asd asd', orderName: 'Some order name. Some order name. Some order name.', name: 'Anton Andreyev', id: 4 },
    ]

    return (
        <View style={styles.container}>
            <Header title="ДИАЛОГИ" />

            <ScrollView style={{ marginTop: 30 }}>
                {dialogs.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.item}>
                        <Image style={styles.image} source={{ uri: `${domain}/${item.image}` }} />

                        <View style={styles.content}>
                            <Text style={styles.name} numberOfLines={1}>{item?.name}</Text>
                            <Text style={styles.name} numberOfLines={1}>{item?.orderName}</Text>
                            <Text style={styles.greyText} numberOfLines={1}>{item?.lastMessage}</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.notificationsCount}>
                                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>9+</Text>
                            </View>

                            <Text style={{ marginVertical: 5, ...styles.date }}>15:23</Text>
                            <Text style={styles.date}>22.08.2021</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 50,
    },
    date: {
        color: '#97A1BF',
    },
    notificationsCount: {
        width: 25,
        height: 25,
        backgroundColor: '#43BD46',
        marginVertical: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        color: 'black',
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
