import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/header/header';
import Drawer from './Components/drawer/drawer';
import CardComponent from './Components/card/card';
import Landing from './Components/landing/landing';
import ProductDetails from './Components/productDetails/productDetails';


function App() {
  return (

    <BrowserRouter>
    <Landing/>
    {/* <ProductDetails/> */}
    <Routes>
    
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
