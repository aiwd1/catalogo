import { createContext, useEffect, useState } from "react";
import {
    addItem,
    changeItemQuantity,
    removeItem,
    getTotalItems,
    getTotalPrice,
    loadStoredItems,
    saveStoredItems
} from '../utils/cartUtils.js';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        return loadStoredItems();
    });

    useEffect(() => {
        console.log('local storage salvato');
        
        saveStoredItems(items);
    }, [items]);

    function addToCart(product) {
        setItems((current) => addItem(current, product));
    }

    function removeFromCart(product) {
        setItems((current) => removeItem(current, product.id));
    }

    function changeQuantity(product, delta) {
        setItems((current) => changeItemQuantity(current, product.id, delta));
    }

    function clearCart() {
        setItems([]);
    }

    const totalItems = getTotalItems(items);
    const totalPrice = getTotalPrice(items);

    const value = {
        items,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart,
        totalItems,
        totalPrice
    };

    return <CartContext value={value}>
        {children}
    </CartContext>;
}