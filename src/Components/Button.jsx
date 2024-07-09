import React from 'react'
import { Children } from 'react'

export default function Button({
    width,
    height,
    className,
    text,
    children,
    ...props
}) {
  return (
    <button  className={`${className} bg-black text-white py-3 text-center flex items-center  justify-center `}
    {...props}
    >
        {text}
        {children}
    </button>
  )
}
