import Image from 'next/image'
import React from 'react'

function EmptyCart() {
    return (
        <div
        style={{
            width: '100%',
            textAlign: 'center'
        }}
        >
            <Image 
            style={{
                width: '100%',
                height: '150px'
            }}
                src='./images/productsMedia/illustration-empty-cart.svg'
                width={100}
                height={100}
                alt='Empty cart'
                >
            </Image>
            <p
            style={{
                color: 'var(--Product-list-Rose-400)',
                fontSize: '14px',
                fontWeight: '600'

            }}
            >Your added items will appear here</p>
        </div>
    )
}

export default EmptyCart
