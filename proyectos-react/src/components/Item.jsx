import { Link } from 'react-router-dom';
import './Item.css'; 

export default function Item({ titulo, precio, imagen, id }) {
  return (
    <>
    <div className="contenedor">    
      <div className='tarjeta'>
        <h4>{titulo}</h4>
        <img src={imagen} alt={titulo} />
        <p>precio {precio}</p>
        <button>
          <Link to={`/item/${id}`}>Ver detalles</Link>
        </button>
      </div>
      </div>
    </>
  );
}
