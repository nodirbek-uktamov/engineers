import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'

function ErrorItem({ field, error, style, fieldOff }) {
    if (field === 'nonFieldErrors' || field === 'detail') {
        return <Text style={styles.error}>{error}</Text>
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {fieldOff ? null : <Text style={{ ...styles.error, ...style }}>{field}</Text>}
            <Text style={{ flexShrink: 1, ...styles.error, ...style }}>{error[0]}</Text>
        </View>
    )
}

export default function ServerError({ error, style, fieldOff }) {
    if (!error || !error.data) return <Fragment />

    return (
        <View>
            {typeof error.data === 'string' ? (
                <ErrorItem style={style} field="detail" fieldOff={fieldOff} error="Неизвестная ошибка" />
            ) : Object.keys(error.data).map((key) => (
                <ErrorItem style={style} key={key} fieldOff={fieldOff} field={key} error={error.data[key]} />
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    error: {
        color: '#ff0000',
        marginTop: 10,
        marginLeft: 5,
    },
})
