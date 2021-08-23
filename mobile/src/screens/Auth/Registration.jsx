import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Formik } from 'formik'
import Input from '../../components/common/Input'
import { required } from '../../utils/validators'
import { ChevronLeft, ChevronRight, TopImage } from '../../components/common/Svgs'
import { usePostRequest } from '../../hooks/request'
import { REGISTRATION } from '../../urls'
import { GlobalContext } from '../../contexts/GlobalContext'

export default function Registration({ route }) {
    const { Role } = route.params
    const navigation = useNavigation()
    const { auth } = useContext(GlobalContext)
    const initialValues = { FullName: '', UserName: '', PhoneNumber: '', City: '', Age: 0, Password: '' }
    const registration = usePostRequest({ url: REGISTRATION })
    const [error, setError] = useState('')

    async function onSubmit(data) {
        const { response, error: e } = await registration.request({
            params: { password: data.Password },
            data: { ...data, Role },
        })

        if (response.success) {
            setError('')
            auth(response.data)
            navigation.reset({ index: 0, routes: [{ name: 'OrdersList' }] })
            return
        }

        setError(response.text || '')
    }

    return (
        <View style={styles.container}>
            <TopImage resizeMode="contain" style={styles.topImage} width="100%" />

            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.content}>
                        <Text style={styles.title}>СОЗДАНИЕ ПРОФИЛЯ</Text>
                        <Text style={styles.role}>Я заказчик</Text>

                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                            {({ handleSubmit, setFieldValue }) => (
                                <View>
                                    <Input name="FullName" validate={required} label="ФИО" />

                                    <Input
                                        name="UserName"
                                        onChangeText={(value) => setFieldValue('UserName', value.replace(/\s/g, ''))}
                                        validate={required} label="Никнейм" />

                                    <Input name="PhoneNumber" keyboard="phone-pad" label="Телефонный номер" />
                                    <Input name="City" label="Город" />
                                    <Input name="Age" validate={required} keyboard="numeric" label="Возраст" />

                                    <Input
                                        autoCapitalize="none"
                                        name="Password"
                                        label="Пароль"
                                        eye
                                        validate={required}
                                        secureTextEntry />

                                    {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

                                    <View style={styles.buttons}>
                                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                                            <ChevronLeft style={{ width: 30, marginRight: 20 }} />
                                            <Text style={{ color: '#394355', ...styles.buttonText }}>НАЗАД</Text>
                                        </TouchableOpacity>

                                        {registration.loading ? <ActivityIndicator size="large" color="#000" style={styles.button} /> : (
                                            <TouchableOpacity
                                                onPress={handleSubmit}
                                                style={styles.button}>
                                                <Text style={{ color: '#43BD46', ...styles.buttonText }}>СОХРАНИТЬ</Text>
                                                <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    content: {
        marginTop: 100,
        width: '80%',
    },
    topImage: {
        width: '100%',
        backgroundColor: '#fff',
        top: 0,
        position: 'absolute',
        zIndex: 100,
        height: 75,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#535E73',
        textAlign: 'center',
        marginBottom: 5,
    },
    role: {
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 50,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 30,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 155,
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
    },
})
