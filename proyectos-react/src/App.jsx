import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <div className='app'>
    <NavBar/>
    <ItemListContainer greeting= 'Bienvenidos A Tienda All⭐Star'/>
    </div>
  );
}

export default App;