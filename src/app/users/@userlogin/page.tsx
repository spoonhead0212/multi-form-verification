'use client'
import { useRouter } from 'next/router'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'

function LoginPage() {
    const [username, setUsername] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    const { login } = useAuth()
    
    const Router = useRouter()

    async function handleLogin() {
        const res = await fetch('/public/datas/users.json')
        const users = await res.json()

        const user = users.find((u: any) => u.username === username && u.password === password);

        if (user) {
            login(user)
            Router.push('/')
        } else {
            alert('invalid Credential')
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <br /><br />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage
