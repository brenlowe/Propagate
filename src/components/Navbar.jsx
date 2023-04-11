import { useState } from "react";
import styles from "../styles";
import Button from "./Button"


function Navbar() {
  // Handle Menu open/close
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);

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
    "sm:hidden bg-primary absolute top-0 w-[100%] xs:w-[350px] h-[1000px] z-20 px-10 py-4 duration-500 ease-in-out";
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
          <li><a href="/shop">Plants</a></li>
          <li><a href="/">Care Tools</a></li>
          <li><a href="/">Gifts</a></li>
          <li><a href="/">Learn</a></li>
          <li><a href="/">Help & FAQs</a></li>
          <li><a href="/">Login / Sign Up</a></li>
        </ul>
      </div>

      {/* Desktop Menu  */}
      <div
        id="hamburger-menu"
        className="sm:hidden mr-auto cursor-pointer"
        onClick={handleClick}
      >
        <i class={`fa-solid text-2xl fa-bars`}></i>
      </div>

      <div
        id="logo"
        className="font-Gelasio font-medium text-3xl tracking-wide"
      >
        <a href="/">Propagate</a>
      </div>

      <div className="hidden sm:block" id="nav-links">
        <ul className={`flex flex-row`}>
          <li>
            <a className={styles.navLink} href="/shop">
              Plants <i class="ml-1 fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/care">
              Care Tools <i class="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/shop">
              Gifts <i class="fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/blog">
              Learn <i class="fa-solid fa-chevron-down"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="sm:ml-0 ml-auto" id="nav-links-other">
        <ul className="flex flex-row">
          <li className="mr-6 text-xl cursor-pointer hidden sm:block">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className="mr-6 text-xl cursor-pointer hidden sm:block">
            <a href="/signup"><i class="fa-regular fa-user"></i></a>
          </li>
          <li className="text-xl cursor-pointer">
            <i class="fa-solid fa-cart-shopping"
            onClick={toggleModal}></i>
          </li>
        </ul>
      </div>
    </nav>

    {/* Shopping Cart */}
    <div 
    onClick={toggleModal} 
    className={modal ? styles.overlay : undefined} />
      <div id='cart-window' className={`text-secondary tracking-tight font-Gelasio w-[400px] h-[100vh] bg-primary fixed z-[999] top-0 duration-500 ease-in-out  ${modal ? "right-0" : "-right-[100%]"}`}>
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
  </>
  );
}

export default Navbar;
