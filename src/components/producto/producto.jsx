import React from 'react';
import vicera from '../../multimedia/gorra.png'

function Producto() {
  return (
    <div className="producto">
      <img src={vicera} height="150px" width="20%" alt="gorrita" />
      <h3>Producto 1</h3>
      <p>Precio: $20.00</p>
      <p>Descripción: Este es un producto de ejemplo.</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Producto;
