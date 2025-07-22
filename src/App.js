import './App.css';

import { BrowserRouter, Router } from 'react-router-dom';
import Admin from './routes/Admin';
import User from './routes/User';


function App() {
  return (
    <Router>
      <Admin />
      <User />
    </Router>
  );
}

export default App;
