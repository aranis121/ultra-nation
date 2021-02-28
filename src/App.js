import React, { useState, useEffect  } from 'react';
// import { useEffect, useState } from 'react/cjs/react.production.min';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/country';
import Cart from './components/Country/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect (() =>{
    fetch ('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[]);

  const handleAddCountry = (country)=> {
    const newCart = [...cart, country];
    setCart(newCart);
  }


  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map (country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
