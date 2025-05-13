import React from 'react'

function Layout({children, modal}) {
  return (
    <div>
        {modal}
        {children}
    </div>
  )
}

export default Layout
