import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import Free from './pages/free/free';
import Market from './pages/market/market';
import Timer from './pages/timer/timer';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/free' element={<Free/>}></Route>
      <Route path='/market' element={<Market/>}></Route>
      <Route path='/timer' element={<Timer/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
