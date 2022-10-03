
import './App.css';
import Navbar from './components/User/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UserHome from './components/User/UserHome';
import Dashboard from './components/User/Dashboard';
import User from './components/User/index';
import AddCertificate from './AddCertificate';
import EditCertificate from './components/User/EditCertificate';
import LandingPage from './components/LandingPage';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
  <Routes>
  <Route path="/" element={<LandingPage />} />
<Route path="/login" element={<Login />} />

  <Route path="/user" element={<User />}>
    <Route path="home" element={<UserHome />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="addCertificate" element={<AddCertificate />} />
  <Route path="editCertificate" element={<EditCertificate />} />
  </Route>

  </Routes>
</Router>
    </>
  );
}

export default App;
