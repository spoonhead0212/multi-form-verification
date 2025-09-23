'use client'
import { useState, createContext, useContext, ReactNode } from "react"

interface user {
    id: number;
    username: string;
    name: string;
    email: string;
}
// User shape

interface AuthContextType {
    user: user | null;
    login: (user: user) => void;
    logout: () => void;
}
// AuthCOntext shape

const AuthContext = createContext<AuthContextType | undefined>(undefined)
// createContext and add the shape or undefined

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<user | null>(null)

    const login = (user: user) => setUser(user)
    const logout = () => null

    return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    // if (!context) throw new Error("useAuth must be used within AuthProvider")
    return context
}