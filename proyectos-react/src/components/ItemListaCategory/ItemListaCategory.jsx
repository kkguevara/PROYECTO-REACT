import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductCategory } from '../../firebase/firebase';
import Item from '../Item/Item';

export default function ItemListcategoria() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProductCategory(categoriaId);
        setProducts(data);
      } catch (err) {
        setError('Error al obtener productos de la categoría');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoriaId]);

  if (loading) {
    return <div className="ItemListContainer">Loading...</div>;
  }

  if (error) {
    return <div className="ItemListContainer">{error}</div>;
  }

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
