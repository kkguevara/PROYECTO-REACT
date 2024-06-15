import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { getProduct } from "../../firebase/firebase";

export default function ItemDetailContainer( {count, setCount}) {

  console.log (count, setCount, "Itemcount")
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  const agregaAlCarro = (quantity) => {
    console.log(`Added ${quantity} ${product.titulo} to cart`);
  };
  
  return (
    <>
      <div className="container">
        <div className="tajetadetalle">
          <h3>Nombre: {product.titulo}</h3>
          <img src={product.imagen} alt={product.titulo} />
          <p>{product.descripcion}</p>
          <p>{product.categoria}</p>
          <p>Precio: $ {product.precio}</p>
          <ItemCount count={count} setCount={setCount} onAdd={agregaAlCarro} />
        </div>
      </div>
    </>
  );
}
