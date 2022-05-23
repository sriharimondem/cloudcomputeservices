import logo from './logo.svg';
import './App.css';
import TopNav from './TopNav';
import Home from './Home';
import Footer from './Footer';
import { Routes, Route, Link } from "react-router-dom";
import ApplicationDevelopmentManagement from './ApplicationDevelopmentManagement';
import EnterpriseServicesSolutions from './EnterpriseServicesSolutions';
import Security from './Security';

function App() {
  return (
    <>
    <div className='overlay'></div>
    <div className='bg'></div>
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applicationdevmanagement" element={<ApplicationDevelopmentManagement/>} />
        <Route path="/enterpriseServicesSolutions" element={<EnterpriseServicesSolutions/>}/>
        <Route path="/Security" element={<Security/>} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
