import React, { useContext, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Formik } from 'formik'
import Input from '../../components/common/Input'
import { required } from '../../utils/validators'
import { ChevronLeft, ChevronRight, TopImage } from '../../components/common/Svgs'
import { usePostRequest } from '../../hooks/request'
import { LOGIN } from '../../urls'
import { GlobalContext } from '../../contexts/GlobalContext'

export default function Login() {
    const navigation = useNavigation()
    const { auth } = useContext(GlobalContext)
    const initialValues = { userName: '', password: '' }
    const login = usePostRequest({ url: LOGIN })
    const [error, setError] = useState('')

    async function onSubmit(data) {
        setError('')
        const { response } = await login.request({ params: data })

        if (response?.success) {
            auth(response.data)
            navigation.reset({ index: 0, routes: [{ name: 'OrdersList' }] })
            return
        }

        setError('Никнейм или пароль не правильно')
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
                                    <Input
                                        name="userName"
                                        onChangeText={(value) => setFieldValue('userName', value.replace(/\s/g, ''))}
                                        validate={required} label="Никнейм" />

                                    <Input
                                        autoCapitalize="none"
                                        name="password"
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

                                        {login.loading ? <ActivityIndicator size="large" color="#000" style={styles.button} /> : (
                                            <TouchableOpacity
                                                onPress={handleSubmit}
                                                style={styles.button}>
                                                <Text style={{ color: '#43BD46', ...styles.buttonText }}>ВОЙТИ</Text>
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
        width: 110,
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
    },
})
