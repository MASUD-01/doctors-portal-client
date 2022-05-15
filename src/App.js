import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyApppinments from './Pages/Dashboard/MyApppinments';
import Myreview from './Pages/Dashboard/Myreview';
import Myhistory from './Pages/Dashboard/Myhistory';
import Users from './Pages/Dashboard/Users';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appoinment' element={<RequireAuth><Appoinment></Appoinment></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard>z</Dashboard></RequireAuth>}>
          <Route index element={<MyApppinments></MyApppinments>}></Route>
          <Route path='review' element={<Myreview></Myreview>}></Route>
          <Route path='history' element={<Myhistory></Myhistory>}></Route>
          <Route path='users' element={<Users></Users>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
