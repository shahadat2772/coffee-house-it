import React from "react";

const Cart = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <div>
      <div className="overflow-x-auto max-w-3xl mx-auto mt-6 max-h-[300px]">
        <table className="table-compact w-full">
          {/* <!-- head --> */}
          <thead className="border-b">
            <tr>
              <th>Coffee</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Remove</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr className="border-b">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.addOn}</div>
                    </div>
                  </div>
                </td>
                <td className="text-base text-center">${item.price}</td>
                <td className="text-center text-base">
                  <button className="text-lg text-primary hover:text-secondary duration-300">
                    <i class="fa-solid fa-circle-minus"></i>
                  </button>
                  <span className="border px-2 mx-2">{item.quantity}</span>
                  <button className="text-lg text-primary hover:text-secondary duration-300">
                    <i class="fa-solid fa-circle-plus"></i>
                  </button>
                </td>
                <td className="text-center">
                  <button className="text-lg">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </td>
                <td className="text-lg text-center">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
