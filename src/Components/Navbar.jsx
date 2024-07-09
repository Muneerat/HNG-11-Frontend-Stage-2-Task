import React from 'react'
import Logo, { Cart, Profile, Search } from '../assets/image';
import { useContext } from 'react';
import { AppContext } from '../Contexts/AppContent';


export default function Navbar() {
    const {cart} = useContext(AppContext)
  return (
    <div className=''>
        <div className='bg-[#EEEBD0] px-2 py-3 text-center'>
            <p>20% off when you sign up to email</p>
        </div>
        <div className='flex justify-between py-4 px-5 items-center'>
            <div><Logo width={100} height={40}/></div>
            <div>
                <ul className='flex sm:gap-4 gap-1'>
                    <li><a href='/'>Shop </a></li>
                    <li><a href='#' className='hidden sm:flex'>Back to school</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </div>
            <div>
            <ul className='sm:flex gap-8 hidden '>
                    <li><a href='#'>Search </a></li>
                    <li><a href='#'>Account</a></li>
                    <li><a href='#'>Cart {cart.length}</a></li>
                </ul>
                <ul className='flex gap-1 sm:hidden '>
                    <li><a href='#'><Search width={20} height={20}/> </a></li>
                    <li><a href='#'><Profile width={20} height={20}/></a></li>
                    <li><a href='#'><Cart width={20} height={20}/> </a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
