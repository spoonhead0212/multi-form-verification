'use client'
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/navigation"

function UserHome() {
    const router = useRouter()
    const {user, logout} = useAuth()
    
    return (
        <div style={{backgroundColor: 'black', width: '100%', height: '100vh'}}>
            <h1>Home page (No user yet)</h1>
            {user ? (
                <div>
                <p>Welcome, {user.name}</p>
                <p>Email: {user.email}</p>
                <button onClick={logout}>Logout</button>
                </div>
                ) : (
                    <div>
                    <p>You are not logged in.</p>
                    <button onClick={() => router.push('/users/userlogin')}>Go to Login</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserHome
