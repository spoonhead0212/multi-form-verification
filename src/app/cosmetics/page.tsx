'use client'
import Hero from '../../components/cosmeticsC/hero/hero'
import style from './home.module.css'
import ViewerProvider from '../../components/cosmeticsC/userContext/viewerContext'
import NewArrival from '../../components/cosmeticsC/newArrival/newArrival'
import SectionHeader from '../../components/cosmeticsC/sectionHead/sectionHeader'
import MostWanted from '../../components/cosmeticsC/mostWanted/mostWanted'
import CategoryLink from '../../components/cosmeticsC/categoryLink/categoryLink'
import HomeCard from '../../components/cosmeticsC/homecards/homeCards'
import ConcentratedProduct from '../../components/cosmeticsC/concentratedprouct/concentratedProduct'

function CosmeticsHome() {

    return (
      <div className={style.Fence}>
        <Hero />
        <section className={style.sectionWrap}>
          <div className={style.wrapInside}>
            <ViewerProvider>
              <SectionHeader text={'New Arrival'} />
              <NewArrival />
            </ViewerProvider>
            <ViewerProvider>
              <SectionHeader text={'Most Wanted'} />
              <MostWanted />
            </ViewerProvider>
            <ViewerProvider>
              <SectionHeader text={'Skin Category'} />
               <CategoryLink />
            </ViewerProvider>
            <ViewerProvider>
               <HomeCard />
            </ViewerProvider>
            <ViewerProvider>
               <ConcentratedProduct />
            </ViewerProvider>
          </div>
        </section>
      </div>
    )
}

export default CosmeticsHome
