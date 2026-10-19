import { useState, useEffect, Fragment } from 'react'
import './App.css'
import { Link } from 'react-router';
import ProductForm from './components/ProductForm';
import { useCart } from './hooks/useCart';


// Indirizzo del backend Express (vedi backend/server.js, porta 3000).
// Tenerlo in una costante evita di ripeterlo in ogni fetch.
const API_URL = 'http://localhost:3000';


function App() {
  // Stampato a ogni render: in Console si vede che App viene renderizzato
  // una volta con la lista vuota e di nuovo quando arrivano i prodotti.
  console.log('Render App');

  const { addToCart } = useCart();

  // Parte da un array vuoto: al primo render i dati non ci sono ancora.
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

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

  function loadCategories() {
    fetch(`${API_URL}/categories`)
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.success) {
          setCategories(jsonData.data);
        }
      })
      .catch((err) => setError(err.message));
  }

  function loadProducts() {
    const params = new URLSearchParams({
      page: page,
      limit: 20,
      search: search
    });

    if (categoryId !== '') {
      params.set('category', categoryId);
    }

    fetch(`${API_URL}/products?${params}`).then((response) => {
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
  }, [page, search, categoryId]);

  useEffect(() => {
    loadCategories();
  }, []);


  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 mb-0">My Store</h1>
        <Link to="/chat" className="btn btn-outline-primary">Chiedi all'assistente</Link>
      </div>

      <form onSubmit={handleSearch} className="row g-2 mb-4">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Cerca un prodotto" value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select" value={categoryId} onChange={(event) => {
            setPage(1);
            setCategoryId(event.target.value);
          }}>
            <option value="">Tutte le categorie</option>
            {categories.map(category => {
              return <option key={category.id} value={category.id}>
                {category.name}: {category.productsCount}
              </option>
            })}
          </select>
        </div>
        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-primary">Cerca</button>
        </div>
        <p>Stai cercando: {searchInput}</p>
      </form>

      <ProductForm key={editingProduct ? editingProduct.id : 'new'}
        categories={categories}
        onSubmit={saveProduct}
        initialValues={editingProduct}
        onCancel={editingProduct ? () => setEditingProduct(null) : undefined}
      />

      {error !== '' && <div className="alert alert-danger">{error}</div>}
      <div className="list-group mb-4">
        {products.map((product) => {
          function deleteProductInsideMap() {
            deleteProduct(product.id);
          }

          return (
            // Ogni elemento di una lista ha bisogno di una key univoca.
            // Lo short fragment <> non accetta attributi, quindi per mettere
            // la key si usa il fragment "lungo" <Fragment key={...}>
            <Fragment key={product.id}>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  {product.image && <img src={product.image} alt={product.name}
                    width="90" height="60" className="rounded object-fit-cover" loading="lazy" />}
                  <div>
                    <Link to={`/products/${product.id}`} className="fw-semibold">
                      {product.name}
                    </Link>
                    <small className="text-body-secondary ms-2">
                      {product.categories.map(category => {
                        return category.name;
                      }).join(', ') || 'Nessuna categoria'}
                    </small>
                  </div>
                </div>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-primary"
                    onClick={() => addToCart(product)}>
                      Aggiungi al carrello
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => {
                    setEditingProduct(product);
                  }}>Modifica</button>
                  <button className="btn btn-outline-danger" onClick={deleteProductInsideMap}>Elimina</button>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3">
        <button className="btn btn-outline-secondary" disabled={page === 1} onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}>
          Precedente
        </button>
        <span>Pagina {page} di {totalPages}</span>
        <button className="btn btn-outline-secondary" disabled={page >= totalPages} onClick={() => {
          if (page < totalPages) {
            setPage(page + 1)
          }
        }}>
          Successiva
        </button>
      </div>
    </div>
  )
}

export default App
