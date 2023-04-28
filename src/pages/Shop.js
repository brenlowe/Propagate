import { ProductCard, BlogFeature, Hrule } from '../components'
import styles from '../styles';
import { productData } from '../productData';
import { blogImg4 } from '../assets';

function Shop() {

  const product = productData.map((item) =>
    <ProductCard
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      description={item.description}
      price={item.price}
    />
  );

  return (
    <section>
      <div>
        <div id='shop-header' className={styles.sectionContainer}>
          <h1 className='font-Gelasio text-5xl'>Shop Plants</h1>
        </div>

        <div id="shop-content" className={`${styles.sectionContainer} flex flex-row`}>
          <aside className='sticky top-2 w-[30%] h-[100vh] uppercase text-primary text-[14px] font-bold font-Nunito mr-4 hidden sm:block'>
            <ul>
              <li className='cursor-pointer py-[12px] border-y-[1px] border-y-[rgba(34,66,41,.16)] border-solid flex justify-between items-center'>Indoor Light</li>
              <li className='cursor-pointer py-[12px] border-b-[1px] border-b-[rgba(34,66,41,.16)] border-solid'>Plant Size</li>
              <li className='cursor-pointer py-[12px] border-b-[1px] border-b-[rgba(34,66,41,.16)] border-solid'>Price</li>
            </ul>
          </aside>

          <div id='shop-grid' className='grid md:grid-rows-2 sm:grid-rows-3 grid-cols-2 md:grid-cols-3 md:max-w-[80%] gap-y-6 gap-x-2 m-auto'>
            {product}
          </div>
        </div>
      </div>
      

      <Hrule />
      <BlogFeature 
      subtitle='Plant Care'
      title='3 of the Easiest Houseplants That Anyone Can Grow'
      content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores fugit harum asperiores dolores quis aliquid tenetur recusandae necessitatibus suscipit.'
      image={blogImg4}/>
    </section>
  )
}

export default Shop;