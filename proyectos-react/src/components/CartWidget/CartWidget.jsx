import './CartWidget.css'; 
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import { Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CartWidget({itemCount}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className="car">
      <button onClick={handleClick} >
        <ShoppingCartIcon />
       <span>{itemCount}</span> 
      </button>
    </div>
  );
}


