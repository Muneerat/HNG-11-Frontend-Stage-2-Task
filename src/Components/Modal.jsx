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
      if (!modal.current.contains(e.target)) {
        console.log("here");
        toggleShow(false);
      }
    };
    document.addEventListener("onClick", handleClickOutside);
  }, [modal]);
  return (
    <div className="">
      {show && (
        <div className="w-screen h-screen z-50 bg-black/70 fixed left-0 top-0 flex justify-center">
          <div
            className={`bg-red-600 p-6 rounded-l max-w-2xl rounded-lg relative overflow-y-auto m-8 ${className}`}
            ref={modal}
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-10 text-center bg-slate-600 rounded-full p-1 hover:bg-opacity-80 transition ease-in-out duration-150"
              onClick={() => toggleShow(false)}
            >
              {/* <HiXMark /> */} %
            </button>
            <div className="max-h-96">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
