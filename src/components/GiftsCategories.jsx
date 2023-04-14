import { gifts50, gifts100, anniversary, birthday, giftsRare, housewarming } from '../assets/'
import styles from '../styles'

function GiftsCategories() {
    const categories = [
        {
            title: "Housewarming Gifts",
            image: housewarming
        },
        {
            title: "Wedding and Anniversary Gifts",
            image: anniversary
        },
        {
            title: "Birthday Gifts",
            image: birthday
        },
        {
            title: "Gifts under $50",
            image: gifts50
        },
        {
            title: "Gifts under $100",
            image: gifts100
        },
        {
            title: "Gifts to Impress",
            image: giftsRare
        }
    ]

  return (
    <section className={styles.sectionContainer}>
        <h2 className={`${styles.sectionHeading} text-center mb-10`}>Gardening Gifts They'll Love</h2>
        <div id="grid-gifts" className='grid grid-rows-3 sm:grid-rows-2 grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8'>
            {categories.map((item, index) => (
                <a key={index} href="" className='hover:text-[green]'>
                    <img className="w-[100%] h-auto" src={item.image} alt="" />
                    <h3 className="font-Gelasio font-semibold text-[24px] text-center mt-2">{item.title}</h3>
                </a>
            ))}
        </div>
    </section>
  )
}

export default GiftsCategories