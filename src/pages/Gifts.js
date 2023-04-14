import { BlogFeature, Hrule, GiftsCategories, GiftsHero } from '../components'
import styles from '../styles'
import { blogImg1 } from '../assets'

function Gifts() {
    return (
        <main>
            <GiftsHero />
            <GiftsCategories />
            <Hrule />
            <BlogFeature
                subtitle="GET THE KNOW-HOW"
                title="Guide to Spring Gardening"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime libero quas quidem facere corporis illum. Reiciendis, accusamus ad! Quasi tempora laudantium quia aut quidem fuga sapiente, in eos officia."
                image={blogImg1}
            />
            <Hrule />
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