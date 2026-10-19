import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProductDetail from './components/ProductDetail.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import CartPage from './components/CartPage.jsx';

// StrictMode tolto: in sviluppo (non in produzione) React esegue due volte
// render ed effetti per scovare bug, quindi vedremmo doppi console.log e una
// doppia fetch nel tab Network. Per rimetterlo:
// import { StrictMode } from 'react'
// createRoot(...).render(<StrictMode><App /></StrictMode>)
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/products/:id' Component={ProductDetail} />
        <Route path='/chat' Component={ChatWindow} />
        <Route path='/cart' Component={CartPage} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
  ,
)
