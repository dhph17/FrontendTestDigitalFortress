import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login/Login"
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route for login page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for dashboard page */}
      </Routes>
    </Router>
  )
}

export default App
