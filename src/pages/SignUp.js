import { Button } from "../components"
import styles from "../styles"

function SignUp() {
    return (
        <section className={`${styles.sectionContainer} grid gap-2 grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1`}>
            <div className='mb-5 sm:mb-0 px-[24px]'>
                <h2 className={`${styles.sectionHeading}`}>Log In</h2>
                <form method='post'>
                    <label htmlFor="email" className='font-Nunito'>
                        <p className='text-[11px] uppercase font-bold mb-[5px]'>Email Address</p>
                        <input type="email" className='text-[18px] font-semibold p-[10px] border-solid border-[#edebe6] border-2 w-[100%] mb-5' name='username' required />
                        <p className='text-[11px] uppercase font-bold mb-[5px]'>Password</p>
                        <input type="email" className='text-[18px] font-semibold p-[10px] border-solid border-[#edebe6] border-2 w-[100%] mb-5' name='username' required />
                        <div className='flex justify-between items-center'>
                            <Button styles='bg-primary text-secondary px-9'
                                buttonText='LOG IN' />
                            <a href='/' className=' text-center underline font-semibold'>Forgot Your Password?</a>
                        </div>
                    </label>
                </form>
            </div>

            <div className='mb-5 sm:mb-0 px-[24px]'>
                <h2 className={`${styles.sectionHeading}`}>Sign Up</h2>
                <form method='post'>
                    <label htmlFor="email" className='font-Nunito'>
                        <p className='text-[11px] uppercase font-bold mb-[5px]'>Email Address</p>
                        <input type="email" className='text-[18px] font-semibold p-[10px] border-solid border-[#edebe6] border-2 w-[100%] mb-5' name='username' required />
                        <p className='text-[11px] uppercase font-bold mb-[5px]'>Password</p>
                        <input type="email" className='text-[18px] font-semibold p-[10px] border-solid border-[#edebe6] border-2 w-[100%] mb-5' name='username' required />
                        <div className='flex justify-between items-center'>
                            <Button styles='bg-primary text-secondary px-9'
                                buttonText='SIGN UP' />
                        </div>
                    </label>
                </form>
            </div>


        </section>
    )
}

export default SignUp