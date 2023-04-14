import React, { useState } from "react";
import styles from "../styles";

const DropdownMenu = ({ title, items }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${styles.navLink} relative inline-block text-left z-[998]`}>
      <div>
        <button
          onClick={handleMenuToggle}
          type="button"
          className=""
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {title}
          <i class="fa-solid fa-chevron-down ml-1"></i>
        </button>
      </div>

      {showMenu && (
        <div
          className="absolute right-0 mt-2 w-[100vw] rounded-md shadow-lg bg-secondary"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                onClick={() => setShowMenu(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
