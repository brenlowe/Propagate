import {imgCat1, imgCat2, imgCat3, imgCat4 } from '../assets'
import styles from '../styles'

function Categories() {
    const categoryInfo = [
        {
            image: imgCat1,
            title: "Low-Maintenence Plants"
        },
        {
            image: imgCat2,
            title: "Cacti and Succulents"
        },
        {
            image: imgCat3,
            title: "Large Aesthetic Plants"
        },
        {
            image: imgCat4,
            title: "Gift Shop"
        }
    ]
    
  return (
    <section className={`${styles.sectionContainer} flex flex-col`}>
        <h2 className={styles.sectionHeading}>Find Your Perfect Plant</h2>
        <div className='flex flex-col sm:flex-row gap-[2rem] sm:gap-[.5rem] justify-center'>
            {categoryInfo.map((item, index) => (
                <a key={index} href='/' className='p-2 sm:max-w-[300px] hover:text-[green]'>
                    <img className='w-[100%] mb-[11px]' src={item.image} alt={item.title} />
                    <p className='block font-Nunito text-center font-bold text-[22px]'>{item.title}</p>
                </a>
            ))} 
        </div>
    </section>
  )
}

export default Categories;