import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getcategoria } from '../asyncMock';
import Item from './Item';

export default function ItemListcategoria() {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    setProducts(getcategoria(categoriaId));

  }, [categoriaId]);

  return (
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
  );

}