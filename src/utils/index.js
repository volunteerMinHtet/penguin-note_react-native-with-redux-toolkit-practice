import Constants from 'expo-constants'

export const getBaseServerApiUrl = () => {
    const DEFAULT_SERVER_API_URL_V1 = 'http://192.168.99.57:80/api/v1'
    const { SERVER_API_URL = DEFAULT_SERVER_API_URL_V1 } = Constants.manifest.extra
    return SERVER_API_URL
}

export const adjustUrlPath = (path) => {
    return path.startsWith('/') ? path.slice(1) : path
}
