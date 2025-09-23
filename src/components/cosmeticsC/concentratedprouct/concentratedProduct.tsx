import React from 'react'
import { cosmeticsProducts } from '../../../AllSlices/cosmeticsSlice/cosmeticsData'
import NavigationButton from '../navigationButton/navigationButton';
import style from './style.module.css'
import Image from 'next/image';
import { ImageSlideIn } from '../animationStyles/animations';
import { motion } from 'framer-motion'
import ElementSlide from '../elementSlider/elementSlider';

interface All {
    category: string;
    id: number;
    image: string;
    new?: string;
    price: number;
    productName: string;
}



function ConcentratedProduct() {
    const AllProducts: All[] = cosmeticsProducts;
    const productOne: All[] = AllProducts.filter(pro => pro.productName === 'Radiance Glow Serum')
    const productTwo: All[] = AllProducts.filter(pro => pro.productName === 'Biotin Boost Shampoo')

    console.log(productOne, productTwo);

    
    return (
        <div className={style.conProBox}>
            <div style={{overflow: 'hidden'}}>
                <motion.div 
                className={style.conProBox_image}
                {...ImageSlideIn}>
                    <Image
                    src='/images/cosmeticsMedia/cosmetics-one.jpg'
                    alt='product Image'
                    fill
                    />
                </motion.div>
            </div>
                {productOne.map(pro => (
                    <div
                    key={pro.id} 
                    >
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                            <p className={style.conProBox_proCat}>{pro.category}</p>
                            </ElementSlide>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                            <h2 className={style.conProBox_proHead}>{pro.productName}</h2>
                            </ElementSlide>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                            <p className={style.conProBox_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum delectus hic obcaecati placeat voluptatibus vel dignissimos nemo perspiciatis </p>
                            </ElementSlide>
                        </div>
                        <div style={{overflow: 'hidden', display: 'inline-block'}}>
                            <ElementSlide>
                                <NavigationButton
                                text='Explore it'
                                className='routeBtn'
                                href={`cosmetics/${pro.id}`}
                                />
                            </ElementSlide>
                        </div>
                    </div>
                ))}
                {productTwo.map(pro => (
                    <div
                    key={pro.id}>
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                            <p className={style.conProBox_proCat}>{pro.category}</p>
                            </ElementSlide>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                            <h2 className={style.conProBox_proHead}>{pro.productName}</h2>
                            </ElementSlide>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                            <p className={style.conProBox_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum delectus hic obcaecati placeat voluptatibus vel dignissimos nemo perspiciatis </p>
                            </ElementSlide>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <ElementSlide>
                                <NavigationButton
                                text='Explore it'
                                className='routeBtn'
                                href={`cosmetics/${pro.id}`}
                                />
                            </ElementSlide>
                        </div>
                    </div>
                ))}
            <div style={{overflow: 'hidden'}}>
                <motion.div 
                className={style.conProBox_image}
                {...ImageSlideIn}>
                    <Image
                    src='/images/cosmeticsMedia/cosmetics-two.jpg'
                    alt='product Image'
                    fill
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default ConcentratedProduct
