import Article from '../components/Article'
import styles from "../styles"
import { blogImg2, blogImg3, blogImg4, blogImg5 } from '../assets';

function Learn() {
    return (
        <main className='flex justify-center'>
            <div className={styles.sectionContainer}>
                <h1 className={`${styles.sectionHeading} text-center mb-4 text-[26px] xs:text-[32px]`}>Tips and tricks to make plant care a breeze.</h1>
                <div className={`grid grid-rows-auto lg:grid-cols-3 grid-cols-2 gap-2 xs:gap-5 text-center max-w-[1024px]`}>
                    <Article
                        subtitle="Plant Care"
                        title="How to Treat Pests"
                        image={blogImg2}
                    />
                    <Article
                        subtitle="Plant Care"
                        title="Why Is My Plant Dying?"
                        image={blogImg3}
                    />
                    <Article
                        subtitle="Green Living"
                        title="The Ultimate Guide to Spring Gardening"
                        image={blogImg4}
                    />
                    <Article
                        subtitle="Plant Care"
                        title="Why Is My Plant Dropping Leaves?"
                        image={blogImg5}
                    />

                </div>
            </div>

        </main>
    )
}

export default Learn;