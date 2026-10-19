// frontend/src/utils/cartUtils.js
//
// Le operazioni sul carrello, scritte come FUNZIONI PURE.
//
// Una funzione pura:
//   - riceve tutto quello che le serve come argomenti (niente stato di React,
//     niente variabili esterne);
//   - restituisce un risultato NUOVO e non modifica gli argomenti;
//   - con gli stessi argomenti restituisce sempre lo stesso risultato.
//
// Il carrello (items) è un array di oggetti fatti così:
//   { id: 1, name: 'Mouse', price: 29.9, quantity: 2 }
//
// React si accorge che lo stato è cambiato solo se riceve un array NUOVO.
// Per questo ogni funzione costruisce un array nuovo (newItems) con un ciclo for
// e lo restituisce. Sull'array NUOVO si può usare push; sull'array ricevuto mai
// (né push, né splice, né item.quantity += 1): lo modificherebbero.

// Aggiunge un prodotto al carrello e restituisce il nuovo carrello.
// Se il prodotto c'è già, aumenta di 1 la sua quantità; altrimenti lo aggiunge con quantity 1.
export function addItem(items, product) {
  const newItems = [];
  let found = false; // diventa true se il prodotto è già nel carrello

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.id === product.id) {
      // Stesso prodotto: nel nuovo array mettiamo una COPIA con la quantità aumentata.
      // { ...item } copia tutte le proprietà, poi quantity viene sostituita.
      newItems.push({ ...item, quantity: item.quantity + 1 });
      found = true;
    } else {
      // Un altro prodotto: lo copiamo così com'è.
      newItems.push({ ...item });
    }
  }

  if (!found) {
    // Non c'era: lo aggiungiamo in fondo. Del prodotto teniamo solo ciò che serve
    // al carrello; il prezzo arriva come stringa (Decimal), quindi lo convertiamo
    // in numero con Number() una volta sola, qui.
    newItems.push({ id: product.id, name: product.name, price: Number(product.price), quantity: 1 });
  }

  return newItems;
}

// Toglie dal carrello l'elemento con quell'id, qualunque sia la sua quantità.
// Nel nuovo array mettiamo tutti gli elementi tranne quello da togliere.
export function removeItem(items, id) {
  const newItems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].id !== id) {
      newItems.push(items[i]);
    }
  }

  return newItems;
}

// Cambia la quantità di un elemento di `delta`: +1 la aumenta, -1 la diminuisce.
export function changeItemQuantity(items, id, delta) {
  const newItems = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.id === id) {
      const quantity = item.quantity + delta; // qty 1 , delta (-1)

      // Con una quantità a zero (o meno) l'elemento non si aggiunge: esce dal carrello.
      if (quantity > 0) {
        newItems.push({ ...item, quantity });
      }
    } else {
      newItems.push({ ...item });
    }
  }

  return newItems;
}

// Quanti prodotti ci sono in totale: somma delle quantità (3 mouse + 1 tastiera = 4).
export function getTotalItems(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total = total + items[i].quantity;
  }

  return total;
}

// Quanto costa il carrello: somma di prezzo × quantità di ogni elemento.
export function getTotalPrice(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price * items[i].quantity;
  }

  return total;
}

const STORAGE_KEY = 'catalogo-cart';

export function loadStoredItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== null) {
      const items = JSON.parse(raw);
      return items;
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function saveStoredItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error(err);
  }
}
