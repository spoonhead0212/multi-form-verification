'use client'
import Cart from '@/components/productlistC/cartBox/cart'
import Dessert from '@/components/productlistC/dessertsBox/dessert'
import EmptyCart from '@/components/productlistC/emptycart/emptyCart'
import { overallCart } from '@/AllSlices/productsSlice/productsSlice'
import { useSelector } from 'react-redux'
import style from './product-list.module.css'


function page() {

    const cartItem = useSelector(overallCart)

    return (
        <div className={style.productCanvas}>
            <div className={style.wrapper}>
                <div className={style.dessertBox}>
                    <h2>Desserts</h2>
                    <Dessert />
                </div>
                <div className={style.cartBox}>
                    <h3>{`Your Carts (${cartItem.length})`}</h3>
                    {cartItem.length > 0 ? <Cart /> : <EmptyCart />}
                </div>
            </div>
        </div>
    )
}

export default page
