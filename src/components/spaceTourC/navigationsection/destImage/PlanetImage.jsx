import Image from 'next/image'
import { motion } from 'motion/react'
import style from './planetImage.module.css'

const PlanetImage = ( {selectedImage} ) => {

  const destination = selectedImage[0];
  

  const MotionImage = motion(Image);

  return (
    <div 
    className={style.imageContainerStyle}
    >
      {
        <MotionImage
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: .5 }}
        src={destination.images.png}
        fill
        alt={destination.name}
        className={style.destinationImage}
        />
      }
    </div>
  )
}

export default PlanetImage
