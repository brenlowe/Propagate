import styles from '../styles';
import {ProductCard} from '../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {productData} from '../productData';



function PopularProducts() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1200 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1200, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
      };

    const product = productData.map((item) => 
        <ProductCard
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price} 
        />
    );  

      
    return (
        <section className={`${styles.sectionContainer} z-1`}>
            <h2 className={`${styles.sectionHeading} mb-0`}>Our Best Sellers</h2>
            <a href="/"><h4 className='text-right px-2 font-Gelasio underline font-medium text-[24px] mb-4 hover:text-[green]'>Shop All</h4></a>
            <Carousel draggable={true} responsive={responsive}>
                {product}
            </Carousel>
            
        </section>
    )
}

export default PopularProducts