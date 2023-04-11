import { Navbar, Hero, Footer, BlogFeature, Hrule, Categories, PopularProducts, Menu } from '../components';

function Home() {
    return (
        <main>
            <Hero />
            <PopularProducts />
            <Hrule />
            <BlogFeature />
            <Hrule />
            <Categories />
        </main>
    )
}

export default Home