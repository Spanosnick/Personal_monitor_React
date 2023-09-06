// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainNavbar from './components/navbar';
import Homepage from './screens/homepage.js';
import Infopage from './screens/info.js';
import Profilepage from './screens/profile.js';

function App() {
  return (
      <Router>
        <div className="App">
          <MainNavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/infos" element={<Infopage />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
