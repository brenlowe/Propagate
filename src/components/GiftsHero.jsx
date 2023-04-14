import { heroGift } from '../assets'
import Button from './Button'
import styles from '../styles'

function GiftsHero() {
  return (
    <section>
        <div className="relative h-[40vh]">
            <div className="absolute inset-0 z-1">
                <img src={heroGift} alt="Hero background" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-20" />
            </div>
            <div className="absolute inset-0 z-5 flex flex-col justify-center items-center text-white">
                <h1 className={styles.bannerText}>Give a gift that keeps giving</h1>

                <Button buttonText="Shop Gifts" styles="bg-accentPeach text-primary" linkTo="/shop" />
            </div>
        </div>
    </section>
  )
}

export default GiftsHero