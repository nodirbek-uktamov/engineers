import React, { useContext, useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useIsFocused } from '@react-navigation/core'
import Header from '../components/Header'
import { Description, Map, Respond } from '../components/common/Svgs'
import { domain } from '../utils/request'
import { getDate } from '../utils/date'
import { RESPONDS_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import { GlobalContext } from '../contexts/GlobalContext'
import RespondItem from '../components/RespondItem'
import CreateRespond from '../components/CreateRespond'
import Loader from '../components/common/Loader'

export default function OrderDetail({ route }) {
    const { order } = route.params
    const { user } = useContext(GlobalContext)
    const responds = useLoad({ url: RESPONDS_LIST, params: { id: order.id } })
    const isRespondSend = responds.response?.data?.filter((i) => i.userId === user.id).length > 0
    const imageUri = order?.images?.split(';')[0] || 'Upload/Default/DefaultImage.png'
    const [tab, setTab] = useState('details')

    const isFocused = useIsFocused()

    useEffect(() => {
        if (!isFocused) setTab('details')
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Header title="ПОДПИСКИ" />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setTab('details')} style={styles.description}>
                    <Description />
                    <Text style={styles.descriptionText}>ОПИСАНИЕ</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setTab('map')} style={styles.map}>
                    <Map />
                    <Text style={styles.mapText}>КАРТА</Text>
                </TouchableOpacity>
            </View>

            {tab === 'details' ? (
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={styles.item}>
                        <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

                        <View style={styles.flex}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.createdAt}>{getDate(order.created_at)}</Text>
                                <Text style={styles.price}>{order.cost} ₽</Text>
                            </View>

                            <Text style={styles.name}>{order.name}</Text>
                            <Text style={styles.userName}>{order.ownerName}</Text>
                        </View>
                    </View>

                    <Text style={styles.orderDescription}>{order.description}</Text>

                    {responds.loading ? <Loader /> : (
                        <View style={styles.respondsTitleContainer}>
                            <Respond />
                            <Text style={styles.respondsTitle}>ОТКЛИКИ ({responds.response?.data?.length || 0})</Text>
                        </View>
                    )}

                    <View style={{ marginBottom: 20 }}>
                        {responds.response?.data?.map((item) => (
                            <RespondItem
                                key={item.id} onDelete={responds.request}
                                item={item} />
                        ))}
                    </View>

                    {!isRespondSend ? (
                        <CreateRespond onCreate={responds.request} orderId={order.id} />
                    ) : null}
                </ScrollView>
            ) : (
                <MapView
                    initialRegion={{
                        latitude: order.latitude,
                        longitude: order.longitude,
                        latitudeDelta: 0.045163783434134075,
                        longitudeDelta: 0.03352995961904526,
                    }}
                    showsUserLocation
                    style={{ flex: 0.8 }}>
                    <Marker
                        key={order.id}
                        title={order.name}
                        description={order.description}
                        coordinate={{ latitude: order.latitude, longitude: order.longitude }} />
                </MapView>
            )}
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
})
