import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Button from '../../components/common/Button'
import { BottomImage, Logo } from '../../components/common/Svgs'

export default function ChooseRole() {
    const navigation = useNavigation()

    function navigate(Role) {
        navigation.navigate('Agreement', { Role })
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Logo width="100%" height={80} style={styles.logo} />
                <Button title="Я заказчик" onPress={() => navigate('customer')} />
                <Button title="Я исполнитель" onPress={() => navigate('executor')} />

                <Text style={styles.chooseRole}>
                    Для удобства дальнейшего использования приложения выберите роль пользователя
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.login}>
                    <Text style={styles.loginText}>У меня уже есть аккаунт. Войти</Text>
                </TouchableOpacity>
            </View>

            <BottomImage resizeMode="contain" style={styles.bottomImage} width="100%" />
        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        color: '#209cee',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    login: {
        marginTop: 50,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '80%',
    },
    chooseRole: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    logo: {
        width: '100%',
        marginBottom: 100,
        marginTop: -100,
    },
    bottomImage: {
        width: '100%',
        bottom: 0,
        position: 'absolute',
    },
})
