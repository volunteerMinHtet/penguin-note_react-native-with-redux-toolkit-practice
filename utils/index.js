export const adjustUrlPath = (path) => {
    return path.startsWith('/') ? path.slice(1) : path
}
