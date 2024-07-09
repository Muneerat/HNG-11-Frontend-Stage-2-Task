import React from "react";
import productData from "../ProductData/ProductData";
import Button from "../Components/Button";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";
export default function ProductPage() {
  return (
    <div className="p-5 bg-[#f7f7f7] ">
      <div className="max-w-7x max-w-screen-2xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold py-1 text-[#111111]">
            Explore Classy Backpacks
          </h1>
          <p className="  text-[#525151]">
            Carry the weight of the world in comfort.
          </p>
        </div>
        <div className="py-5 flex justify-between">
          <div className="text-[#525151] border-l-2 px-1 border-[#525151]">
            59 items
          </div>
          <div>
            <select className="p-1 mx-4">
              <option selected>Category</option>
              <option>All</option>
            </select>
            <select className="p-1 ">
              <option selected>Sort by</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-2 justify-items-center gap-">
            {productData.map((product, index) => (
              <Link to={`/products/${product.id}`} >
                <div key={index} className="p-5 hover:translate-x-1 transition-all ease-in-out hover:translate-y-1">
                  <img src={product.image} alt={product.name} c />
                  <p className="text-[#111111] py-2 font-light">
                    {product.name}
                  </p>
                  <div className="flex ">
                    <img src={Vector} className="pr-0.5 py-0.5" />
                    <p className="p-">4.5</p>
                  </div>
                  <h2 className="font-bold">{product.price}</h2>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center my-6">
            <div>
              <p className="text-center font-light p-1">Showing 9 of 59</p>
              <Button text="Show more" className=" w-60 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import productData from '../ProductData/ProductData'
// import Button from '../Components/Button'
// import Vector from '../assets/Vector.png'
// import { Link } from 'react-router-dom'

// export default function ProductPage() {
//   return (
//     <div className='p-5 bg-[#f7f7f7] '>
//       <div className='max-w-7x max-w-screen-2xl mx-auto'>
//         <div>
//           <h1 className='text-2xl font-bold py-1 text-[#111111]'>Explore Classy Backpacks</h1>
//           <p className='text-[#525151]'>Carry the weight of the world in comfort.</p>
//         </div>
//         <div className='py-5 flex justify-between'>
//           <div className='text-[#525151] border-l-2 px-1 border-[#525151]'>
//             59 items
//           </div>
//           <div>
//             <select className='p-1 mx-4'>
//               <option selected>Category</option>
//               <option>All</option>
//             </select>
//             <select className='p-1 '>
//               <option selected>Sort by</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           <div className='grid md:grid-cols-3 grid-cols-2 justify-items-center gap-'>
//             {productData.map((product, index) => (
//               <Link to={`/products/${product.id}`} key={index}>
//                 <div className='p-5'>
//                   <img src={product.image} alt={product.name} />
//                   <p className='text-[#111111] py-2 font-light'>{product.name}</p>
//                   <div className='flex '>
//                     <img src={Vector} className='pr-0.5 py-0.5' alt="Rating" />
//                     <p className='p-'>4.5</p>
//                   </div>
//                   <h2 className='font-bold'>{product.price}</h2>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className='flex justify-center my-6'>
//             <div>
//               <p className='text-center font-light p-1'>Showing 9 of 59</p>
//               <Button text='Show more' className=" w-60 h-10" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
