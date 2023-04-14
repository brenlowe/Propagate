import Button from './Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.id);
  console.log(cart.items)

  

  return (
    <div className='flex flex-col px-2 sm:px-4'>
        <a href="/shop" className='hover:text-[green] z-1'>
            <img src={props.image} alt="" />
            <div className='text-[14px] xs:text-[16px] mt-3 mb-3 flex justify-between items-center font-semibold font-Gelasio' >
                <h6 className='hover:text-[green]'>{props.name}</h6>
                <p>${props.price}</p>
            </div>
        </a> 
        <p className='hidden xs:block text-left text-sm min-h-[80px]'>{props.description}</p>
        
        { productQuantity > 0 ? 
        <>
        <div id='form' className='w-[100%] flex gap-2 xs:gap-0 xs:flex-row flex-col justify-between' action="">
          <div className='border-primary border-[1px] rounded-full text-[12px] w-[80px] xs:text-[16px] grid grid-rows-1 grid-cols-3 items-center h-[30px] font-semibold self-center'>
            <button onClick={() => cart.removeOneFromCart(props.id)}>-</button>
            <span className='text-center'>{productQuantity}</span>
            <button onClick={() => cart.addOneToCart(props.id)}>+</button>
          </div>
          <button onClick={() => cart.deleteFromCart(props.id)} className='xs:inline-block block font-medium text-sm hover:underline'>Remove</button>
        </div>
        </>
        :
        <button 
        className='text-[10px] xs:text-[14px] mt-auto border-primary border-2 my-3 w-[100%] text-center hover:bg-accentCream inline-block py-2 px-4 xs:py-4 xs:px-6 font-Nunito font-bold text-primary outline-none rounded-full uppercase hover:ease-in duration-200'
        onClick={() => cart.addOneToCart(props.id)}
        >
          Add to Cart
        </button> 
        }


    </div>
  )
}

export default ProductCard;