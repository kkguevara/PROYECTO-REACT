import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts,} from '../../firebase/firebase';
import Item from '../Item/Item';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Error al recuperar productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="ItemListContainer">Loading...</div>;
  }

  if (error) {
    return <div className="ItemListContainer">{error}</div>;
  }

  return (
    <div className="ItemListContainer">
      {products.map((product) => (
        <div key={product.id}>
          <Item
            titulo={product.titulo}
            precio={product.precio}
            imagen={product.imagen}
            id={product.id}
          />
        </div>
      ))}
    </div>
  );
}
