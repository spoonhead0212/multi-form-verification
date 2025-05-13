'use client'
import { overallCart } from '@/AllSlices/productsSlice/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartItem } from '@/AllSlices/productsSlice/productsSlice'
import style from './cart.module.css'
import Image from 'next/image'
import OrderTotal from '../total/orderTotal'
import Link from 'next/link'

function Cart() {
    
    const overallCartList = useSelector(overallCart)
    const dispatch = useDispatch()

    return (
        <div>
            <ul className={style.cartItem}>
                {overallCartList.map(cl => (
                    <li key={cl.id}>
                        <div>
                            <p className={style.itemName}>{cl.name}</p>
                            <div className={style.itemDetails}>
                                <span>{`${cl.quantity}x`}</span>
                                <span>{`@$${cl.price}`}</span>
                                <span>{`$${cl.priceUpdate}`}</span>
                            </div>
                        </div>
                        <button
                        onClick={() => dispatch(deleteCartItem(cl.id))}
                        className={style.removeBtn}
                        >
                            <Image 
                                src='./images/productsMedia/icon-remove-item.svg'
                                width={10}
                                height={10}
                                alt='remove'
                                >
                            </Image>
                        </button>
                    </li>
                ))}
            </ul>
            <OrderTotal />
            <div className={style.carbon}>
                <Image 
                    src='/images/productsMedia/icon-carbon-neutral.svg'
                    width={20}
                    height={20}
                    alt='icon'
                    >
                </Image>
                <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>

            <div className={style.orderBtnBx}>
                <Link
                style={{}}
                className={style.confirmOrderBtn}
                href="/product-list/checkout"
                >
                    Confirm Order
                </Link>
            </div>
        </div>
    )
}

export default Cart