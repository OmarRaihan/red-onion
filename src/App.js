import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Header from './Shared/Header/Header';
import Breakfasts from './Pages/Home/Breakfasts/Breakfasts';
import Lunches from './Pages/Home/Lunches/Lunches';
import Dinners from './Pages/Home/Dinners/Dinners';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/breakfasts" element={<Breakfasts></Breakfasts>}></Route>
        <Route path="/lunches" element={<Lunches></Lunches>}></Route>
        <Route path="/dinners" element={<Dinners></Dinners>}></Route>
      </Routes>
    </div>
  );
}

export default App;
