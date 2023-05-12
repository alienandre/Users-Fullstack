import logo from './logo.svg';
import './App.css';
import Userlist from './components/userlist';
import Navigationbar from './components/navigationbar';
import {Route, Routes} from 'react-router-dom'
import Register from './components/register';
import Styletest from './components/styletest'

function App() {
  return (
    <>
      <Navigationbar />
      
      <Routes>
        <Route path="/" element={ <Userlist /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path='/styletest' element={ <Styletest /> }/>
      </Routes>

    </>
  );
}

export default App;
