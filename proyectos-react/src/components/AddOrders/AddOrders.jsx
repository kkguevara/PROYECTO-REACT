import { useState } from 'react';
import { addOrder } from '../../firebase/firebase';

export default function AddOrders() {
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    compradorNombre: '',
    compradorTelefono: '',
    compradorEmail: '',
    itemId: '',
    itemTitulo: '',
    itemPrecio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      comprador: {
        name: formData.compradorNombre,
        phone: formData.compradorTelefono,
        email: formData.compradorEmail,
      },
      items: [
        {
          id: formData.itemId,
          titulo: formData.itemTitulo,
          precio: parseFloat(formData.itemPrecio),
        },
      ],
      total: parseFloat(formData.itemPrecio),
      date: new Date(),
    };

    addOrder(newOrder).then((id) => setOrderId(id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Crear Nueva Orden</h2>
        <div>
          <input
            type="text"
            id="buyerName"
            name="compradorNombre"
            placeholder="Nombre"
            value={formData.compradorNombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="buyerPhone"
            name="compradorTelefono"
            placeholder="Teléfono"
            value={formData.compradorTelefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="buyerEmail"
            name="compradorEmail"
            placeholder="Email"
            value={formData.compradorEmail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar nueva orden de pedido</button>
      </form>
      {orderId && <p>Nueva orden de pedido generada id: {orderId}</p>}
    </>
  );
}
