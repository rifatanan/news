import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useAuthStore = create()(devtools((set) => ({
    token: typeof window !== 'undefined' ? localStorage.getItem('user') : null,
    isAuthenticated: !!(typeof window !== 'undefined' && localStorage.getItem('user')),
    userName: null,
    userEmail: null,

    setToken: (token) => {
        if (typeof window !== 'undefined') localStorage.setItem('user', token)
        set({ token, isAuthenticated: true })
    },

    setUser: (name, email) => {
        set({ userName: name, userEmail: email })
    },

    clearToken: () => {
        if (typeof window !== 'undefined') localStorage.removeItem('user')
        set({ token: null, isAuthenticated: false, userName: null, userEmail: null })
    }
})))

export default useAuthStore