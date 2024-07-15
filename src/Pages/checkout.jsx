import React from "react";
import Button from "../Components/Button";
import { Cart, Goggle, Iphone, PalPay } from "../assets/image";
import Label from "../Components/Label";
import Input from "../Components/input";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import Pay from "../assets/Pay.png";

export default function Checkout() {
  const BASE_IMAGE_URL = "https://api.timbu.cloud/images/";
  const { cart, increaseItem, decreaseItem, removeItem, totalPrice } =
    useContext(AppContext);
  return (
    <div className="flex p-6 flex-col gap-10 md:flex-row pt-32 bg-[#f7f7f7]">
      <div className="p-4">
        <p className="py-2 text-2xl">Express checkout</p>

        <div className="md:flex flex-row">
          <button
            className={`py-3 text-center flex items-center  justify-center md:w-64 bg-[#FFC43A] text-[#253B80] m-2 w-full`}
            onClick={() => addToCart(product)}
          >
            <p className="pr-1">Buy with </p> <PalPay width={45} height={30} />
          </button>
          <Button className="md:w-64 w-full m-2 ">
            <p className="pr-1">Buy with </p> <Iphone width={45} height={30} />
          </Button>
          <Button className="md:w-64 m-2 w-full">
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
          <div className="flex justify-between flex-col md:flex-row gap-3 my-2 ">
            <div className="w-full">
              <Label>Shipping Address</Label>
              <Input placeholder="Janet" />
            </div>
            <div className="w-full">
              <label
                className={` text-base font-normal py-2 flex justify-end text-red-600 `}
              >
                Edit Detail
              </label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="py-2">
            <Input placeholder="3517 W. Gray St. Utica, Pennsylvania 57867" />
          </div>
          <div className="py-2">
            <Input placeholder="Pembroke Pines" />
          </div>
          <div className="flex flex-col md:flex-row justify-between my-2 gap-2">
            <select className="p-3 md:w-3/6 mr-2 bg-white border-2 border-black/20 rounded-md">
              <option>United States</option>
            </select>
            <select className="p-3 md:w-3/6 bg-white rounded-md border-2 border-black/20">
              <option>Georgia</option>
            </select>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-3 my-2 ">
            <div className="py-3 w-full">
              <Input placeholder="42574" />
            </div>
            <div className="w-full py-3">
              <Input placeholder="41748" />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row my-3 gap-3">
            <div>
              <Label>Delivery Options</Label>
              <textarea
                className="border border-red-400 w-full p-2 rounded-md"
                rows={3}
                cols={38}
              >
                Home delivery
              </textarea>
            </div>
            <div>
              <label
                className={` text-base font-normal py-2 flex justify-end text-red-600 `}
              >
                edit choice
              </label>
              <textarea
                className="border border-black w-full p-2 rounded-md"
                rows={3}
                cols={38}
              >
                In-store pickup
              </textarea>
            </div>
            {/* <div>
            <label
                className={` text-base font-normal py-2 flex justify-end text-red-600 `}
              >
               edit choice
              </label>
              <textarea className="border border-black p-2 rounded-md" rows={3} cols={28} >In-store pickup</textarea>
            </div> */}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1>Order Summary</h1>
        {cart.map((product, index) => (
          <div key={product.unique_id} className="p-2">
            <div className="flex md:flex-row flex-col justify-between p-3">
              <img
                src={`${BASE_IMAGE_URL}${product.photos[0].url}`}
                alt={product.name}
                className="md:w-1/5"
              />
              <div className="md:w-3/6">
                <p className="text-[#111111] py-2 font-normal">
                  {product.name}
                </p>
                <div className="font-light ">
                  <p>Color : Navy blue</p>
                  <p>Qty: {product.amount}</p>
                </div>
                <h2 className="font-bold">
                  $
                  {parseFloat(product.current_price[0]["NGN"]) * product.amount}
                </h2>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
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
        <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
        <div>
          <p>Payment options</p>
          <div className="flex ">
            <input type="radio" className="w-6" />
            <div className="p-3  ">
              <p>Direct bank transfer</p>
              <p className="text-[#828282]">
                Make payment directly through bank account.
              </p>
            </div>
          </div>
          <div className="flex ">
            <input
              type="radio"
              className="w-6 checked:border-red-600 checked:text-red-600"
              checked
            />
            <div className="p-3 ">
              <div>
                <p>Direct bank transfer</p> <img src={Pay} />
              </div>

              <p className="text-[#828282]">
                Pay with your Visa, American Express or Mastercard.
              </p>
            </div>
            <div></div>
          </div>
          <div className="gap-2">
            <Input placeholder="Card holder name" className="p-" />
            <Input placeholder="Card number" className="" />
            <Input placeholder="Expiry date" className="" />
            <Input placeholder="Security code(CVV) " className="" />
            <Button text="Make Payment" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
