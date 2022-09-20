import React from "react";

const Coffee = () => {
  const coffees = [
    {
      name: "Espresso",
      variants: [
        { addOn: "Milk", price: 60 },
        { addOn: "Cream", price: 75 },
        { addOn: "Latte", price: 100 },
      ],
    },
    {
      name: "Cappuccino",
      variants: [
        { addOn: "Milk", price: 60 },
        { addOn: "Cream", price: 75 },
        { addOn: "Latte", price: 100 },
      ],
    },
    {
      name: "Latte",
      variants: [
        { addOn: "Milk", price: 60 },
        { addOn: "Cream", price: 75 },
        { addOn: "Latte", price: 100 },
      ],
    },
  ];

  return (
    <div className="">
      {/* Coffees container */}
      <div className="coffeesContainer grid grid-cols-3 justify-items-center md:max-w-5xl mx-auto mt-20">
        {coffees.map((coffee) => (
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="text-2xl">{coffee.name}</h2>
                <h2 className="text-2xl">at $55</h2>
              </div>
              <div>
                <select className="w-[70px] text-[gray]">
                  <option value={"Milk"} className="text-[gray]">
                    Milk
                  </option>
                  <option value={"Cream"} className="text-[gray]">
                    Cream
                  </option>
                  <option value={"Latte"} className="text-[gray]">
                    Latte
                  </option>
                </select>
              </div>
              <div className="card-actions justify-end">
                <button className="btn w-full mt-4 btn-sm btn-primary">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
