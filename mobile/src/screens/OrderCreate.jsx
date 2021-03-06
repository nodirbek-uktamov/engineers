import React, { useContext, useState, Fragment } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import { Formik, Field } from 'formik'
import MapView from 'react-native-maps'
import { Delete } from 'react-native-feather'
import { useNavigation } from '@react-navigation/core'
import { launchImageLibrary } from 'react-native-image-picker'
import Header from '../components/Header'
import { GlobalContext } from '../contexts/GlobalContext'
import Input, { styles as inputStyles } from '../components/common/Input'
import { Camera, ChevronRight, Location, Marker } from '../components/common/Svgs'
import { required } from '../utils/validators'
import { useImageRequest, usePostRequest } from '../hooks/request'
import { CREATE_ORDER, UPLOAD_ORDER_IMAGE } from '../urls'
import Loader from '../components/common/Loader'
import ValidationErrorMessage from '../components/common/ValidationErrorMessage'

const { width, height } = Dimensions.get('window')

const defaultFiles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
]

export default function OrderCreate() {
    const { user } = useContext(GlobalContext)
    const [showMap, setShowMap] = useState(false)
    const createOrder = usePostRequest({ url: CREATE_ORDER })
    const imageRequest = useImageRequest()
    const navigation = useNavigation()
    const [files, setFiles] = useState(defaultFiles)

    async function onSubmit(data, actions) {
        const filesData = new FormData()
        const filesList = files.filter((i) => !!i.file)

        filesList.map((item) => {
            filesData.append('files', {
                name: item.file.fileName,
                type: item.file.type,
                uri: item.file.uri,
            }, item.file.fileName)
        })

        if (createOrder.loading) return

        const { response } = await createOrder.request({ data: { ...data, OwnerId: user.id } })

        if (response?.success) {
            if (filesList.length > 0) {
                const orderId = response.data?.id
                const url = `${UPLOAD_ORDER_IMAGE.replace('{id}', orderId)}?orderId=${orderId}`

                await imageRequest.request({ url, data: filesData })
            }

            actions.resetForm()
            navigation.navigate('MyOrders')
        }
    }

    function openGallery(item) {
        if (item.file) {
            const newFiles = files.map((i) => {
                if (i.id === item.id) return { id: item.id }
                return i
            })

            setFiles(newFiles)
            return
        }

        launchImageLibrary({ mediaType: 'photo' }, (data) => {
            if (!data.uri) return

            const newFiles = files.map((i) => {
                if (i.id === item.id) return { ...i, file: data }
                return i
            })

            setFiles(newFiles)
        })
    }

    return (
        <View style={styles.container}>
            <Header style={{ marginBottom: 40 }} title="???????????????? ??????????????" />

            <ScrollView>
                <Formik onSubmit={onSubmit}
                    initialValues={{ Name: '', Description: '', Longitude: '', Latitude: '', Cost: '' }}>
                    {({ setFieldValue, values, handleSubmit }) => (
                        <View style={{ flex: 1 }}>
                            <View style={{ display: showMap ? 'none' : null }}>
                                <Input name="Name" label="??????????????????" validate={required} />
                                <Input name="Description" label="???????????????? ??????????????" multiline validate={required} />
                            </View>

                            <Text style={inputStyles.label}>??????????</Text>

                            <TouchableOpacity
                                onPress={() => setShowMap(true)}
                                style={[inputStyles.wrapper, styles.addressWrapper]}>
                                <Location />
                            </TouchableOpacity>

                            <Field name="Longitude" validate={required}>
                                {() => <ValidationErrorMessage style={{ color: 'green', marginBottom: 15 }} name="Longitude" />}
                            </Field>

                            {values.Latitude && !showMap ? (
                                <TouchableOpacity onPress={() => {
                                    setFieldValue('Latitude', '')
                                    setFieldValue('Longitude', '')
                                }} style={styles.clearAddress}>
                                    <Delete width={30} height={30} color="red" style={{ marginRight: 10 }} />
                                    <Text style={inputStyles.label}>???????????????? ????????????</Text>
                                </TouchableOpacity>
                            ) : null}

                            <Input
                                wrapperStyle={{ marginTop: 10 }}
                                label="????????"
                                name="Cost"
                                keyboard="number-pad"
                                validate={required}
                                style={{ display: showMap ? 'none' : null }} />

                            {showMap ? (
                                <View style={{ flex: 1, marginTop: 15 }}>
                                    <Marker style={styles.marker} />

                                    <MapView
                                        onRegionChangeComplete={({ latitude, longitude }) => {
                                            setFieldValue('Latitude', latitude)
                                            setFieldValue('Longitude', longitude)
                                        }}
                                        showsUserLocation
                                        style={{ height: height / 2 }}>
                                        <Marker
                                            coordinate={{
                                                latitude: values.Longitude,
                                                longitude: values.Latitude,
                                            }} />
                                    </MapView>

                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity
                                            onPress={() => setShowMap(false)}
                                            style={styles.button}>
                                            <Text style={styles.buttonText}>??????????????????</Text>
                                            <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ) : null}

                            {!showMap ? (
                                <View style={{ flexDirection: 'row' }}>
                                    {files.map((item) => {
                                        if (item.file) {
                                            return (
                                                <TouchableOpacity activeOpacity={0.8} onPress={() => openGallery(item)}
                                                    style={{ flex: 1 }}>
                                                    <Image source={item.file}
                                                        style={{ marginRight: '5%', width: '95%', height: 70 }} />
                                                </TouchableOpacity>
                                            )
                                        }

                                        return (
                                            <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.8}
                                                onPress={() => openGallery(item)}>
                                                <Camera
                                                    withBackground={false}
                                                    style={{ backgroundColor: '#97A1BF', marginRight: '5%' }}
                                                    width="95%" />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            ) : null}

                            <Text style={{ color: 'red', marginTop: 20 }}>
                                {!createOrder.response?.success ? createOrder.response?.text : ''}
                            </Text>

                            {!showMap ? (
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={[styles.button, { marginBottom: 20 }]}>
                                        {!createOrder.loading ? (
                                            <Fragment>
                                                <Text style={styles.buttonText}>????????????????????????</Text>
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
        marginTop: 15,
    },
    addressWrapper: {
        justifyContent: 'flex-end',
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
