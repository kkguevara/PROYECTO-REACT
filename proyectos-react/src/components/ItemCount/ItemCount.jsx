import React, { useState } from 'react';
import './ItemCount.css';


export default function ItemCount ({onAdd, count, setCount}) {
  const incrementar = () => {
    setCount(count + 1);
  };

  const disminuir= () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const agregarCarrito = () => {
    onAdd(count);
   
  };

  return (
    <div className="contador">
      <button onClick={disminuir}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  );
}