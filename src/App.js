import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/e-commerce/navbar/Navbar';
import ProdcutList from './components/e-commerce/productList/ProdcutList';
import Checkout from './components/e-commerce/checkout/Checkout';
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';
// import CreateNote from './components/notes/CreateNote';
// import ListNote from './components/notes/ListNote';

function App() {
    return (
        <>
            <div className="App">
                {/* <Child1 />
                <Child2 /> */}
                {/* <CreateNote /> */}
                {/* <ListNote /> */}

                <Navbar />
                <Routes>
                    <Route path="/" element={<ProdcutList />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
