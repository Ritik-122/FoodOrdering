import React, { useState } from 'react'
import Meals from './components/Meal/Meals.js';
import Cart from './components/Cart/Cart.js';


import Header from './components/Layout/Header.js';

function App() {
  const [cartIsShown,setCartShown]=useState(false)
  const showCartHandler=()=>{
    setCartShown(true)
  }
  const hideCart=()=>[
    setCartShown(false)
  ]
  return (
    <React.Fragment>
    { cartIsShown &&<Cart onHideCart={hideCart} />}
    <Header onShowCart={showCartHandler}  />
    <main>
    <Meals />

    </main>
    
    </React.Fragment>
  );
}

export default App;
