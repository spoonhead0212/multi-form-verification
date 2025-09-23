'use client'
// import OrderConfirm from '@/components/productlistC/orderConfirm/orderConfirm'
import style from './modal.module.css'
import React from 'react'
import { usePathname } from 'next/navigation'
import OrderConfirm from '../../../../components/productlistC/orderConfirm/orderConfirm'

function Checkout() {

  const pathName = usePathname()

  return (
    <dialog
    className={style.checkoutModal}
    open>
        <OrderConfirm pathName={pathName}/>
    </dialog>
  )
}

export default Checkout
