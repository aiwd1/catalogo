import { useState, useEffect, Fragment } from 'react'
import './App.css'

// Indirizzo del backend Express (vedi backend/server.js, porta 3000).
// Tenerlo in una costante evita di ripeterlo in ogni fetch.
const API_URL = 'http://localhost:3000';

function App() {
  // Stampato a ogni render: in Console si vede che App viene renderizzato
  // una volta con la lista vuota e di nuovo quando arrivano i prodotti.
  console.log('Render App');

  // Parte da un array vuoto: al primo render i dati non ci sono ancora.
  const [products, setProducts] = useState([]);

  // Array delle dipendenze vuoto [] → l'effetto parte una sola volta,
  // dopo il primo render. Senza [] la fetch → setProducts → nuovo render
  // → nuova fetch creerebbe un ciclo infinito.
  useEffect(() => {
    fetch(`${API_URL}/products`).then((response) => {
      return response.json();
    }).then((jsonData) => {
      // Il backend risponde con { success, message, data }:
      // l'array dei prodotti sta in jsonData.data
      setProducts(jsonData.data);
    });
  }, []);

  return (
    <>
      <h1>My Store</h1>
      {products.map(product => {
        return (
          // Ogni elemento di una lista ha bisogno di una key univoca.
          // Lo short fragment <> non accetta attributi, quindi per mettere
          // la key si usa il fragment "lungo" <Fragment key={...}>
          <Fragment key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.descrizione}</p>
          </Fragment>
        )
      })}
    </>
  )
}

export default App
