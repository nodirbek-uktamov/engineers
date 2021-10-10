import React, { useContext } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Formik } from 'formik'
import Input from '../components/common/Input'
import { required } from '../utils/validators'
import { ChevronRight } from '../components/common/Svgs'
import Header from '../components/Header'
import { GlobalContext } from '../contexts/GlobalContext'
import { usePutRequest } from '../hooks/request'
import { USER_UPDATE } from '../urls'

export default function ChangeProfile() {
    const { user, auth } = useContext(GlobalContext)
    const initialValues = { FullName: user.fullName, City: user.city, Age: user.age }
    const updateUser = usePutRequest({ url: USER_UPDATE.replace('{id}', user.id) })

    async function onSubmit(data) {
        updateUser.setResponse({})
        const { response } = await updateUser.request({ data: { ...user, ...data } })

        if (response.success) auth(response.data)
    }

    return (
        <View style={styles.container}>
            <Header title="ИЗМЕНИТЬ ПРОФИЛЬ" />

            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.content}>
                        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                            {({ handleSubmit }) => (
                                <View>
                                    <Input name="FullName" validate={required} label="ФИО" />
                                    <Input name="City" label="Город" />
                                    <Input name="Age" validate={required} keyboard="numeric" label="Возраст" />

                                    {updateUser.response?.success
                                        ? <Text style={{ color: '#43BD46' }}>Ваш профиль успешно изменен</Text>
                                        : null}

                                    <View style={styles.buttons}>
                                        {!updateUser.loading ? (
                                            <TouchableOpacity
                                                onPress={handleSubmit}
                                                style={styles.button}>
                                                <Text style={{ color: '#43BD46', ...styles.buttonText }}>
                                                    СОХРАНИТЬ
                                                </Text>

                                                <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                                            </TouchableOpacity>
                                        ) : <ActivityIndicator size="large" color="#000" style={styles.button} />}
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
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 50,
    },
    content: {
        marginTop: 50,
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
        alignItems: 'flex-end',
        width: '100%',
        marginVertical: 10,
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
