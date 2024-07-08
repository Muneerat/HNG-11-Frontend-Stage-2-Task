import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../ProductData/ProductData";
import small1 from "../assets/small1.png";
import small2 from "../assets/small2.png";
import small3 from "../assets/small3.png";
import small4 from "../assets/small4.png";
import small5 from "../assets/small5.png";
import Vector from "../assets/Vector.png";
import Button from "../Components/Button";
import { ArrowDown, ArrowUp } from "../assets/image";

export default function SingleProductPage() {
  const { productId } = useParams();
  const product = productData.find((p) => p.id === parseInt(productId));
  const [showDescription, setShowDescription] = useState(false);
  const [showSize, setShowSize] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const toggleSize = () => {
    setShowSize(!showSize);
  };
  const [activeTab, setActiveTab] = useState("warranty");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-5 bg-[#f7f7f7] ">
      <div className="max-w- max-w-screen-2xl mx-auto">
        <div className="sm:flex justify-between p-5">
          <div>
            <img src={product.image} alt={product.name} className="m- w-full" />
          </div>
          <div className="flex sm:flex-col m-1">
            <img src={small1} alt={product.name} className="w-20 py-1" />
            <img src={small2} alt={product.name} className="w-20 py-1" />
            <img src={small3} alt={product.name} className="w-20 py-1" />
            <img src={small4} alt={product.name} className="w-20 py-1" />
            <img src={small5} alt={product.name} className="w-20 py-1" />
          </div>
          <div className="sm:w-3/6">
            <div className="mb-5">
              <span className="text-[#525151]">Shop/Heritage</span>
              <h1 className="text-3xl font-light py-1 text-[#111111]">
                {product.name}
              </h1>
              {/* <p className='text-[#525151] py-2'>{product.description}</p> */}

              <h2 className="font-bold text-3xl py-2">{product.price}</h2>
              <div className="flex">
                <img src={Vector} className="pr-0.5 py-0.5" />
                <p className="p-">4.5</p>
                <Link>Reviews</Link>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
            <div>
              <p>Available Color : Black & Brown</p>
              <div className="flex gap-2 my-3">
                <Button className="p-3 w-60 h-10" text="Add to Cart $200" />
                <Button
                  className="p-3 w-60 h-10 bg-white text-black border-black border"
                  text="Buy Now $200"
                />
              </div>
              <div>
                <p className="text-center text-[#525151]">
                  Free shipping over $500
                </p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
            <div>
              <div className="flex justify-between" onClick={toggleDescription}>
                <p>Description</p>
                {showDescription ? (
                  <ArrowDown width={30} height={30} />
                ) : (
                  <ArrowUp width={30} height={30} />
                )}
              </div>
              {showDescription && (
                <div className="text-[#525151] ">
                  <p className="">Size and Detail</p>
                  <p>Stay Hydrated With Herschel Drinkware</p>
                  <p>Water Bottle Insulated 18oz/530ml $25.00</p>
                </div>
              )}
            </div>
            <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
            <div>
              <div className="flex justify-between" onClick={toggleSize}>
                <p>Size & Details </p>
                {showSize ? (
                  <ArrowDown width={30} height={30} />
                ) : (
                  <ArrowUp width={30} height={30} />
                )}
              </div>
              {showSize && (
                <div className="text-[#525151] transition-all duration-500 ease-in">
                  <p className="">Size and Detail</p>
                  <p>Stay Hydrated With Herschel Drinkware</p>
                  <p>Water Bottle Insulated 18oz/530ml $25.00</p>
                </div>
              )}
            </div>
            <div className="w-full h-0.5 bg-[#d9d9d9] my-3"></div>
            <div>
              <div>
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                      onClick={() => handleTabClick("shipping")}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "shipping"
                          ? "border-black"
                          : "border-transparent text-gray-500"
                      }`}
                    >
                      Shipping
                    </button>
                    <button
                      onClick={() => handleTabClick("warranty")}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "warranty"
                          ? "border-black "
                          : "border-transparent text-gray-500"
                      }`}
                    >
                      Warranty
                    </button>
                    <button
                      onClick={() => handleTabClick("returns")}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "returns"
                          ? "border-black"
                          : "border-transparent text-gray-500"
                      }`}
                    >
                      Returns
                    </button>
                  </nav>
                </div>
                <div className="py-5">
                  {activeTab === "warranty" && (
                    <div>
                      <p className="text-[#525151]">
                        Shipment takes between 2-3days of orders
                      </p>
                    </div>
                  )}
                  {activeTab === "shipping" && (
                    <div>
                      <p className="text-[#525151]">
                        Shipment takes between 2-3days of orders
                      </p>
                    </div>
                  )}
                  {activeTab === "returns" && (
                    <div>
                      <p className="text-[#525151]">
                        Shipment takes between 2-3days of orders
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-light">Things you might like</h2>
          <div className="grid md:grid-cols-3 grid-col-1">
            {productData.slice(0, 3).map((product, index) => (
              <div key={index} className="p-5">
                <img src={product.image} alt={product.name} c />
                <p className="text-[#111111] py-2 font-light">{product.name}</p>
                <div className="flex ">
                  <img src={Vector} className="pr-0.5 py-0.5" />
                  <p className="p-">4.5</p>
                </div>
                <h2 className="font-bold">{product.price}</h2>
              </div>
            ))}
          </div>
          <div className="flex justify-cente justify-end my-6">
            <div>
              <p className="text-center font-light p-1">Showing 9 of 59</p>
              <Link to='/'>
                <Button text="Show more" className=" w-60 h-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
