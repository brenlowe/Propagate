
import Button from './Button';

function ProductCard(props) {
  return (
    <div className='card py-2 px-4'>
        <a href="" className='hover:text-[green] z-1'>
            <img src={props.image} alt="" />
            <div className='mt-3 mb-3 flex justify-between items-center font-semibold font-Gelasio' >
                <h6 className='hover:text-[green]'>{props.name}</h6>
                <p>${props.price}</p>
            </div>
        </a> 
        <p className=' text-left text-sm mb-3 max-w-[80%] h-[125px]'>{props.description}</p>
        <Button 
            styles='border-primary border-2 mb-3 w-[100%] text-center text-xs hover:bg-accentCream'
            buttonText='Add to Cart'
        /> 
    </div>
  )
}

export default ProductCard;