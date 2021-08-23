import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function ProgressBar({ maxValue = 100, remained, color = '#24D8AF', showPercent = true }) {
    const percent = parseInt((100 / maxValue) * (maxValue - remained), 10)

    return (
        <View style={styles.progressbar}>
            <View style={styles.progressbarLine}>
                <View style={styles.progressbarEmpty}>
                    <View style={[styles.progressbarFill, { width: `${percent}%`, backgroundColor: color }]} />
                </View>
            </View>
            {showPercent ? <Text style={styles.progressbarText}>{`${percent}%`}</Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({

    progressbar: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    progressbarEmpty: {
        backgroundColor: '#F3F3F4',
        height: 8,
        width: '100%',
    },
    progressbarFill: {
        height: 8,
    },

    progressbarLine: {
        flex: 1,
        height: 8,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 8,
        marginVertical: 8,
    },
    progressbarText: {
        color: '#919198',
        marginLeft: 9,
    },
})
