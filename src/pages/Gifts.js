import React from 'react'
import { heroGift, gifts50, gifts100, anniversary, birthday, giftsRare, housewarming } from '../assets'
import { Button } from '../components'
import styles from '../styles'
import { Hrule } from '../components'

function Gifts() {

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
        <main>
            {/* hero */}
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

            {/* Categories  */}
            <section className={styles.sectionContainer}>
                <h2 className={`${styles.sectionHeading} text-center mb-10`}>Gardening Gifts They'll Love</h2>
                <div id="grid-gifts" className='grid grid-rows-3 sm:grid-rows-2 grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8'>
                    {categories.map((item) => (
                        <a href="" key={item.title} className='hover:text-[green]'>
                            <img className="w-[100%] h-auto" src={item.image} alt="" />
                            <h3 className="font-Gelasio font-semibold text-[24px] text-center mt-2">{item.title}</h3>
                        </a>
                    ))}

                </div>


            </section>

            <Hrule></Hrule>

            {/* Blog  */}
            <section className={styles.sectionContainer}>


            </section>

            {/* Headings  */}
            <div className={`${styles.sectionContainer} text-center`}>
                <h4 className={styles.sectionHeading}>High Quality Plants.</h4>
                <h4 className={styles.sectionHeading}>Free Shipping.</h4>
                <h4 className={styles.sectionHeading}>30-Day Guarantee.</h4>

            </div>

        </main >
    )
}

export default Gifts