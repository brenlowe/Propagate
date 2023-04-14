import Button from './Button'
import styles from '../styles'

function BlogFeature({subtitle, title, content, image}) {

  return (
    <section className={`${styles.sectionContainer}`}>
        <div className='flex flex-between flex-col sm:flex-row'>
          <div className='sm:pr-5 pr-0 sm:pb-0 pb-10 text-primary'>
            <h4 className='text-[14px] font-bold tracking-wider font-Nunito pb-2'>{subtitle}</h4>
            <h2 className={`${styles.sectionHeading}`}>{title}</h2>
            <p className='font-Gelasio leading-loose mb-5'>{content}</p>
            <Button 
            linkTo="/learn"
            buttonText="Learn More" 
            styles="bg-primary text-secondary hover:bg-[#224229dd] hover:ease-in duration-200"/>
          </div>

          <div>
            <img src={image} alt=""/>
          </div>
          
        </div>
    </section>
  )
}

export default BlogFeature