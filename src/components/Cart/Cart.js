import React from "react";

const Cart = ({ cart, setCart }) => {
  const increaseQuant = (id) => {
    const oldItem = cart.filter((i) => i.id == id)[0];
    const lastItem = { ...oldItem, quantity: oldItem.quantity + 1 };
    const updatedCart = cart.filter((cartItem) => cartItem.id != id);
    setCart([...updatedCart, lastItem]);
  };

  const decreaseQuant = (id) => {
    const oldItem = cart.filter((i) => i.id == id)[0];
    let updatedCart = [];
    if (oldItem.quantity == 1) {
      updatedCart = cart.filter((cartItem) => cartItem.id != id);
      setCart([...updatedCart]);
    } else {
      const lastItem = { ...oldItem, quantity: oldItem.quantity - 1 };
      updatedCart = cart.filter((cartItem) => cartItem.id != id);
      setCart([...updatedCart, lastItem]);
    }
  };

  const removeFromCart = (id) => {
    let updatedCart = [];
    updatedCart = cart.filter((cartItem) => cartItem.id != id);
    setCart([...updatedCart]);
  };

  let qty = 0;
  let subTotal = 0;
  cart.forEach((item) => {
    qty = qty + item.quantity;
    subTotal = subTotal + item.quantity * item.price;
  });
  let tax = Number((subTotal * 0.01).toFixed(2));
  let total = Number((subTotal + tax).toFixed(2));

  return (
    <div>
      <div className="overflow-x-scroll max-w-3xl mx-auto mt-6 max-h-[300px]">
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
                <td className="text-base">
                  <div className="flex justify-center">
                    <button
                      onClick={() => decreaseQuant(item.id)}
                      className="block text-lg text-primary hover:text-secondary duration-300"
                    >
                      <i className="fa-solid fa-circle-minus"></i>
                    </button>
                    <span className="block border px-2 mx-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuant(item.id)}
                      className="block text-lg text-primary hover:text-secondary duration-300"
                    >
                      <i className="fa-solid fa-circle-plus"></i>
                    </button>
                  </div>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-lg"
                  >
                    <i className="fa-regular fa-trash-can"></i>
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
      {/* Calculation and proceed */}
      <div className="max-w-3xl mx-auto">
        <section className="mt-5 grid md:grid-cols-4 grid-cols-2 overflow-x-auto">
          <article className="py-2 px-4 border">Qty: ${qty}</article>
          <article className="py-2 px-4 border">Sub Total: ${subTotal}</article>
          <article className="py-2 px-4 border">Tax: ${tax}</article>
          <article className="py-2 px-4 border">Total: ${total}</article>
        </section>
        <button className="btn btn-sm btn-secondary block ml-auto mt-6">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
