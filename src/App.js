import './App.css';
import Navbar from './components/e-commerce/navbar/Navbar';
import ProdcutList from './components/e-commerce/productList/ProdcutList';
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
                <ProdcutList />
            </div>
        </>
    );
}

export default App;
