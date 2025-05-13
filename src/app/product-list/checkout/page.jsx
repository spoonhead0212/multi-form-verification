'use client'
import OrderConfirm from '@/components/productlistC/orderConfirm/orderConfirm'
import style from './checkout.module.css'

function Checkout() {
  return (
    <div className={style.checkoutMainPage}>
      <OrderConfirm />
    </div>
  )
}

export default Checkout
