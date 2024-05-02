import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar(){
    return (
    <header className='Navbar'>
    <h1>All⭐Star</h1>
    <nav className='Nav'>
        <ButtonComponent nombre='INICIO'/>
        <ButtonComponent nombre='TIENDA'/>
        <ButtonComponent nombre='CATEGORIA'/>
        <ButtonComponent nombre='REGISTRO'/>
        <ButtonComponent nombre='CONTACTO'/>
        </nav>
    <CartWidget/>
    </header>

    );
}








