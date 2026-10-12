import { useState, useEffect, Fragment } from 'react'
import './App.css'
import { Link } from 'react-router';
import ProductForm from './components/ProductForm';

// Indirizzo del backend Express (vedi backend/server.js, porta 3000).
// Tenerlo in una costante evita di ripeterlo in ogni fetch.
const API_URL = 'http://localhost:3000';


function App() {
  // Stampato a ogni render: in Console si vede che App viene renderizzato
  // una volta con la lista vuota e di nuovo quando arrivano i prodotti.
  console.log('Render App');

  // Parte da un array vuoto: al primo render i dati non ci sono ancora.
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');


  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  const [editingProduct, setEditingProduct] = useState(null);

  // Restituisce la Promise: ProductForm sa così se l'invio è riuscito
  function saveProduct(data) {
    const isEditing = editingProduct !== null;
    const url = isEditing
      ? `${API_URL}/products/${editingProduct.id}`
      : `${API_URL}/products`;

    return fetch(url, {
      method: isEditing ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        if (!jsonData.success) {
          throw new Error(jsonData.message);
        }
        setEditingProduct(null);
        setError('');
        // Il nuovo prodotto è il primo della pagina 1 (ordine id desc): se siamo
        // altrove, il cambio di page fa ripartire l'effetto; se siamo già a pagina 1
        // setPage(1) non cambia nulla, quindi ricarichiamo noi la lista.
        if (isEditing || page === 1) {
          loadProducts();
        } else {
          setPage(1);
        }
      })
      .catch((err) => {
        setError(err.message);
        throw err; // il form tiene i campi compilati
      });
  }

  function deleteProduct(id) {
    fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(jsonData => {
        if (!jsonData.success) {
          throw new Error(jsonData.message);
        }
        if (editingProduct?.id === id) {
          setEditingProduct(null);
        }
        loadProducts();
      }).catch(error => {
        setError(error.message);
      })
  }

  function loadProducts() {
    fetch(`${API_URL}/products?page=${page}&limit=20&search=${encodeURIComponent(search)}`).then((response) => {
      return response.json();
    }).then((jsonData) => {

      if (jsonData.success) {
        // Il backend risponde con { success, message, data }:
        // l'array dei prodotti sta in jsonData.data
        setProducts(jsonData.data);
        setTotalPages(jsonData.meta.totalPages);
        setError('');
      } else {
        throw new Error(`${jsonData.message}`);
      }

    }).catch((error) => { // Gestore degli errori
      console.log(`Errore rilevato, messaggio: ${error.message}`);
      setError(error.message);
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput);
  }

  // Array delle dipendenze [page, search] → l'effetto parte dopo il primo render
  // e poi solo quando cambiano pagina o ricerca. Senza array la fetch →
  // setProducts → nuovo render → nuova fetch creerebbe un ciclo infinito.
  useEffect(() => {
    loadProducts();
  }, [page, search]);


  return (
    <>
      <h1>My Store</h1>
      <Link to="/chat">Chiedi all'assistente</Link>

      <form onSubmit={handleSearch}>
        <input type="text" value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <button type="submit">Cerca</button>
        <p>Stai cercando: {searchInput}</p>
      </form>

      <ProductForm key={editingProduct ? editingProduct.id : 'new'}
        onSubmit={saveProduct}
        initialValues={editingProduct}
        onCancel={editingProduct ? () => setEditingProduct(null) : undefined}
      />

      {error !== '' && <p>{error}</p>}
      {products.map((product) => {
        function deleteProductInsideMap() {
          deleteProduct(product.id);
        }

        return (
          // Ogni elemento di una lista ha bisogno di una key univoca.
          // Lo short fragment <> non accetta attributi, quindi per mettere
          // la key si usa il fragment "lungo" <Fragment key={...}>
          <Fragment key={product.id}>
            <h3>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
              <button onClick={() => {
                setEditingProduct(product);
              }}>Modifica</button>
              <button onClick={deleteProductInsideMap}>Elimina</button>
            </h3>
          </Fragment>
        )
      })}

      <div>
        <button disabled={page === 1} onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}>
          Precedente
        </button>
        <span>Pagina {page} di {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => {
          if (page < totalPages) {
            setPage(page + 1)
          }
        }}>
          Successiva
        </button>
      </div>
    </>
  )
}

export default App
