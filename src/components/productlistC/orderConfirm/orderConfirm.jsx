'use client'
import { overallCart } from '@/AllSlices/productsSlice/productsSlice'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '@/AllSlices/productsSlice/productsSlice'
import { useEffect } from 'react'
import Image from 'next/image'
import style from './orderConfirm.module.css'
import OrderTotal from '../total/orderTotal'
import { useRouter } from 'next/navigation'

function OrderConfirm( {pathName} ) {

    useEffect(() => {
        if (pathName === '/product-list/checkout') {
            document.body.classList.add('scroll')
          } else {
            document.body.classList.remove('scroll')
          }
      
          // Cleanup in case the component unmounts
          return () => {
            document.body.classList.remove('scroll')
          }
    }, [pathName])
    

    const router = useRouter()
    const dispatch = useDispatch()

    const Back = () => {
        dispatch(clearCart())
        router.back()
    }

    const overallCartList = useSelector(overallCart)

    return (
        <div className={style.insideModal}>
            <div className={style.modalTop}>
                <Image 
                    src='/images/productsMedia/icon-order-confirmed.svg'
                    width={50}
                    height={50}
                    alt='order confirm icon'
                    >
                </Image>
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food</p>
            </div>
            <ul
            className={style.insideItem}
            >
                {overallCartList.map(cl => (
                    <li 
                    className={style.itemBx}
                    key={cl.id}>
                        <div className={style.modalItem}>
                            <Image 
                                src={cl.image.thumbnail}
                                width={50}
                                height={50}
                                alt={cl.name}
                                >
                            </Image>
                            <div className={style.modalItemdetails}>
                                <p>{cl.name}</p>
                                <p className={style.modalItemInside}>
                                    <span>{`${cl.quantity}x`}</span>
                                    <span>{`@$${cl.price}`}</span>
                                </p>
                            </div>
                        </div>
                        <span className={style.modalItemPrice}>{`$${cl.priceUpdate}`}</span>
                    </li>
                ))}
            </ul>
            <OrderTotal />
            <button 
            className={style.newOrder}
            onClick={Back}>Start new Order</button>
        </div>
    )
}

export default OrderConfirm
