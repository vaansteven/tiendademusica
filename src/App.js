import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Cart from './components/Main/Cart';
import Form from './components/Main/form/Form';



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:categoryName"
                    element={<ItemListContainer />}
                />
                   <Route
                    path="/item/:productId"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />  
                <Route path="/checkout" element={<Form />} />
             
            </Routes>
        </BrowserRouter>
    );
};

export default App;
