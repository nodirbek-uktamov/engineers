import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Formik } from 'formik'
import { ChevronRight } from './common/Svgs'
import { GlobalContext } from '../contexts/GlobalContext'
import Input from './common/Input'
import { required } from '../utils/validators'
import { usePostRequest } from '../hooks/request'
import { SEND_RESPOND } from '../urls'

export default function CreateRespond({ orderId, onCreate }) {
    const createRespond = usePostRequest({ url: SEND_RESPOND })
    const { user } = useContext(GlobalContext)

    async function onCreateRespond(data, actions) {
        if (createRespond.loading) return
        await createRespond.request({ data: { Text: data.Text?.trim(), orderId, UserId: user.id } })
        actions.resetForm()
        onCreate()
    }

    return (
        <Formik onSubmit={onCreateRespond} initialValues={{ Text: '' }}>
            {({ handleSubmit }) => (
                <View style={{ marginBottom: 30 }}>
                    <Input label="Ваш отклик на заказ" multiline name="Text" validate={required} />

                    <View style={{ alignItems: 'flex-end' }}>
                        {!createRespond.loading ? (
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Откликнуться</Text>
                                <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                            </TouchableOpacity>
                        ) : <ActivityIndicator size="large" color="#000" style={styles.button} />}
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 170,
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
        color: '#43BD46',
    },
})
