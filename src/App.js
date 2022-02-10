import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Account from './components/pages/Account';
import Home from './components/pages/Home';
import Other from './components/pages/Other';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/other' element={<Other/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
