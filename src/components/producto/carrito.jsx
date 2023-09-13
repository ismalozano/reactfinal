import React from 'react';

function Carrito(props) {
  const { carrito, eliminarProducto, vaciarCarrito } = props;

  // Calcular el total del carrito
  const total = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <span>{producto.nombre} - ${producto.precio.toFixed(2)} x {producto.cantidad}</span>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
}

export default Carrito;
