// import React from 'react'
// import Button from './Button'

// export default function Modal() {
//   return (
//     <div>
//         <div>
//             <p>Added to Cart</p>
//             <Button className='bg-white' text='*' />
//         </div>
//     </div>
//   )
// }

import React, { useEffect, useRef } from "react";
 import { HiXMark } from "react-icons/hi2";

export default function Modal({
  className,
  show = false,
  toggleShow,
  setShow,
  children,
}) {
  const modal = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modal.current && !modal.current.contains(e.target)) {
        toggleShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal, toggleShow]);
  
  return (
    <div className="">
      {show && (
        <div className="w-screen h-[90vh] z-50 bg-black/50 fixed left-0 top-32 flex justify-end">
          <div
            className={`bg-white p-10 rounded-l max-w-2xl rounded-lg relative overflow-y-auto m- ${className}`}
            ref={modal}
          >
            <button
              type="button"
              className="absolute right-12 top-10 z-10 text-center border border-slate-600 rounded-full p-1 hover:bg-opacity-80 transition ease-in-out duration-150"
              onClick={() => toggleShow(false)}
            >
              <HiXMark /> 
            </button>
            <div className="max-h-96">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
