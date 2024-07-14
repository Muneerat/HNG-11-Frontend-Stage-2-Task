import React from 'react'

export default function Label({
    children,
    ...props
}) {
  return (
    <label 
      {...props}
      className={` text-base font-normal py-2 flex justify-start `}>
        {children}
      </label>
  )
}
