import {useState} from "react";

{/* <SidebarMenu
sideBarOpen={sidebar ? "activeStyles" : undefined}/>

props.sideBarOpen */}

function SidebarMenu(props) {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);

  // Lock Scrolling on menu open

  const sidebarStyles =
    "sm:hidden bg-primary absolute top-0 left-[-100%] w-[100%] xs:w-[350px] h-[100%] z-20 px-10 py-4 duration-500 ease-in-out";
  const activeStyles = "left-0 duration-400 ease-in-out";

  return (
    <div className={`${sidebarStyles} ${props.sidebarOpen}`}>
       
        <ul className="text-[white] flex flex-col gap-8 uppercase font-Nunito font-bold">
          <li>
            <i
              onClick={handleClick}
              className={`cursor-pointer fa-solid text-2xl fa-xmark`}
            ></i>
          </li>
          <li><a href="">Plants</a></li>
          <li><a href="">Care Tools</a></li>
          <li><a href="">Gifts</a></li>
          <li><a href="">Learn</a></li>
          <li><a href="">Help & FAQs</a></li>
          <li><a href="">Login / Sign Up</a></li>
        </ul>
      </div>
   
  );
}

export default SidebarMenu;
