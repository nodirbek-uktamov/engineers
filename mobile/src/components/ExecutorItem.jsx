import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Mail } from 'react-native-feather'
import { useNavigation } from '@react-navigation/core'
import { domain } from '../utils/request'

export default function ExecutorItem({ item }) {
    const navigation = useNavigation()
    const imageUri = 'Upload/Default/DefaultImage.png' // TODO: fix image

    function openChat() {
        console.log('open chat') // TODO: write this function
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
            <View style={styles.userInfo}>
                <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

                <View style={styles.userTexts}>
                    <Text>{item.city}</Text>
                    <Text style={styles.name}>{item.fullName}</Text>
                    <Text style={{ color: '#43BD46' }}>{'★ '.repeat(item.rating || 4)} {/* TODO: fix rating */}</Text>

                    {item.description ? (
                        <Text style={{ ...styles.description }}>{item.description}</Text>
                    ) : null}
                </View>
            </View>

            <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                <TouchableOpacity
                    onPress={openChat}
                    style={styles.button}>
                    <Text style={styles.buttonText}>НАПИСАТЬ</Text>
                    <Mail color="#43BD46" width={35} height={35} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
        color: '#43BD46',
        marginRight: 20,
    },
    userInfo: {
        flexDirection: 'row',
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
