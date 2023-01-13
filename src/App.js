import Home from './components/Home';
import {
   BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import SeachPage from './components/SeachPage';

import './App.css';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element ={<Home />}></Route>
          <Route path='/search' element ={<SeachPage />}></Route>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
