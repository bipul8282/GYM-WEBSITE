import './App.css';
import {  BrowserRouter  } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import WholeTeam from './Section/WholeTeam';
import Activity from './Pages/Activity';
import Activity1 from './Pages/Activity1';
import { RecoilRoot } from 'recoil';
import { Routes , Route} from 'react-router-dom';

function App() {
  return (
   <RecoilRoot>
   <BrowserRouter>
   <Navbar/>
   
   <div className="pages">
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/registration' element={<Registration/>}></Route>
    <Route exact path='/wholeteam' element={<WholeTeam/>}></Route>
    <Route exact path='/activity' element={<Activity/>}></Route>
    <Route exact path='/activity1' element={<Activity1/>}></Route>
   </Routes>
   </div>
   </BrowserRouter>
   </RecoilRoot>
   
   
   
  );
}

export default App;
