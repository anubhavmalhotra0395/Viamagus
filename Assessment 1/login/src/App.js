import Login from './components/Login';
import Admin from './components/Admin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/admin' element={<Admin />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
