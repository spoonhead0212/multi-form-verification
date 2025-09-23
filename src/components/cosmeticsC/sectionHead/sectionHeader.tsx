import style from './header.module.css'
import { useViewerContext } from '../userContext/viewerContext'
import { motion } from "motion/react"

interface V {
  text: string,
}

const MotionH2 = motion('h2');

function SectionHeader({text}: V) {
  const {view} = useViewerContext()
  
  return (
    <div className={style.headBox}>
      <MotionH2
      className={style.head_h2}
      initial={{y: '-100%'}}
      animate={view ? { y: "0" } : { y: "-100%" }}
      transition={{duration: .6, type: "spring"}}
      >{text}</MotionH2>
    </div>
  )
}

export default SectionHeader
