import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ChevronLeft, ChevronRight, TopImage } from '../../components/common/Svgs'

export default function Agreement({ route }) {
    const navigation = useNavigation()
    const { Role } = route.params

    return (
        <View style={styles.container}>
            {/* <Image resizeMode="stretch" source={topImage} style={styles.topImage} /> */}
            <TopImage resizeMode="contain" style={styles.topImage} width="100%" />

            <View style={styles.content}>
                <Text style={styles.title}>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Text>

                <ScrollView style={styles.termsContainer}>
                    <Text style={styles.termsText}>
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                        Agreement Agreement Agreement Agreement Agreement Agreement Agreement Agreement
                    </Text>
                </ScrollView>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                        <ChevronLeft style={{ width: 30, marginRight: 20 }} />
                        <Text style={{ color: '#394355', ...styles.buttonText }}>ОТКАЗАТЬСЯ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration', { Role })}
                        style={styles.button}>
                        <Text style={{ color: '#43BD46', ...styles.buttonText }}>ПРИНЯТЬ</Text>
                        <ChevronRight style={{ width: 30, marginLeft: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#535E73',
        textAlign: 'center',
        marginBottom: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topImage: {
        width: '100%',
        backgroundColor: '#ffffff',
        top: 0,
        position: 'absolute',
        height: 75,
    },
    termsText: {
        width: '100%',
    },
    content: {
        width: '80%',
    },
    termsContainer: {
        height: '50%',
        borderRightWidth: 2,
        borderRightColor: '#E1E5EE',
        paddingRight: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        textDecorationLine: 'underline',
    },
})
