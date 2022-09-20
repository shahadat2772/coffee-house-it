import React from "react";
import EachCoffee from "./EachCoffee";

const Coffee = ({ cart, setCart }) => {
  const coffees = [
    {
      name: "Espresso",
      variants: [
        { id: 1, addOn: "Milk", price: 60 },
        { id: 2, addOn: "Cream", price: 75 },
        { id: 3, addOn: "Latte", price: 100 },
      ],
    },
    {
      name: "Cappuccino",
      variants: [
        { id: 4, addOn: "Milk", price: 80 },
        { id: 5, addOn: "Cream", price: 90 },
        { id: 6, addOn: "Latte", price: 125 },
      ],
    },
    {
      name: "Latte",
      variants: [
        { id: 7, addOn: "Milk", price: 100 },
        { id: 8, addOn: "Cream", price: 125 },
        { id: 9, addOn: "Latte", price: 150 },
      ],
    },
  ];

  return (
    <div className="">
      {/* Coffees container */}
      <div className="coffeesContainer grid grid-cols-3 justify-items-center md:max-w-5xl mx-auto mt-20">
        {coffees.map((coffee) => (
          <EachCoffee cart={cart} setCart={setCart} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
