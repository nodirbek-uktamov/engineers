import React from 'react'
import { ActivityIndicator } from 'react-native'

export default function Loader(props) {
    return <ActivityIndicator size={50} color="#000" {...props} />
}
