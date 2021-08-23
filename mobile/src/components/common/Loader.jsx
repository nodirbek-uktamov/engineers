import React from 'react'
import { ActivityIndicator } from 'react-native'

export default function Loader({
    size = 'large',
    color = 'black',
    animating = true,
    hidesWhenStopped = true,
}) {
    return <ActivityIndicator size={size} color={color} animating={animating} hidesWhenStopped={hidesWhenStopped} />
}
