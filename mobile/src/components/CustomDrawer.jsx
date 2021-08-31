import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera, Logo } from './common/Svgs'
import { GlobalContext } from '../contexts/GlobalContext'

export default function CustomDrawer({ navigation }) {
    const { navigate } = navigation
    const { user } = useContext(GlobalContext)

    function Navigate({ to, children }) {
        return <TouchableOpacity onPress={() => navigate(to)}>{children}</TouchableOpacity>
    }

    if (!user) return <View />

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Camera />

                <View style={{ marginLeft: 20, flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.fullName}>{user.fullName}</Text>
                    <Text style={styles.userType}>ИСПОЛНИТЕЛЬ</Text>
                </View>

            </View>

            <View style={{ marginTop: 30 }}>
                <Navigate to="MyOrders"><Text style={styles.tabText}>Мои задания</Text></Navigate>
                <Navigate to="OrdersList"><Text style={styles.tabText}>Все задания</Text></Navigate>
                <Text style={styles.tabText}>Все исполнители</Text>
                <Text style={styles.tabText}>Баланс</Text>
                <Text style={styles.tabText}>Диалоги</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={styles.tabText}>Меню</Text>
                <Text style={styles.tabText}>Уведомления</Text>
                <Text style={styles.tabText}>Редактирование профиля</Text>
                <Text style={styles.tabText}>Авторизация</Text>
                <Text style={styles.tabText}>Пользовательское соглашение</Text>
                <Text style={styles.tabText}>Выход</Text>
            </View>

            <Logo width={150} style={{ marginTop: 50 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 40,
        paddingTop: 40,
        backgroundColor: '#E1E5EF',
        flex: 1,
    },
    tabText: {
        fontSize: 17,
        height: 40,
        textAlignVertical: 'center',
    },
    fullName: {
        color: '#545E74',
        fontWeight: '700',
        fontSize: 17,
    },
    userType: {
        color: '#545E74',
        fontSize: 10,
    },
})
