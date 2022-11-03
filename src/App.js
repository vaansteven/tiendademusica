import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Main/ItemDetailContainer';

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
               
            </Routes>
        </BrowserRouter>
    );
};

export default App;
