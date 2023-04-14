import Button from './Button'
import styles from '../styles'
import { blogImg1 } from '../assets'

function BlogFeature({subtitle, title, content, image}) {

  return (
    <section className={`${styles.sectionContainer}`}>
        <div className='flex flex-between flex-col sm:flex-row'>
          <div className='sm:pr-5 pr-0 sm:pb-0 pb-10 text-primary'>
            <h4 className='text-[14px] font-bold tracking-wider font-Nunito pb-2'>GET THE KNOW-HOW</h4>
            <h2 className={`${styles.sectionHeading}`}>Guide to Spring Gardening</h2>
            <p className='font-Gelasio leading-loose mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime libero quas quidem facere corporis illum. Reiciendis, accusamus ad! Quasi tempora laudantium quia aut quidem fuga sapiente, in eos officia.</p>
            <Button 
            linkTo="/learn"
            buttonText="Learn More" 
            styles="bg-primary text-secondary hover:bg-[#224229dd] hover:ease-in duration-200"/>
          </div>

          <div className=''>
            <img src={blogImg1} alt=""/>
          </div>
          
        </div>
    </section>
  )
}

export default BlogFeature