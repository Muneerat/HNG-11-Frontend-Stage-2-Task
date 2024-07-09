import React from 'react'

export default function Label({
    isRequired=true,
    children,
    ...props
}) {
  return (
    <label 
      {...props}
      className={` text-base font-normal py-2 flex justify-start ${isRequired ? 'after:content-['*'] after:text-danger-600' : ''}`}>
        {children}
      </label>
  )
}
