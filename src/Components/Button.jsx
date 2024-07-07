import React from 'react'

export default function Button({
    width,
    height,
    backgroundColor,
    className,
    text,
}) {
  return (
    <button  className={` bg-black text-white py-3 text-center flex items-center  justify-center ${className}`}>
        {text}
    </button>
  )
}
