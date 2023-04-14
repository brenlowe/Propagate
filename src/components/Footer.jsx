import styles from '../styles'

function Footer() {
  return (
    <footer>
      {/* Main Footer  */}
      <div className='font-Gelasio bg-primary pt-6 pb-12 px-10 sm:px-20 grid grid-rows-4 grid-cols-1 gap-2 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-4'>

        <div className='footer-mailing-list max-w-xs text-secondary'>
          <h4 className={`${styles.footerHeading}`}>Join the Jungle Club</h4>
          <p className='my-4 font-Gelasio'>Want more plant content? Drop your email here for deals, tips and more. No spam, ever. Promise.</p>
          <input type="email" placeholder='Enter Your Email' className='w-[80%] pl-2 py-2 mt-2 bg-primary border-solid border-secondary border-[1px] placeholder:font-semibold placeholder:font-Nunito'/>
        </div>

        <div className='footer-company text-secondary flex flex-col'>
          <h4 className={`${styles.footerHeading}`}>Company</h4>
          <ul>
            <li className='mb-2'><a href="" className='hover:underline'>About</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Careers</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Press</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Refer A Friend</a></li>
            <li><a href="" className='hover:underline'>Our Guarantee</a></li>
          </ul>
        </div>

        <div className='text-secondary'>
          <h4 className={`${styles.footerHeading}`}>Help</h4>
          <ul>
            <li className='mb-2'><a href="" className='hover:underline'>FAQs</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Contact Us</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Terms of Service</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Refund Policy</a></li>
            <li><a href="" className='hover:underline'>Track Your Order</a></li>
          </ul>
        </div>

        <div className='text-secondary'>
          <h4 className={`${styles.footerHeading}`}>Explore</h4>
          <ul>
            <li className='mb-2'><a href="" className='hover:underline'>Plant Care Tips</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Rewards Program</a></li>
            <li className='mb-2'><a href="" className='hover:underline'>Visit the App</a></li>
            <li><a href="" className='hover:underline'>Plant Parent Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Copywrite Footer  */}
      <div className='font-Gelasio text-secondary bg-primary py-5 px-5 sm:px-20 border-t border-[#fcf9f633] border-solid flex justify-between sm:flex-row flex-col'>
       
          <ul className='flex flex-row text-xs items-center mb-4 sm:mb-0'>
            <li className='mr-4 '><a href="">Terms</a></li>
            <li className='mr-4'><a href="">Privacy Policy</a></li>
            <li className='mr-4'><a href="">Do Not Sell My Info</a></li>
            <li className=''><a href="">Accessibility</a></li>
          </ul>
   
          <ul className='flex flex-row'>
            <li className='mr-4'><a href=""><i class="text-2xl fa-brands fa-instagram"></i></a></li>
            <li className='mr-4'><a href=""><i class="fa-brands fa-facebook text-2xl"></i></a></li>
            <li className='mr-4'><a href=""><i class="fa-brands fa-twitter text-2xl"></i></a></li>
            <li className='mr-4'><a href=""><i class="fa-brands fa-pinterest text-2xl"></i></a></li>
            <li className=''><a href=""><i class="fa-brands fa-tiktok text-2xl"></i></a></li>
          </ul>
        

      </div>

    </footer>
  )
}

export default Footer;