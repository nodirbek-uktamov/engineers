import React from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Menu } from 'react-native-feather'
import { useNavigation } from '@react-navigation/core'
import { NotificationBell } from './common/Svgs'

export default function Header({ title }) {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}><Menu color="#545E74" width={40} height={40} /></TouchableOpacity>
            <Text style={{ color: '#43BD46', fontSize: 16 }}>{title}</Text>

            <View>
                <NotificationBell />

                <View style={styles.notificationsCount}>
                    <Text style={{ fontSize: 10, color: 'white' }}>1</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
        justifyContent: 'space-between',
    },
    notificationsCount: {
        position: 'absolute',
        right: -2,
        top: 3.6,
        width: 16,
        height: 16,
        backgroundColor: '#43BD46',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
