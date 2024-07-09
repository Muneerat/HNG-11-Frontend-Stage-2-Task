import React from "react";
import Button from "../Components/Button";
import { Cart, Goggle, Iphone, PalPay } from "../assets/image";
import Label from "../Components/Label";
import Input from "../Components/input";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";

export default function Checkout() {
  const { cart, increaseItem, decreaseItem, removeItem, totalPrice } =
    useContext(AppContext);
  return (
    <div className="flex m-6 flex-col md:flex-row ">
      <div className="p-4">
        <p className="py-2 text-2xl">Express checkout</p>

        <div className="flex">
          <Button className="w-64 bg-[#FFC43A] text-[#253B80]">
            <p className="pr-1">Buy with </p> <PalPay width={45} height={30} />
          </Button>
          <Button className="w-64 mx-3 ">
            <p className="pr-1">Buy with </p> <Iphone width={45} height={30} />
          </Button>
          <Button className="w-64">
            <p className="pr-1">Buy with </p> <Goggle width={45} height={30} />
          </Button>
        </div>
        <div className="flex my-4">
          <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
          <p className="px-3">OR</p>
          <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
        </div>
        <div>
          <div>
            <Label>Customer Information</Label>
            <Input placeholder="JDanet@gmail.com" />
          </div>
          <div className="flex justify-between flex-col md:flex-row ">
            <div>
              <Label>Shipping Address</Label>
              <Input placeholder="Janet" />
            </div>
            <div>
              <Label className="text-red-600 "> Edit Detail</Label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div>
            <Label></Label>
            <Input placeholder="3517 W. Gray St. Utica, Pennsylvania 57867" />
          </div>
          <div className="py-4">
            <Input placeholder="Pembroke Pines" />
          </div>
          <div className="flex flex-col md:flex-row justify-between my-2">
            <select className="p-3 w-3/6 mr-2">
              <option>United States</option>
            </select>
            <select className="p-3 w-3/6">
              <option>Georgia</option>
            </select>
          </div>
          <div className="flex justify-between flex-col md:flex-row ">
            <div className="py-3">
              <Input placeholder="42574" />
            </div>
            <div className="py-3">
              <Input placeholder="41748" />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row ">
            <div>
              <textarea>Home delivery Takes 3-5 business days</textarea>
            </div>
            <div>
              <textarea>Pick from store location</textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1>Order Summary</h1>
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
                <button className="border py-1 px-3">{product.amount}</button>
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
         
        </div>
      </div>
    </div>
  );
}
