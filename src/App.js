import logo from './logo.svg';
import './App.css';
import TopNav from './TopNav';
import Home from './Home'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className='overlay'></div>
    <div className='bg'></div>
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
    </>
  );
}

export default App;
