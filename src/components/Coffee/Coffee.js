import React from "react";
import EachCoffee from "./EachCoffee";

import coffee1 from "../../img/coffee1.jpg";
import coffee2 from "../../img/coffee2.jpg";
import coffee3 from "../../img/coffee3.jpg";
import coffee4 from "../../img/coffee4.jpg";
import coffee5 from "../../img/coffee5.jpg";
import coffee6 from "../../img/coffee6.jpg";
import coffee7 from "../../img/coffee7.jpg";
import coffee8 from "../../img/coffee8.jpg";
import coffee9 from "../../img/coffee9.jpg";

const Coffee = ({ cart, setCart }) => {
  const coffees = [
    {
      name: "Espresso",
      variants: [
        { id: 1, name: "Espresso", img: coffee1, addOn: "Milk", price: 60 },
        { id: 2, name: "Espresso", img: coffee2, addOn: "Cream", price: 75 },
        { id: 3, name: "Espresso", img: coffee3, addOn: "Latte", price: 100 },
      ],
    },
    {
      name: "Cappuccino",
      variants: [
        { id: 4, name: "Cappuccino", img: coffee4, addOn: "Milk", price: 80 },
        { id: 5, name: "Cappuccino", img: coffee5, addOn: "Cream", price: 90 },
        { id: 6, name: "Cappuccino", img: coffee6, addOn: "Latte", price: 125 },
      ],
    },
    {
      name: "Latte",
      variants: [
        { id: 7, name: "Latte", img: coffee7, addOn: "Milk", price: 100 },
        { id: 8, name: "Latte", img: coffee8, addOn: "Cream", price: 125 },
        { id: 9, name: "Latte", img: coffee9, addOn: "Latte", price: 150 },
      ],
    },
  ];

  return (
    <div className="">
      {/* Coffees container */}
      <div className="coffeesContainer  lg:grid-cols-3 md:grid grid-cols-3 justify-items-center md:max-w-5xl mx-auto mt-20">
        {coffees.map((coffee) => (
          <EachCoffee cart={cart} setCart={setCart} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
