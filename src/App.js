import './App.css';
import TopNav from './components/header/TopNav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";
import ApplicationDevelopmentManagement from './ApplicationDevelopmentManagement';
import EnterpriseServicesSolutions from './EnterpriseServicesSolutions';
import Security from './Security';
import './components/index.scss';

function App () {
  return (
    <>
      <div className='overlay'></div>
      <div className='bg'></div>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicationdevmanagement" element={<ApplicationDevelopmentManagement />} />
          <Route path="/enterpriseServicesSolutions" element={<EnterpriseServicesSolutions />} />
          <Route path="/Security" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
