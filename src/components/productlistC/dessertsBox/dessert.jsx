'use client'
import { useSelector, useDispatch } from 'react-redux'
import { overallState} from '@/AllSlices/productsSlice/productsSlice'
import { addToCart, IncreaseQuantity, decreaseQuantity } from '@/AllSlices/productsSlice/productsSlice'
import { overallCart } from '@/AllSlices/productsSlice/productsSlice'
import { useState } from 'react'
import Image from "next/image";
import style from './dessert.module.css'

function Dessert() {

    const overallCartList = useSelector(overallCart)

    const [show, setShow] = useState({})

    function toggleBtn(id) {
        setShow(prev => ({
            ...prev,
            [id]: !prev[id] // Toggle the specific button by ID
          }));
    }
    
    const overallDesert = useSelector(overallState)
    
    const dispatch = useDispatch()
    
    return (
        <div className={style.dessertBox}>
            {overallDesert.map((dt, i) => (
                <div 
                className={style.dessertItem}
                key={dt.id}>
                    <div>
                        <Image 
                        className={style.productImg}
                        src={dt.image.desktop}
                        width={100}
                        height={100}
                        alt={dt.name}
                        >
                        </Image>
                        <div className={style.productBtn}>
                            <div className={style.allBtn}>
                                <button
                                className={style.addToCartBtn}
                                 onClick={() => {
                                    dispatch(addToCart(dt.id))
                                    toggleBtn(dt.id)
                                 }}>
                                <Image 
                                src='/images/productsMedia/icon-add-to-cart.svg'
                                width={20}
                                height={20}
                                alt={dt.name}>
                                </Image>
                                Add to cart
                                </button>
                                <div 
                                className=
                                {`${style.quantityBtnBox} ${show[dt.id] &&
                                 overallCartList.some(item => item.id === dt.id) ? style.switchBtn
                                 || overallCartList.length === 0 : ''}`}>
                                <button 
                                    onClick={() => dispatch(decreaseQuantity(dt.id))}>
                                        <Image 
                                        src='/images/productsMedia/icon-decrement-quantity.svg'
                                        width={10}
                                        height={10}
                                        alt='decrease'>
                                        </Image>
                                    </button>
                                    <p>{dt.quantity}</p>
                                    <button onClick={() => dispatch(IncreaseQuantity(dt.id))}>
                                        <Image 
                                        src='/images/productsMedia/icon-increment-quantity.svg'
                                        width={10}
                                        height={10}
                                        alt='add'>
                                        </Image>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className={style.details}>
                            <li>{dt.category}</li>
                            <li>{dt.name}</li>
                            <li>{`$${dt.price}`}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dessert
