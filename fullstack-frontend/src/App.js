
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/bootstrap-icons.svg';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Register from './login/Register';
import Login from './login/Login';




function App() {
  return (
    <div className="App">
     
     <Router>
     {/* <Navbar/> */}

     
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/edituser/:id" element={<EditUser/>} />
        <Route exact path="/viewuser/:id" element={<ViewUser/>} />
        <Route exact path="/home" element={<Home/>} />
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route exact path="/register" element={<Register/>} />
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
