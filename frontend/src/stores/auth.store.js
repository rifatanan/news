import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useAuthStore = create()(devtools((set) => {
    const read = (key) => (typeof window !== 'undefined' ? localStorage.getItem(key) : null)

    const initialToken = read('user');
    const initialName = read('userName');
    const initialEmail = read('userEmail');
    const initialNews = read('news');
    const categoryOption = [
        { name: "international", path: "/international" },
        { name: "sports", path: "/sports" },
        { name: "business", path: "/business" },
        { name: "technology", path: "/technology" },
        { name: "intertainment", path: "/entertainment" },
        { name: "health", path: "/health" },
        { name: "science", path: "/science" },
        { name: "others", path: "/others" }
    ]

    return ({
        token: initialToken,
        isAuthenticated: !!initialToken,
        userName: initialName || null,
        userEmail: initialEmail || null,
        news: initialNews || "",
        categoryOption,

        setToken: (token) => {
            if (typeof window !== 'undefined') localStorage.setItem('user', token)
            set({ token, isAuthenticated: true })
        },

        setUser: (name, email) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('userName', name);
                localStorage.setItem('userEmail', email || '');
            }
            set({ userName: name, userEmail: email })
        },

        clearToken: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
            }
            set({ token: null, isAuthenticated: false, userName: null, userEmail: null })
        },

        fetchUsers: async () => {
            try {
                const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}/all-news`);

                if (!result.ok) throw new Error('Failed to News.');
                const data = await result?.json();

                console.log('data', data)
                
                // Update state with the fetched data
                set({ news: data?.data });
            } catch (err) {
                set({ error: err.message });
            }
        },
    })
}))

export default useAuthStore