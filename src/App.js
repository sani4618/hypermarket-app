import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Search from './component/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"exact element={<Home/>}/>
      <Route path="/search"exact element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
