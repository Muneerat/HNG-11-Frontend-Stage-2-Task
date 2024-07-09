import React from "react";
import Logo, { Cart, Profile, Search } from "../assets/image";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import Modal from "./Modal";
import { useState } from "react";
import productData from "../ProductData/ProductData";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const { cart, increaseItem, decreaseItem, removeItem, totalPrice } =
    useContext(AppContext);
  const [show, setShow] = useState(false);
  //   const currentCartItem = cart.find((item) => item.id === product.id)
  return (
    <div className="">
      <div className="bg-[#EEEBD0] px-2 py-3 text-center">
        <p>20% off when you sign up to email</p>
      </div>
      <div className="flex justify-between py-4 px-5 items-center">
        <div>
          <Logo width={100} height={40} />
        </div>
        <div>
          <ul className="flex sm:gap-4 gap-1">
            <li>
              <a href="/">Shop </a>
            </li>
            <li>
              <a href="#" className="hidden sm:flex">
                Back to school
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="sm:flex gap-8 hidden ">
            <li>
              <a href="#">Search </a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li onClick={() => setShow(true)}>
              <a href="#">Cart {cart.length}</a>
            </li>
          </ul>
          <ul className="flex gap-1 sm:hidden ">
            <li>
              <a href="#">
                <Search width={20} height={20} />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <Profile width={20} height={20} />
              </a>
            </li>
            <li onClick={() => setShow(true)}>
              <a href="#">
                <Cart width={20} height={20} />
              </a>
            </li>
          </ul>
          <Modal className="w-5/6  " show={show} toggleShow={setShow}>
            <h2 className="font-normal text-2xl">Cart</h2>
            <div>
              <div className="grid-col-1">
                {cart.map((product, index) => (
                  <div key={index} className="p-2 ">
                    <div className="flex md:flex-row flex-col justify-between">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="md:w-1/5"
                      />
                      <div className="w-3/6">
                        <p className="text-[#111111] py-2 font-normal">
                          {product.name}
                        </p>
                        <div className="font-light ">
                          <p>Color : Navy blue</p>
                          <p>Size : XL</p>
                        </div>
                        <h2 className="font-bold">
                          ${(product?.price * product?.amount).toFixed(2)}
                        </h2>
                      </div>
                      <div className=" my-auto m">
                        <button
                          onClick={() => decreaseItem(product.id)}
                          className="border py-1 px-3"
                        >
                          -
                        </button>
                        <button className="border py-1 px-3">
                          {product.amount}
                        </button>
                        <button
                          onClick={() => increaseItem(product.id)}
                          className="border py-1 px-3"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <div
                        className=" cursor-pointer font-light underline"
                        onClick={() => removeItem(product.id)}
                      >
                        Remove Item
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-y-3 py-4 mt-4">
                  <div className=" w-full justify-between justify-items-center">
                    <div className="uppercase font-semibold flex justify-between py-2">
                      <h2 className="mr-2">Subtotal:</h2>${totalPrice}
                    </div>
                    <div className="uppercase font-semibold flex justify-between py-2">
                      <span className="mr-2">Tax:</span>$5
                    </div>
                    <div className="uppercase font-semibold flex justify-between py-2">
                      <span className="mr-2">Total:</span>${5 + totalPrice}
                    </div>
                  </div>
                  
                  
                  <Button text="" className="text-xl" >
                  <Link to='/checkout' >Checkout</Link>
                  </Button>
                
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
