import React from 'react'
import { cosmeticsProducts } from '../../../AllSlices/cosmeticsSlice/cosmeticsData';
import { useViewerContext } from '../userContext/viewerContext';
import { motion } from "motion/react"
import style from './mostWanted.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../animationStyles/animations';

interface All {
    category: string;
    id: number;
    image: string;
    new?: string;
    price: number;
    productName: string;
}

const random = Math.floor(Math.random() * cosmeticsProducts.length - 8)

function MostWanted() {

    const {view} = useViewerContext()
    
    const AllProducts: All[] = cosmeticsProducts
    const xxx = AllProducts.slice(random, random + 8)

    return (
        <div
        className={style.mwBox}
        >
        <motion.div
        {...FadeIn}
        className={style.mwBox_Inside}
        >
            {xxx.map((xx, i) => (
            <div 
            key={xx.id}
            className={style.mwSingle}>
                <div className={style.mwProImgBx}>
                    <Link
                    href={`cosmetics/product/${xx.id}`}
                    >
                        <Image
                            src={xx.image} 
                            alt="Most Wanted product image" 
                            fill
                            sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            25vw"
                            className={style.mwProImg}
                        />
                    </Link>
                </div>
                <div className={style.mwProCon}>
                    <p className={style.newProName}>{xx.productName}</p>
                    <p className={style.newProPrice}>{`$${xx.price}`}</p>
                </div>
            </div>
            ))}
        </motion.div>
        </div>
    )
}

export default MostWanted
