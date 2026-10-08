import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"

const API_URL = 'http://localhost:3000';

export default function ProductDetail() {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [product, setProduct] = useState(null);

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

    return <div>
        {error !== '' && <p>{error}</p>}
        {product !== null && <>
            <h1>{product.name}</h1>
            <h5>{product.price}</h5>
            <p>{product.descrizione}</p>
        </>}
        <Link to={"/"}>Torna al catalogo</Link>
    </div>

}