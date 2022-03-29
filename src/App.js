import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';
import Cart from './Components/Cart/Cart';
import Data from './fData/data';

const App = () => {
  const [cart, setCart] = useState([]);
  const [data] = useState(Data);

const addToCart = (player) => {
  const newCart = [...cart, player];
  setCart(newCart)
}

const totalPrice = cart.reduce((acc, current) => acc + parseInt(current.price), 0);

  
  return (
    <div className='app'>
      <Header></Header>
      <div className="container-fluid px-2">
              <h2 className="text-center py-4 logo" id="logo-name">Book Your Favourite Player Now</h2>
              <div className="row food-players">
                <div className="col-md-9 row border-right app">
                  {data.map(players => <Players key={players.id} players={players} addToCart={addToCart}/>)}
                </div>
                <div className="col-md-3 app">
                  <h3 className="text-center">Players Added : {cart.length} </h3>
                  <ul className="list-group"> 
                    {cart.map(player => <Cart player={player} />)}
                  </ul>
                  <button type="button " className="btn btn-success btn-block">
                  Buy Now<span className="badge badge-light">$ {totalPrice}</span>
                  </button>
                </div>
              </div>
            </div>  
      
    </div>


  );
};

export default App;
