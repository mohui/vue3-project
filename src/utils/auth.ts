// 存token
export function setToken(token: string) {
    return sessionStorage.setItem('token', token)
}

// 取token
export function getToken() {
    return sessionStorage.getItem('token')
}

// 删除token
export function removeToken() {
    return sessionStorage.removeItem('token')
}