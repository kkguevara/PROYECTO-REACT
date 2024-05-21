import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock';
import Item from './Item';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
        <div className="ItemListContainer">
          {products.map((product) => (
            <Item
              key={product.id}
              titulo={product.titulo}
              precio={product.precio}
              imagen={product.imagen}
              id={product.id}
            />
          ))}
        </div>
    </>
  );

}
