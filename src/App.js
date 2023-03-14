import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard';
import Signin from './Component/Signin';
import Signup from './Component/Auth/Signup';
import { useEffect } from 'react';
function App() {
  
  console.log("item..",localStorage.getItem('token'));
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/Signin' element={<Signin />}/>
          <Route path='/' element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
