import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CartItem from './pages/CartItem';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
      <Routes>
      
        <Route path='/login' Component={Login}/>
        <Route path = '/register' Component ={Register} />
        <Route path = '/product-list' Component ={ProductList} />
        <Route path = '/' Component ={Login} />
        <Route path = '/cart-item' Component={CartItem}/>
        <Route path = '/cart-page' Component={CartPage}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
