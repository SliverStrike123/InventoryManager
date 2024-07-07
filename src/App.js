import './App.css';
import {Link,Route,Routes} from 'react-router-dom';
import Invoices from './components/invoices';
import Inventory from './components/inventory';
import Orders from './components/orders';

function App() {
  return (
    <div className="App">
        <div className='App-header'>
            <div className='TopBar'>
                <Link to={'/'}
                    style={{ color: 'white' }}>
                    Inventory
                </Link>
                <Link to={'/invoices'}
                    style={
                        {
                            color: 'white'
                        }}>
                    Invoices
                </Link>
                <Link to={'/orders'}
                    style={
                        {
                            color: 'white'
                        }}>
                    Orders
                </Link>
            </div>
        </div>
        <Routes>
            <Route path="/"
                element={<Inventory />} />
            <Route path="/invoices"
                element={<Invoices />} />
            <Route path="/orders"
                element={<Orders />} />
        </Routes>
    </div>
  );
}

export default App;
