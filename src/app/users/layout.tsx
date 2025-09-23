import React from 'react'
import { AuthProvider } from '../../context/AuthContext'

function Layout({children, userlogin, about} : {
    children: React.ReactNode
    userlogin: React.ReactNode
    about: React.ReactNode
}) {
  return (
    <AuthProvider>
        {children}
        {/* {userlogin} */}
        <p>Footer</p>
    </AuthProvider>
  )
}

export default Layout
