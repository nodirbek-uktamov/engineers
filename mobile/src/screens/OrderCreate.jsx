import React, { useContext, useState, Fragment } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { Formik } from 'formik'
import MapView from 'react-native-maps'
import { Delete } from 'react-native-feather'
import { useNavigation } from '@react-navigation/core'
import Header from '../components/Header'
import { GlobalContext } from '../contexts/GlobalContext'
import Input, { styles as inputStyles } from '../components/common/Input'
import { ChevronRight, Location, Marker } from '../components/common/Svgs'
import { required } from '../utils/validators'
import { usePostRequest } from '../hooks/request'
import { CREATE_ORDER } from '../urls'
import Loader from '../components/common/Loader'

const { width } = Dimensions.get('window')

export default function OrderCreate() {
    const { user } = useContext(GlobalContext)
    const [showMap, setShowMap] = useState(false)
    const createOrder = usePostRequest({ url: CREATE_ORDER })
    const navigation = useNavigation()

    async function onSubmit(data, actions) {
        if (createOrder.loading) return
        const { response } = await createOrder.request({ data: { ...data, OwnerId: user.id } })
        actions.resetForm()
        navigation.navigate('MyOrders')
    }

    return (
        <View style={styles.container}>
            <Header style={{ marginBottom: 40 }} title="СОЗДАНИЕ ЗАДАНИЯ" />

            <ScrollView>
                <Formik onSubmit={onSubmit} initialValues={{ Name: '', Description: '', Longitude: 0, Latitude: 0, Cost: '' }}>
                    {({ setFieldValue, values, handleSubmit }) => (
                        <View style={{ flex: 1 }}>
                            {!showMap ? (
                                <View>
                                    <Input name="Name" label="ЗАГОЛОВОК" validate={required} />
                                    <Input name="Description" label="ОПИСАНИЕ ЗАДАНИЯ" multiline validate={required} />
                                </View>
                            ) : null}

                            <Text style={inputStyles.label}>АДРЕС</Text>

                            <TouchableOpacity
                                onPress={() => setShowMap(true)}
                                style={[inputStyles.wrapper, styles.addressWrapper]}>
                                <Location />
                            </TouchableOpacity>

                            {values.Latitude && !showMap ? (
                                <TouchableOpacity onPress={() => {
                                    setFieldValue('Latitude', '')
                                    setFieldValue('Longitude', '')
                                }} style={styles.clearAddress}>
                                    <Delete width={30} height={30} color="red" style={{ marginRight: 10 }} />
                                    <Text style={inputStyles.label}>ОЧИСТИТЬ АДРЕСА</Text>
                                </TouchableOpacity>
                            ) : null}

                            {!showMap ? <Input label="ЦЕНА" name="Cost" keyboard="number-pad" validate={required} /> : null}

                            {showMap ? (
                                <View style={{ flex: 1 }}>
                                    <Marker style={styles.marker} />

                                    <MapView
                                        onRegionChangeComplete={({ latitude, longitude }) => {
                                            setFieldValue('Latitude', latitude)
                                            setFieldValue('Longitude', longitude)
                                        }}
                                        showsUserLocation
                                        style={{ height: 500 }}>
                                        <Marker
                                            coordinate={{ latitude: values.Longitude, longitude: values.Latitude }} />
                                    </MapView>

                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity
                                            onPress={() => setShowMap(false)}
                                            style={styles.button}>
                                            <Text style={styles.buttonText}>СОХРАНИТЬ</Text>
                                            <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ) : null}

                            {!showMap ? (
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={[styles.button, { marginBottom: 20 }]}>
                                        {!createOrder.loading ? (
                                            <Fragment>
                                                <Text style={styles.buttonText}>ОПУБЛИКОВАТЬ</Text>
                                                <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                                            </Fragment>
                                        ) : <Loader size="large" />}
                                    </TouchableOpacity>
                                </View>
                            ) : null}
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    clearAddress: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressWrapper: {
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 50,
    },
    changeViewType: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    changeViewTypeText: {
        marginBottom: 5,
        marginLeft: 20,
        textDecorationLine: 'underline',
        color: '#545E74',
        fontWeight: 'bold',
    },
    deleteOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 5,
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
        color: '#43BD46',
    },
    marker: {
        position: 'absolute',
        top: 200,
        zIndex: 100,
        left: width * 0.5 - 75,
    },
})
