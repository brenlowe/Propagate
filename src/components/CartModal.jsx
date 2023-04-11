import { useState } from 'react';
import styles from '../styles'
import Button from './Button'

// const ModalStyles = 

function CartModal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }

  // modal ? document.classList.add(styles.overflowHidden) : document.classList.remove(styles.overflowHidden)
  
  return (
    <div className='modal'>
      <button
      onClick={toggleModal}>
        OPEN
      </button>

      {modal && (
        <div className="cart-modal">
          <div className='overlay w-[100vw] h-[100vh] top-0 bottom-0 left-0 right-0 fixed bg-[#00000080]'></div>
          <div id='cart-window' className='text-secondary tracking-tight font-Gelasio w-[400px] h-[100vh] bg-primary absolute top-0 right-0'>
            <div id='cart-header' className='flex justify-between p-5'>
              <h2 className='font-semibold text-2xl'>Your Cart</h2>
              <button
                className='close-modal'
                onClick={toggleModal}>
                  <i className="fa fa-close"></i>
              </button>
            </div>
            <div id='cart-content' className='text-center py-4'>
              <p className='font-semibold text-2xl mb-4'>Oh no! Your cart is empty</p>
              <Button 
              styles='bg-secondary px-12'
              buttonText='Shop'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal