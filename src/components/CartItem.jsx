import { CartContext } from "../CartContext";
import { useContext } from "react";
import { productData, getProductData } from "../productData";
import { monstera } from "../assets";


function CartItem(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <div className='my-0 mx-4 border-t-[1px] py-3 border-t-secondaryOpac grid gap-3 grid-rows-1 grid-cols-5 xs:grid-cols-4 font-Nunito tracking-wide'>
            <a href="/shop" id="image-container" className="col-span-2 xs:col-span-1">
                <img 
                src={productData.image} 
                alt="plant image" 
                className="w-[100%] h-auto max-h-[110px] object-cover"/>
            </a>
            <div id="grid-container" className="grid grid-rows-2 grid-cols-2 gap-2 col-span-3">
                <a href="/shop" className="text-left font-semibold hover:underline">{productData.name}</a>
                <p className="text-right font-semibold">${ (quantity * productData.price) }</p>  
                <div className='border-secondaryOpac border-[1px] rounded-full text-[16px] grid grid-rows-1 grid-cols-3 items-center w-[80px] h-[30px] font-semibold self-center'>
                    <button className='' onClick={() => cart.removeOneFromCart(props.id)}>-</button>
                    <span className=''>{props.quantity}</span>
                    <button className='' onClick={() => cart.addOneToCart(props.id)}>+</button>
                </div>
                
                <button 
                onClick={() => cart.deleteFromCart(id)}
                className='self-center opacity-70 hover:underline text-right text-xs font-bold'
                >
                    REMOVE
                </button>
            </div>
            

        </div>
    )
}

export default CartItem;