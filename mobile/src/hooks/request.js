import { useEffect, useState, useContext } from 'react'
import baseAxios, { domain } from '../utils/request'
import { GlobalContext } from '../contexts/GlobalContext'

export function usePostRequest(options = {}) {
    return useRequest({ method: 'POST', ...options })
}

export function usePutRequest(options = {}) {
    return useRequest({ method: 'PUT', ...options })
}

export function useGetRequest(options = {}) {
    return useRequest({ method: 'GET', ...options })
}

export function useDeleteRequest(options = {}) {
    return useRequest({ method: 'DELETE', ...options })
}

export function useRequest(options = {}) {
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const { token, signOut } = useContext(GlobalContext)

    async function request(overrideOptions = {}, sync = false) {
        setLoading(true)

        try {
            const qwe = await baseAxios({
                // headers: { Authorization: token ? `Bearer ${token}` : undefined },
                ...options,
                ...overrideOptions,
            })
            if (!sync) setResponse(qwe.data)
            return { response: qwe.data, success: true }
        } catch (e) {
            setError(e.response || {})
            if (e.response?.status === 401) {
                signOut()
            }

            return { error: e.response, success: false }
        } finally {
            if (!sync) setLoading(false)
        }
    }

    return { loading, request, error, response, setResponse, setError, setLoading }
}

export function useLoad(options, dependencies = []) {
    const request = useRequest({ method: 'GET', ...options })

    useEffect(() => {
        request.request()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

    return request
}

export function useImageRequest(options) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const { token } = useContext(GlobalContext)

    async function request({ data }) {
        try {
            setLoading(true)
            // axios.defaults.headers = {
            //     Authorization: `Bearer ${token}`,
            //     Accept: 'application/json',
            //     'Content-Type': 'multipart/form-data',
            // }
            const imageResponse = await fetch(`${domain}/api/${options.url}`, {
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            })

            const result = await imageResponse.json()
            return { response: result, success: true }
        } catch (e) {
            setError(e)
            return { error: e }
        } finally {
            setLoading(false)
        }
    }

    return { request, response, setResponse, error, setError, loading, setLoading }
}
