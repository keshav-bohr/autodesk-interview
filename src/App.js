import React, { useState } from 'react';
import Cart from './Cart';
import ActionBar from './ActionBar';
import Product from './Product';
import './App.css';



const App = () => {
  const [item, setItem] = useState(0)
  const incrementItem = () => {
    setItem(item + 1)
  }
  const decrementItem = () => {
    item !== 0 && setItem(item - 1)
  }
  return (
    <div className='app'>
      <Cart item={item}/>
      <div>
        <Product />
        <ActionBar incrementItem={incrementItem} decrementItem={decrementItem}/>
      </div>
    </div>
  );
};

export default App;
