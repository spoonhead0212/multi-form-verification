'us client'
import React from 'react'
import { useViewerContext } from '../userContext/viewerContext'
import { motion } from "motion/react"
import { cosmeticsProducts } from '../../../AllSlices/cosmeticsSlice/cosmeticsData'
import Image from 'next/image'
import Link from 'next/link'
import style from './newArrival.module.css'
import Button from '../actionButton/actionButton'
import { FadeIn } from '../animationStyles/animations'

interface All {
    category: string;
    id: number;
    image: string;
    new?: string;
    price: number;
    productName: string;
}

function NewArrival() {
    const {view} = useViewerContext()
    const AllProducts: All[] = cosmeticsProducts
    const newArrival: All[] = AllProducts.filter(newArr => newArr.new)
    

    console.log(newArrival);
    
    return (
        <div
        className={style.newArrivalBx}>
            {newArrival.map((newArr, i) => (
                <div key={newArr.id}>
                    <motion.div
                    className={style.newSingle}
                    {...FadeIn}>
                        <div className={style.newProImgBx}>
                        <Image
                         src={newArr.image} 
                         alt="New arrival product" 
                         fill
                         sizes="(max-width: 768px) 100vw, 
                         (max-width: 1200px) 50vw, 
                         25vw"
                         className={style.newProImg}
                         />
                        </div>
                        <small className={style.newPro}>{newArr.new}</small>
                        <div className={style.newProCon}>
                            <p className={style.newProName}>{newArr.productName}</p>
                            <p className={style.newProPrice}>{`$${newArr.price}`}</p>
                        </div>
                        <div className={style.btnBx}>
                            <Link 
                            href={`cosmetics/product/${newArr.id}`}
                            className={style.buyBtn}
                            >Buy Now</Link>
                            <Button
                            text='Add To Cart'
                            onClick={() => console.log('clicked')}
                            type='button'
                            className='atcBtn'
                            />
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export default NewArrival
