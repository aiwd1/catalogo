import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

export default function CartPage() {
    const { items, clearCart, totalPrice, changeQuantity, removeFromCart } = useCart();

    if (items.length === 0) {
        return <div className="container py-4">
            <p>Il carrello è vuoto</p>
            <Link to="/" className="btn btn-outline-secondary">Torna al catalogo</Link>
        </div>
    }

    return <div className="container py-4">
        <h1 className="h2 mb-4">Carrello</h1>

        <ul className="list-group mb-3">
            {items.map(item => {
                return <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <Link to={`/products/${item.id}`} className="fw-semibold">{item.name}</Link>
                        {' '}{item.price.toFixed(2)} € × {item.quantity}
                    </div>
                     <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" onClick={() => {
                            changeQuantity(item, -1);
                        }}>-</button>
                        <button className="btn btn-outline-secondary" onClick={() => {
                            changeQuantity(item, 1);
                        }}>+</button>
                        <button className="btn btn-outline-danger" onClick={() => {
                            removeFromCart(item)
                        }}>Rimuovi</button>
                     </div>
                </li>
            })}
        </ul>

        <p><strong>Totale: {totalPrice.toFixed(2)} €</strong></p>

        <div className="d-flex gap-2">
            <button className="btn btn-outline-danger" onClick={clearCart}>Svuota carrello</button>
            <Link to="/" className="btn btn-outline-secondary">Continua gli acquisti</Link>
        </div>
    </div>
}