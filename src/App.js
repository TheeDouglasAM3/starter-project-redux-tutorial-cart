//VIDEO PAROU EM 51:15
import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff
import {createStore} from 'redux'
import { INCREASE, DECREASE } from './actions'
import reducer from './reducer'

//initial store 
const initialStore = {
  count: 0
}

const store = createStore(reducer, initialStore)
store.dispatch({type: INCREASE})
store.dispatch({type: DECREASE})
store.dispatch({type: INCREASE})
console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
