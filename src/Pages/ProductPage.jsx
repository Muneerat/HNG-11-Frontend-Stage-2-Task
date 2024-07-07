import React from 'react'
import productData from '../ProductData/ProductData'

export default function ProductPage() {
  return (
    <div className='p-5 bg-[#f7f7f7] '>
    <div className='max-w-7x max-w-screen-2xl mx-auto'>
    <div>
        <h1 className='text-2xl font-bold py-1 text-[#111111]'>Explore Classy  Backpacks</h1>
        <p className='  text-[#525151]'>Carry the weight of the world in comfort.</p>
      </div>
      <div className='py-5 flex justify-between'>
        <div className='text-[#525151] border-l-2 px-1 border-[#525151]'>
          59 items
        </div>
        <div>
          <select className='p-1 mx-4'>
            <option selected>Category</option>
            <option>All</option>
          </select>
          <select className='p-1 '>
            <option selected>Sort by</option>
          </select>
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-2 justify-items-center gap-'>
        {productData.map((product,index) => (
          <div key={index}>
           <img src={product.image} alt={product.name}/>
           <p className='text-[#111111]'>{product.name}</p>
           <h2 className='font-bold'>{product.price}</h2>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}
