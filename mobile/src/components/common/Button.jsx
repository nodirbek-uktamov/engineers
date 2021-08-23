import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Loader from './Loader'

export default function Button({
    onPress,
    color = '#E1E5EE',
    style,
    loading,
    outlineStyle,
    textStyle,
    title,
    icon,
    activeOpacity,
}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={loading}
                onPress={onPress}
                activeOpacity={activeOpacity}
                style={{
                    ...styles.button,
                    backgroundColor: color,
                    ...outlineStyle,
                    ...style,
                }}>
                {loading ? <Loader color="white" /> : (
                    <View style={styles.icon}>
                        {icon ? <View>{icon}</View> : null}

                        <Text style={{ ...styles.text, marginLeft: 10, ...textStyle }}>
                            {title}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        height: 66,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#535E73',
        fontSize: 18,
    },
})
