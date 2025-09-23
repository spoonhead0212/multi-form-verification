import { ReactNode } from "react"
import {motion} from 'framer-motion'

const slideInRows = {
    initial: {y: '-100%'},
    whileInView: {y: 0},
    transition: {duration: .4, delay:  .5},
    viewport: {
        once: false, 
        // amount: 0.5
    }
}

function ElementSlide({children}: {children: ReactNode}) {
    return (
        <motion.div  {...slideInRows}>
            {children}
        </motion.div>
    )
}

export default ElementSlide
