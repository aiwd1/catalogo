import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import { useCart } from "../hooks/useCart";

const API_URL = 'http://localhost:3000';

export default function ProductDetail() {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [product, setProduct] = useState(null);

    const { addToCart } = useCart();

    function loadSingleProduct(id) {
        fetch(`${API_URL}/products/${id}`).then((response) => {
            return response.json();
        }).then((jsonData) => {

            if (jsonData.success) {
                setProduct(jsonData.data);

            } else {
                throw new Error(`${jsonData.message}`);
            }

        }).catch((error) => { // Gestore degli errori
            console.log(`Errore rilevato, messaggio: ${error.message}`);
            setError(error.message);
        });
    }


    useEffect(() => {
        loadSingleProduct(id);
    }, [id]);

    let categoryJsx = null;

    if (product !== null) {
        if (product.categories.length === 0) {
            categoryJsx = <p>Nessuna categoria</p>;
        } else {
            categoryJsx = <ul>
                {product.categories.map(category => {
                    return <li key={category.id}>{category.name}</li>
                })}
            </ul>
        }
    }

    return <div className="container py-4">
        {error !== '' && <div className="alert alert-danger">{error}</div>}
        {product !== null && <div className="card mb-3">
            {product.image && <img src={product.image} alt={product.name} className="card-img-top" />}
            <div className="card-body">
                <h1 className="h2">{product.name}</h1>
                <h5 className="text-primary">€ {Number(product.price).toFixed(2)}</h5>
                {categoryJsx}
                <p>{product.descrizione}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </div>
        </div>}
        <Link to={"/"} className="btn btn-outline-secondary">Torna al catalogo</Link>
    </div>

}