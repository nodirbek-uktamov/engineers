import React, { useEffect, useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import useDebounce from '../../hooks/useDebounce'
import { Search as SearchIcon } from './Svgs'

export default function Search({ wrapperStyle, onSearch, placeholderTextColor = '#000000' }) {
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        onSearch(value)
        // eslint-disable-next-line
    }, [debouncedValue])

    return (
        <View style={wrapperStyle}>
            <SearchIcon style={styles.icon} />

            <TextInput
                name="search"
                type="search"
                value={value}
                onChangeText={setValue}
                placeholder="Поиск..."
                placeholderTextColor={placeholderTextColor}
                style={styles.search} />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        paddingLeft: 60,
        color: '#000000',
        backgroundColor: '#f4f6f9',
    },
    icon: {
        position: 'absolute',
        zIndex: 100,
        left: 20,
    },
})
