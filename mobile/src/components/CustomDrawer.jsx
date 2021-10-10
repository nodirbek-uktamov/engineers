import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera, Logo } from './common/Svgs'
import { GlobalContext } from '../contexts/GlobalContext'
import { surveyAlert } from '../utils/helpers'

export default function CustomDrawer({ navigation }) {
    const { user, signOut } = useContext(GlobalContext)

    function Navigate({ to, text }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(to)}>
                <Text style={styles.tabText}>{text}</Text>
            </TouchableOpacity>
        )
    }

    function logout() {
        surveyAlert(() => {
            signOut()
            navigation.navigate('ChooseRole')
        }, 'Вы действительно хотите выйти?')
    }

    if (!user) return <View />

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile', { userId: user.id })}
                style={{ flexDirection: 'row' }}>
                <Camera />

                <View style={{ marginLeft: 20, flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.fullName}>{user.fullName}</Text>
                    <Text style={styles.userType}>ИСПОЛНИТЕЛЬ</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: 30 }}>
                <Navigate to="MyOrders" text="Мои задания" />
                <Navigate to="OrdersList" text="Все задания" />
                <Navigate to="AllExecutors" text="Все исполнители" />
                <Navigate to="Balance" text="Баланс" />
                <Navigate to="Dialogs" text="Диалоги" />
            </View>

            <View style={{ marginTop: 30 }}>
                {/* <Text style={styles.tabText}>Меню</Text> */}
                <Text style={styles.tabText}>Уведомления</Text>
                <Navigate to="ChangeProfile" text="Редактирование профиля" />
                <TouchableOpacity onPress={logout}><Text style={styles.tabText}>Выход</Text></TouchableOpacity>
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
