import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart() {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error('Ti sei scordato di mettere in cima il componente CartProvider');
    }

    return context;
}