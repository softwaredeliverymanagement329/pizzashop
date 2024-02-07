import { useState } from 'react';
import './wasm_exec.js';

export function Order({ onOrder }) {
  const [deliveredPizzas, setDeliveredPizzas] = useState('');

  const orderPizza = () => {
    let result = Math.random() < 0.9 ? '🍕' : '❌';
    setDeliveredPizzas(deliveredPizzas + result);
    if (result === '🍕') {
      onOrder();
      const x = makePizza('pep');
      console.log(x);
    }
  };

  const go = new Go();
  WebAssembly.instantiateStreaming(fetch('pizza.wasm'), go.importObject).then((result) => {
    go.run(result.instance);
  });

  return (
    <>
      <h2>Order</h2>
      <p>Your pizza is only one click away. Order as many pizzas as you would like. Just keep clicking.</p>
      <button type='button' className='btn btn-primary' onClick={orderPizza}>
        Buy now!
      </button>
      <div className='delivery-box' data-testid='pizza-box'>
        {deliveredPizzas}
      </div>
    </>
  );
}
