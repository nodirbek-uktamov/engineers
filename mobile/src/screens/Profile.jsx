import React, { Fragment, useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Mail, Trash2 } from 'react-native-feather'
import Header from '../components/Header'
import { domain } from '../utils/request'
import { useLoad } from '../hooks/request'
import { USER_DETAIL } from '../urls'
import Loader from '../components/common/Loader'
import { GlobalContext } from '../contexts/GlobalContext'
import { Reviews } from '../components/common/Svgs'
import OrderItem from '../components/OrderItem'
import { getDate } from '../utils/date'

export default function Profile({ route }) {
    const { user: localUser } = useContext(GlobalContext)
    const { userId } = route.params
    const userDetail = useLoad({ url: USER_DETAIL.replace('{id}', userId), params: { userId } })
    const user = userDetail.response?.data
    const imageUri = user?.image || 'Upload/Default/DefaultImage.png'

    function openChat() {
        console.log('open chat') // TODO: write this function
    }

    const asd = {
        id: 2,
        userId: '699f83cd-c29b-4e84-8263-9100315f48e4',
        orderId: 24,
        order: {
            id: 24,
            name: 'Ttgggtty',
            description: 'Tfgf',
            images: null,
            cost: 5555,
            longitude: 0,
            latitude: 0,
            state: 1,
            created_at: '2021-09-01T08:04:57.4648263',
            updated_at: '2021-09-01T08:04:57.4648369',
            ownerId: '699f83cd-c29b-4e84-8263-9100315f48e4',
            inWorkId: 0,
            inWork: null,
            reviews: [],
            responds: [],
        },
        text: 'Test Otziv na polzovatel',
        rating: 5,
        created_at: '2021-09-02T07:30:04.5151997',
        updated_at: '2021-09-02T07:30:04.5151891',
    }

    return (
        <View style={styles.container}>
            <Header title="ПРОФИЛЬ" />

            {user ? (
                <View>
                    <View style={styles.userInfo}>
                        <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

                        <View style={styles.userTexts}>
                            <Text style={styles.name}>{user.fullName}</Text>
                            <Text style={styles.city}>QWe QWE</Text>
                        </View>
                    </View>

                    {user.description ? <Text style={styles.description}>{user.description}</Text> : null}

                    {localUser.id === userId ? (
                        <View style={{ alignItems: 'flex-end', marginTop: user.description ? 20 : 0 }}>
                            <TouchableOpacity
                                onPress={openChat}
                                style={styles.button}>
                                <Text style={styles.buttonText}>НАПИСАТЬ</Text>
                                <Mail color="#43BD46" width={35} height={35} />
                            </TouchableOpacity>
                        </View>
                    ) : null}

                    <View>
                        <View style={styles.reviewsTitleContainer}>
                            <Reviews />
                            <Text style={styles.reviewsTitle}>ОТЗЫВЫ</Text>
                        </View>

                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={user.reviews || []}
                            renderItem={({ item }) => (
                                <Fragment>
                                    <View style={styles.userInfo}>
                                        <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

                                        <View style={styles.userTexts}>
                                            <Text>{getDate(item.created_at)}</Text>
                                            <Text style={styles.name}>Имя пользователя который поставил отзыв </Text>
                                            <Text style={{ color: '#43BD46' }}>★ ★ ★ ★ {/* TODO: fix stars */}</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.description}>{item.text}</Text>
                                </Fragment>
                            )} />
                    </View>
                </View>
            ) : null}

            {userDetail.loading
                ? <Loader style={{ marginTop: user ? 20 : 200 }} />
                : null}
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
        color: '#000000',
        fontSize: 16,
    },
    image: {
        marginRight: 20,
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    userInfo: {
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 30,
    },
    userTexts: {
        flex: 1,
        justifyContent: 'center',
    },
    city: {
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
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
    reviewsTitle: {
        marginLeft: 10,
        color: '#545E74',
        fontWeight: '700',
    },
    reviewsTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
