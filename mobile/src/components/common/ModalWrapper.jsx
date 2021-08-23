import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ModalWrapper({ children }) {
    return (
        <View style={styles.outterWrapper}>
            <View style={styles.wrapper}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outterWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 15,
        zIndex: 10,
    },
})
