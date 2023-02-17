import React from 'react'
import Meals from './components/Meal/Meals.js';
import Cart from './components/Cart/Cart.js';

import Header from './components/Layout/Header.js';

function App() {
  return (
    <React.Fragment>
    <Cart />
    <Header />
    <main>
    <Meals />

    </main>
    
    </React.Fragment>
  );
}

export default App;
