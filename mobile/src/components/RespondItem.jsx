import React, { useContext, Fragment, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Trash2 } from 'react-native-feather'
import { Formik } from 'formik'
import StarRating from 'react-native-stars'
import { useNavigation } from '@react-navigation/core'
import { GlobalContext } from '../contexts/GlobalContext'
import { usePostRequest } from '../hooks/request'
import { DELETE_RESPOND, ORDER_COMPLETE, SELECT_EXECUTOR, SEND_REVIEW } from '../urls'
import { surveyAlert } from '../utils/helpers'
import { getDate } from '../utils/date'
import { domain } from '../utils/request'
import { ChevronRight } from './common/Svgs'
import Loader from './common/Loader'
import Input from './common/Input'
import { required } from '../utils/validators'

export default function RespondItem({ item, onDelete, isOwner, order, onChange }) {
    const navigation = useNavigation()
    const { user } = useContext(GlobalContext)
    const deleteRespond = usePostRequest({ url: DELETE_RESPOND })
    const selectExecutor = usePostRequest({ url: SELECT_EXECUTOR })
    const completeOrder = usePostRequest({ url: ORDER_COMPLETE.replace('{id}', order.id) })
    const sendReview = usePostRequest({ url: SEND_REVIEW })
    const [isReviewFormShown, setIsReviewFormShown] = useState(false)
    const [rating, setRating] = useState(5)

    function handleDeleteRespond(id) {
        surveyAlert(async () => {
            await deleteRespond.request({ params: { id } })
            onDelete()
        }, 'Вы действительно хотите удалить?')
    }

    function executorSelectHandler() {
        if (selectExecutor.loading) return

        surveyAlert(async () => {
            await selectExecutor.request({ data: { ...order, inWorkId: item.id }, params: { userId: item.userId } })
            onChange()
        }, 'Вы действительно хотите выбрать этого исполнителя?')
    }

    function completeOrderHandler() {
        surveyAlert(async () => {
            await completeOrder.request({ data: { ...order, inWorkId: item.id }, params: { userId: item.userId } })
            onChange()
        }, 'Вы действительно хотите завершить задание?')
    }

    function onSendReview(data) {
        sendReview.request({
            data: {
                UserId: item.userId,
                OrderId: order.id,
                Text: data.Text,
                Rating: rating,
            },
        })
    }

    return (
        <View style={{ backgroundColor: item.userId === user.id ? '#f8f8f8' : 'white', padding: 10 }}>
            {item.userId === user.id ? <Text style={{ color: 'gray', marginBottom: 10 }}>Ваш отклик</Text> : null}

            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.userId })}>
                    <Image style={styles.image} source={{ uri: `${domain}/Upload/Default/DefaultImage.png` }} />
                </TouchableOpacity>
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

            {isOwner && order.inWorkId === 0 ? (
                <View style={{ alignItems: selectExecutor.loading ? 'center' : 'flex-end' }}>
                    <TouchableOpacity
                        onPress={executorSelectHandler}
                        style={styles.button}>
                        {!selectExecutor.loading ? (
                            <Fragment>
                                <Text style={styles.buttonText}>ВЫБРАТЬ ИСПОЛНИТЕЛЕМ</Text>
                                <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                            </Fragment>
                        ) : <Loader />}
                    </TouchableOpacity>
                </View>
            ) : null}

            {/* TODO: remake this criteria */}
            {isOwner && order.inWorkId !== 0 ? (
                <View style={{ alignItems: completeOrder.loading ? 'center' : 'flex-end' }}>
                    <TouchableOpacity
                        onPress={completeOrderHandler}
                        style={styles.button}>
                        {!completeOrder.loading ? (
                            <Fragment>
                                <Text style={styles.buttonText}>ЗАВЕРШИТЬ ЗАДАНИЕ</Text>
                                <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                            </Fragment>
                        ) : <Loader />}
                    </TouchableOpacity>
                </View>
            ) : null}

            {/* Order completed */}
            {isOwner && order.state === 0 && !sendReview.response?.success ? (
                <Formik initialValues={{ Text: '' }} onSubmit={onSendReview}>
                    {({ handleSubmit }) => (
                        <View>
                            {isReviewFormShown ? (
                                <View style={{ marginBottom: 30 }}>
                                    <Input name="Text" multiline label="Отзыв" validate={required} />

                                    <StarRating
                                        default={5}
                                        update={setRating}
                                        spacing={20}
                                        starSize={40}
                                        count={5} />
                                </View>
                            ) : null}

                            <View style={{ alignItems: sendReview.loading ? 'center' : 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={isReviewFormShown ? handleSubmit : () => setIsReviewFormShown(true)}
                                    style={styles.button}>
                                    {!sendReview.loading ? (
                                        <Fragment>
                                            <Text style={{ ...styles.buttonText, color: '#43BD46' }}>
                                                {isOwner ? 'ОСТАВИТЬ ОТЗЫВ' : 'ПОЖАЛОВАТЬСЯ'}
                                            </Text>

                                            <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                                        </Fragment>
                                    ) : <Loader />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            ) : null}

            {sendReview.response?.success ? (
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <Text style={{ ...styles.buttonText, color: '#43BD46', marginRight: 45 }}>ОТЗЫВ ОТПРАВЛЕН</Text>
                </View>
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
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
        color: '#545E74',
    },
})
