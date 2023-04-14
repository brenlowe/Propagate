import {imgCat1, imgCat2, imgCat3, imgCat4 } from '../assets'
import styles from '../styles'

function Categories() {
  return (
    <section className={`${styles.sectionContainer} flex flex-col`}>

        <h2 className={styles.sectionHeading}>Find Your Perfect Plant</h2>

        <div className='flex flex-col sm:flex-row gap-[2rem] sm:gap-[.5rem] justify-center'>
            <a href='/' className='p-2 sm:max-w-[300px] hover:text-[green]'>
                <img className='w-[100%] mb-[11px]' src={imgCat1} alt="low-maintenence plants" />
                <a href='/' className='block font-Nunito text-center font-bold text-[22px]'>Low-Maintenence Plants</a>
            </a>
            <a href='/' className='p-2 sm:max-w-[300px] hover:text-[green]'>
                <img className='w-[100%] mb-[11px]' src={imgCat2} alt="cacti and succulents" />
                <a href='/' className='block font-Nunito text-center font-bold text-[22px]'>Cacti and Succulents</a>
            </a>
            <a href='/' className='p-2 sm:max-w-[300px] hover:text-[green]'>
                <img className='w-[100%] mb-[11px]' src={imgCat3} alt="aesthetic plants" />
                <a href='/' className='block font-Nunito text-center font-bold text-[22px]'>Large Aesthetic Plants</a>
            </a>
            <a href='/' className='p-2 sm:max-w-[300px] hover:text-[green]'>
                <img className='w-[100%] mb-[11px]' src={imgCat4} alt="gift shop" />
                <a href='/' className='block font-Nunito text-center font-bold text-[22px]'>Gift Shop</a>
            </a>
            
        </div>
    </section>
  )
}

export default Categories;