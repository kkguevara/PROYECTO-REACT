
export default function Cart(cart) {
  
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} unidades
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
