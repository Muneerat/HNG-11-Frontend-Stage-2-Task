import React from 'react'
import { BigLogo } from '../assets/image'

export default function Footer() {
  return (
    <div className='flex justify-between items-baseline p-5'>
        <div className=''>
        <ul className='flex gap-'>
                    <li><a href='#'>Shop </a></li>
                    <li><a href='#'>Back to school</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
        </div>
        <div>
            <BigLogo width={300} height={100} />
            <p>Be the first to find out about discounts and more</p>
            <p>Terms & Privacy. 2024 Aurelius. All right reserved</p>
        </div>
        <div>
        <ul className='flex gap-'>
                    <li><a href='#'>Shop </a></li>
                    <li><a href='#'>Back to school</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
        </div>
    </div>
  )
}
