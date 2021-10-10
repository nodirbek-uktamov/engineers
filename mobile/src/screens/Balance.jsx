import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
import { getDate } from '../utils/date'

export default function Balance() {
    const history = [
        { amount: 10, id: 1, date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { amount: 999, id: 2, date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { amount: 25300, id: 3, date: new Date(), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ]

    return (
        <View style={styles.container}>
            <Header title="БАЛАНС" />

            <ScrollView style={{ marginTop: 40 }}>
                {history.map((item) => (
                    <TouchableOpacity onPress={() => { /* TODO: write this function */ }} style={styles.item}>
                        <Text>{getDate(item.date)}</Text>

                        {item.description ? (
                            <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
                        ) : null}

                        <Text style={styles.amount}>{item.amount} ₽</Text>
                    </TouchableOpacity>
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
    item: {
        marginBottom: 30,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
    description: {
        color: '#000000',
        fontSize: 16,
        marginTop: 10,
    },
    amount: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
})
