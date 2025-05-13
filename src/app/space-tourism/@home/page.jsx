import HomeHero from '@/components/spaceTourC/homeHero/homeHero'
import style from './home.module.css'
import clsx from 'clsx'

function Home() {
  return (
    <div className={clsx(style.container, style.homeContainer)}>
       <HomeHero />
    </div>
  )
}

export default Home

