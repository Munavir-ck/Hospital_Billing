
import './App.css';
import AppoimentPage from './pages/AppoimentPage';
import BillingPage from './pages/BillingPage';

import DashBoardPage from './pages/DashBoardPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientPage from './pages/PatientPage';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
       <Route path="/" element={ <BillingPage/>}/>
       <Route path="/dashboard" element={ < DashBoardPage />}/>
       <Route path="/appoiments" element={ < AppoimentPage />}/>
       <Route path="/patients" element={ <PatientPage/>}/>
      
       

      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
