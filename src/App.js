import React from 'react'
import Meals from './components/Meal/Meals.js';

import Header from './components/Layout/Header.js';
function App() {
  return (
    <React.Fragment>
    
    <Header />
    <main>
    <Meals />

    </main>
    
    </React.Fragment>
  );
}

export default App;
