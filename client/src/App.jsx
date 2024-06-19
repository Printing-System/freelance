import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./Components/User.jsx"
import Admin from "./Components/Admin.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
