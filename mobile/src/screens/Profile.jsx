import React, { useContext, useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Mail } from 'react-native-feather'
import { useIsFocused } from '@react-navigation/core'
import Header from '../components/Header'
import { domain } from '../utils/request'
import { useLoad } from '../hooks/request'
import { USER_DETAIL } from '../urls'
import Loader from '../components/common/Loader'
import { GlobalContext } from '../contexts/GlobalContext'
import { Reviews } from '../components/common/Svgs'
import ReviewItem from '../components/ReviewItem'

export default function Profile({ route }) {
    const { user: localUser } = useContext(GlobalContext)
    const { userId } = route.params
    const userDetail = useLoad({ url: USER_DETAIL.replace('{id}', userId), params: { userId } })
    const user = userDetail.response?.data
    const isFocused = useIsFocused()
    const imageUri = user?.image || 'Upload/Default/DefaultImage.png' // TODO: fix image

    useEffect(() => {
        if (isFocused) {
            userDetail.setResponse(null)
            userDetail.request()
        }
    }, [isFocused, userId])

    function openChat() {
        console.log('open chat') // TODO: write this function
    }

    return (
        <View style={styles.container}>
            <Header title="ПРОФИЛЬ" />

            {user ? (
                <ScrollView>
                    <View style={styles.userInfo}>
                        <Image style={styles.image} source={{ uri: `${domain}/${imageUri}` }} />

                        <View style={styles.userTexts}>
                            <Text style={styles.name}>{user.fullName}</Text>
                            <Text style={styles.city}>{user.city}</Text>
                        </View>
                    </View>

                    {user.description ? <Text style={styles.description}>{user.description}</Text> : null}

                    {localUser.id !== userId ? (
                        <View style={{ alignItems: 'flex-end', marginTop: user.description ? 20 : 0 }}>
                            <TouchableOpacity
                                onPress={openChat}
                                style={styles.button}>
                                <Text style={styles.buttonText}>НАПИСАТЬ</Text>
                                <Mail color="#43BD46" width={35} height={35} />
                            </TouchableOpacity>
                        </View>
                    ) : null}

                    {(user.reviews || []).length > 0 ? (
                        <View style={{ marginTop: 20, marginBottom: 30 }}>
                            <View style={styles.reviewsTitleContainer}>
                                <Reviews />
                                <Text style={styles.reviewsTitle}>ОТЗЫВЫ</Text>
                            </View>

                            {(user.reviews || []).map((item) => (
                                <ReviewItem item={item} />
                            ))}
                        </View>
                    ) : null}
                </ScrollView>
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
