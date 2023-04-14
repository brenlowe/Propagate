import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import styles from "../styles";
import Button from "./Button";
import CartItem from "./CartItem";

function Navbar() {
  const navLinks = [
    {
    title: "Shop Plants",
    link: "/shop"
    },
    {
      title: "Gifts",
      link: "/gifts"
    },
    {
      title: "Learn",
      link: "/learn"
    }
  ]

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  // Handle Menu open/close
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);
  // Handle Shopping Cart open/close
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  // Lock Scrolling on menu open
  if (sidebar || modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  };
  // Sidebar Menu Styles
  const sidebarStyles =
    "sm:hidden bg-primary absolute top-0 w-[100%] xs:w-[350px] h-[1000px] z-[999] px-10 py-4 duration-500 ease-in-out";
  const activeStyles = "left-0 duration-400 ease-in-out";

  
  return (
    <>
      <nav className={`flex justify-between items-center px-10 py-4 text-primary bg-secondary z-[1000]`}>
  {/* Overlay */}
        <div
          onClick={handleClick}
          id="overlay"
          className={`${sidebar ? undefined : "hidden" } ${styles.overlay}`}
        />

  {/* Mobile Menu */}
        <div
          className={`${sidebarStyles}
          ${sidebar ? activeStyles : "-left-[100%]"}`}
        >
          <ul className="text-[white] flex flex-col gap-8 uppercase font-Nunito font-bold">
            <li>
              <i
                onClick={handleClick}
                className={`cursor-pointer fa-solid text-2xl fa-xmark`}
              ></i>
            </li>

            {navLinks.map((linkItem,index) => (
              <li key={index}><a href={linkItem.link}>{linkItem.title}</a></li>
            ))}
          
            <li><a href="/signup">Login / Sign Up</a></li>
          </ul>
        </div>

  {/* Desktop Menu  */}
        <div
          id="hamburger-menu"
          className="sm:hidden mr-auto cursor-pointer"
          onClick={handleClick}
        >
          <i className={`fa-solid text-2xl fa-bars`}></i>
        </div>

        <div
          id="logo"
          className="font-Gelasio font-medium text-3xl tracking-wide"
        >
          <a href="/">Propagate</a>
        </div>

        <div className="hidden sm:block" id="nav-links">
          <ul className={`flex flex-row`}>  
          {navLinks.map((linkItem, index) => (
            <li key={index}>
              <a key={index} className={styles.navLink} href={linkItem.link}>
                {linkItem.title}
              </a>
            </li>
          ))}
          </ul>
        </div>

        <div className="sm:ml-0 ml-auto" id="nav-links-other">
          <ul className="flex flex-row">
            {/* <li className="mr-6 text-xl cursor-pointer hidden sm:block">
              <i className="fa-solid fa-magnifying-glass"></i>
            </li> */}
            <li className="mr-6 text-xl cursor-pointer hidden sm:block">
              <a href="/signup"><i className="fa-regular fa-user"></i></a>
            </li>
            <li className="text-xl cursor-pointer">
              {productsCount > 0 ? 
              <span className="absolute right-[32px] top-[14px] text-[60%] bg-secondary rounded-full border-2 border-primary leading-3 py-[2px] px-[4px]">
                {productsCount}
              </span> 
              : undefined}
              <i className="fa-solid fa-cart-shopping"
              onClick={toggleModal}></i>
            </li>
          </ul>
        </div>
      </nav>

  {/* Shopping Cart Modal */}
      <div 
      onClick={toggleModal} 
      className={modal ? styles.overlay : undefined} />
        <div id='cart-window' className={` text-secondary tracking-tight font-Gelasio w-[100vw] xs:w-[400px] h-[100%] bg-primary fixed z-[999] top-0 duration-500 ease-in-out  ${modal ? "right-0" : "-right-[100%]"}`}>

          {/* Cart Header  */}
          <div id='cart-header' className='flex justify-between p-5 z-0'>
            <h2 className='font-semibold text-2xl'>Your Cart</h2>
            <button
              className='close-modal'
              onClick={toggleModal}>
                <i className="fa fa-close"></i>
            </button>
          </div>

          {/* Cart Body  */}
          <div id='cart-body' className='flex flex-col h-auto text-center py-4'>
            {productsCount > 0 
            ?
              <>
                {cart.items.map((currentProduct, index) => (
                  <CartItem key={index} id={currentProduct.id} quantity={currentProduct.quantity}/>
                ))}
              </>
            :
            <p className='font-semibold text-2xl mb-4'>Your cart is empty</p>
            }
            </div>

            {/* Cart Footer  */}
            <div id='cart-footer' className={`${styles.cartFooter}`}>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cart.getTotalCost().toFixed(2)}</span>
              </div>
              <p className='font-normal text-[14px] text-lightGray items-center'>Taxes calculated at checkout</p>
              {productsCount > 0 
              ?
              <Button 
              styles='bg-secondary px-12 w-[100%]'
              buttonText='Checkout'
              linkTo='/checkout'
              />
              :
              <Button 
              styles='bg-secondary px-12 w-[100%]'
              buttonText='Shop'
              linkTo='/shop'
              />
              }
            </div>
          </div>
    </>
  );
}

export default Navbar;
