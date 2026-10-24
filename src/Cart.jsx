import { useState, useEffect } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addItem = () => {
    setCart([...cart, "Laptop"]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button className="btn btn-danger" onClick={addItem}>
        Add Laptop
      </button>

      <p>Items in cart: {cart.length}</p>
    </div>
  );
}

export default ShoppingCart;
