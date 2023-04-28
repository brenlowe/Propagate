
function CartButton({buttonText, onClick, variant}) {

  const addToCart ="text-[10px] xs:text-[14px] mt-auto border-primary border-2 my-3 w-[100%] text-center hover:bg-accentCream inline-block py-2 px-4 xs:py-4 xs:px-6 font-Nunito font-bold text-primary outline-none rounded-full uppercase hover:ease-in duration-200"
  const checkout = "text-[10px] xs:text-[14px] mt-auto border-secondary border-2 my-3 w-[100%] text-center bg-secondary hover:bg-accentCream inline-block py-2 px-4 xs:py-4 xs:px-6 font-Nunito font-bold text-primary outline-none rounded-full uppercase hover:ease-in duration-200"
  return (
    <button onClick={onClick} className={variant === "checkout" ? checkout : addToCart }>
        {buttonText}
    </button>
  )
}

export default CartButton