import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock';
import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemCount from './ItemCount';


export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id));
  }, [id]);

  const agregaAlCarro = (quantity) => {
    console.log(`Added ${quantity} ${product.titulo} to cart`);
  };

  return (
    <>
      <div className="container">
        <div className='tajetadetalle'>
           <p>ID: {id}</p>
          <h3>Nombre: {product.titulo}</h3>
          <img src={product.imagen} alt={product.titulo} />
          <p>Descripcion: {product.descripcion}</p>
          <p>Categoria: {product.categoria}</p>
          <p>Precio:{product.precio}</p>
          <ItemCount initial={1} onAdd={agregaAlCarro} />
        </div>
      </div>
    </>

  );
}
