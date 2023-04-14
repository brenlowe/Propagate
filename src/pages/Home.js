import { Hero, BlogFeature, Hrule, Categories, PopularProducts, Menu } from '../components';
import { blogImg1 } from '../assets'

function Home() {
    return (
        <main>
            <Hero />
            <PopularProducts />
            <Hrule />
            <BlogFeature
                subtitle="GET THE KNOW-HOW"
                title="Guide to Spring Gardening"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime libero quas quidem facere corporis illum. Reiciendis, accusamus ad! Quasi tempora laudantium quia aut quidem fuga sapiente, in eos officia."
                image={blogImg1}
            />
            <Hrule />
            <Categories />
        </main>
    )
}

export default Home