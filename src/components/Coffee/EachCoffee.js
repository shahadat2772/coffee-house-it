import React, { useEffect, useState } from "react";

const EachCoffee = ({ coffee, cart, setCart }) => {
  const [coff, setCoff] = useState(coffee.variants[0]);
  const selectVariant = (e) => {
    const id = e.target.value;
    const selected = coffee.variants.filter((c) => c.id == id)[0];
    setCoff(selected);
  };

  const handleAddToCart = (coff) => {
    let order;
    const exists = cart.filter((c) => c.id == coff.id)[0];
    if (!exists) {
      order = { ...coff, quantity: 1 };
      setCart([...cart, order]);
    } else {
      const newItems = cart.filter((ni) => ni.id != exists.id);
      order = { ...coff, quantity: exists.quantity + 1 };
      setCart([...newItems, order]);
    }
  };

  return (
    <div className="card card-compact w-72 bg-base-100 shadow">
      <figure>
        <img className="md:w-[770px] lg:h-[200px]" src={coff.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-2xl">{coffee.name}</h2>
          <h2 className="text-2xl">at ${coff?.price}</h2>
        </div>
        <div>
          <select
            onChange={(e) => selectVariant(e)}
            className="w-[70px] text-[gray]"
          >
            {coffee.variants.map((v) => (
              <option value={v.id} className="text-[gray]">
                {v.addOn}
              </option>
            ))}
          </select>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(coff)}
            className="btn w-full mt-4 btn-sm btn-primary"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachCoffee;
