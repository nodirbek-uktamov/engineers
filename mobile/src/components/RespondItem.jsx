import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Trash2 } from 'react-native-feather'
import { GlobalContext } from '../contexts/GlobalContext'
import { usePostRequest } from '../hooks/request'
import { DELETE_RESPOND } from '../urls'
import { deleteAlert } from '../utils/helpers'
import { getDate } from '../utils/date'
import { domain } from '../utils/request'

export default function RespondItem({ item, onDelete }) {
    const { user } = useContext(GlobalContext)
    const deleteRespond = usePostRequest({ url: DELETE_RESPOND })

    function handleDeleteRespond(id) {
        deleteAlert(async () => {
            await deleteRespond.request({ params: { id } })
            onDelete()
        })
    }

    return (
        <View style={{ backgroundColor: item.userId === user.id ? '#f8f8f8' : 'white', padding: 10 }}>
            {item.userId === user.id ? <Text style={{ color: 'gray', marginBottom: 10 }}>Ваш отклик</Text> : null}

            <View style={styles.item}>
                <Image style={styles.image} source={{ uri: `${domain}/Upload/Default/DefaultImage.png` }} />
                {/* TODO: fix image */}

                <View style={styles.flex}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.createdAt}>{getDate(item.created_at)}</Text>
                    </View>

                    <Text style={styles.name}>Name of User{/* TODO: fix name of user */}</Text>
                    <Text style={{ color: '#43BD46' }}>★ ★ ★ ★ {/* TODO: fix stars */}</Text>
                </View>
            </View>

            <Text style={styles.respondsText}>{item.text}</Text>

            {item.userId === user.id ? (
                <TouchableOpacity onPress={() => handleDeleteRespond(item.id)} style={styles.deleteRespond}>
                    <Trash2 color="#43BD46" width={25} height={25} />
                    <Text style={{ marginLeft: 5, color: 'gray' }}>Удалить отклик</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
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
    respondsText: {
        color: '#000000',
        marginBottom: 20,
    },
    item: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    deleteRespond: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 5,
    },
    image: {
        marginRight: 20,
        width: 70,
        height: 70,
        borderRadius: 100,
    },
})
