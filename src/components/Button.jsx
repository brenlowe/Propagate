import React from 'react'

function Button({ styles, buttonText }) {
  return (
    <a 
    href='/'
    className={`inline-block py-4 px-6 font-Nunito font-bold text-[14px] text-primary outline-none rounded-full uppercase ${styles} hover:ease-in duration-200`}
    >
        {buttonText}
    </a>
  )
}

export default Button