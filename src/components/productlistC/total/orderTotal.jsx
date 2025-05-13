import { overallCart } from '@/AllSlices/productsSlice/productsSlice'
import React from 'react'
import { useSelector } from 'react-redux'

function OrderTotal() {

    const overallCartList = useSelector(overallCart)
    
    const cartTotalAmount = overallCartList.map(oc => oc.priceUpdate).reduce((acc, cur) => acc + cur, 0)

    const orderTotal = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-Between',
        alignItems: 'center',
        paddingBlock: '1.5rem',
    }

    return (
        <div style={orderTotal}>
            <p
            style={{
                color: 'hsl(12, 20%, 44%)',
                fontSize: '12px',
                paddingInline: '1rem'
            }}
            >Order Total</p>
            <p
            style={{
                color: 'hsl(14, 65%, 9%)',
                fontSize: '20px',
                fontWeight: '700'
            }}
            >{`$${cartTotalAmount}`}</p>
        </div>
    )
}

export default OrderTotal
