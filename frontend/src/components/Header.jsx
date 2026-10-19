import { Link } from "react-router"
import { useCart } from "../hooks/useCart"

export default function Header() {

    const { totalItems } = useCart();

    return <nav className="navbar bg-body-tertiary mb-3">
        <div className="container">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/cart" className="btn btn-outline-primary">Carrello ({totalItems})</Link>
        </div>
    </nav>
}