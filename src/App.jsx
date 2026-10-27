import React from "react";
import data from "./data.json";
const App = () => {
  return (
    <div className="p-6 w-full  bg-[black] text-[white] flex flex-col gap-5">
      {data.map((phoneDetails, index) => (
        <div key={index} className="flex bg-[#282828] p-6 rounded-lg">
          {/* image */}
          <div className="w-1/4  items-center justify-center">
            <img src={phoneDetails.image} alt="" className="" />
          </div>

          {/* details */}
          <div className=" flex-1">
            <h1>{phoneDetails.title}</h1>
            <p className="my-1">
              ⭐{phoneDetails.rating} | {phoneDetails.reviews}
            </p>
            <ul className="my-3">
              {phoneDetails.details.map((item, index) => (
                <li className="list-disc ml-6" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-green-500">
              {phoneDetails.offers.exchangeOffer}
            </p>
            <p className="text-green-300 mt-2">
              {phoneDetails.offers.bankOffer}
            </p>
          </div>

          {/* pricing */}
          <div className="flex flex-col justify-center  items-end items-center">
            <p className="text-2xl font-bold">{phoneDetails.price}</p>
            <p className="line-through text-xl">{phoneDetails.originalPrice}</p>
            <p className="text-green-500">
              {phoneDetails.discount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
