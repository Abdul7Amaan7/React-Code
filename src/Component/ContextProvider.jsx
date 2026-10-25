import { useState } from "react";
import { CartContext } from "./Context";


function CartProvider({ children }) {

    const [cartCount, setCartCount] = useState(0);

    const addItem = () => setCartCount(n => n + 1);

    return (
    <CartContext.Provider value={{ cartCount, addItem }}>
    {children}
    </CartContext.Provider>
    );
}

export default CartProvider
