import React from 'react'
import { BigLogo } from '../assets/image'
import Button from './Button'

export default function Footer() {
  return (
    <div className='sm:flex justify-between items-end px-5 py-10 '>
        <div className=''>
        <ul className='flex gap-3 justify-center order-2 md:order-none'>
                    <li><a href='#'>Shop </a></li>
                    <li><a href='#'>Back to school</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
        </div>
        <div className=" flex flex-col text-center justify-center items-center mx-auto my-5 order-1 md:order-none">
            <BigLogo width={300} height={100}  />
            <p cl>Be the first to find out about discounts and more</p>
           
            <div className='flex flex-col md:flex-row my-5'>
            <input type="text" name="" placeholder='Enter your email' className='border-b p-3' />
            <Button className='m- w-full md:w-36' text='Subscribe'/>
            </div>
            <p>Terms & Privacy. 2024 Aurelius. All right reserved</p>
        </div>
        <div>
        <ul className='flex gap-3 justify-center'>
                    <li><a href='#'>Instagram </a></li>
                    <li><a href='#'>TikTok</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
        </div>
    </div>
  )
}
