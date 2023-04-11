import { Hero, BlogFeature, Hrule } from '../components'
import styles from '../styles';

function Shop() {
  return (
    <section>
      <div>
        <div id='shop-header' className={styles.sectionContainer}>
          <h1 className='font-Gelasio text-5xl'>Shop Plants</h1>
        </div>

        <div id="shop-content" className={`${styles.sectionContainer} flex flex-row`}>
          <aside className='w-[25%] h-[100vh] uppercase text-primary text-[14px] font-bold font-Nunito'>
            <ul>
              <li className='cursor-pointer py-[12px] border-y-[1px] border-y-[rgba(34,66,41,.16)] border-solid'>Indoor Light</li>
              <li className='cursor-pointer py-[12px] border-b-[1px] border-b-[rgba(34,66,41,.16)] border-solid'>Plant Size</li>
              <li className='cursor-pointer py-[12px] border-b-[1px] border-b-[rgba(34,66,41,.16)] border-solid'>Price</li>
            </ul>
          </aside>
        </div>

      </div>

      <Hrule />
      <BlogFeature />
    </section>
  )
}

export default Shop;