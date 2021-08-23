import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const GlobalContext = createContext({})

export function GlobalProvider({ children }) {
    const [user, setUser] = useState(null)
    const [headerOptions, setHeaderOptions] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('user').then((value) => {
            setUser(JSON.parse(value))
            setIsLoaded(true)
        })
    }, [])

    async function auth(newUser) {
        setUser(newUser)
        await AsyncStorage.setItem('user', JSON.stringify(newUser))
    }

    async function signOut() {
        setUser({})
        await AsyncStorage.removeItem('user')
    }

    return (
        <GlobalContext.Provider value={{
            user,
            auth,
            signOut,
            headerOptions,
            setHeaderOptions,
            setUser,
        }}>
            {isLoaded ? children : null}
        </GlobalContext.Provider>
    )
}
