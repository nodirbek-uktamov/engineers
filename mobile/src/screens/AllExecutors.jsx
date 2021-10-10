import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Header from '../components/Header'
import { useLoad } from '../hooks/request'
import { USERS_LIST } from '../urls'
import ExecutorItem from '../components/ExecutorItem'

export default function AllExecutors() {
    const users = useLoad({ url: USERS_LIST }) // TODO: change api

    return (
        <View style={styles.container}>
            <Header title="ВСЕ ИСПОЛНИТЕЛИ" />

            <ScrollView style={{ marginTop: 40 }}>
                {users.response?.data?.map((item) => (
                    <ExecutorItem item={item} />
                ))}
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
})
