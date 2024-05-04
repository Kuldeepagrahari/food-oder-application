import React from "react";
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/sidebar'

const App = () => {
  return (
    <div>
      {/* <h1>Admin Panel</h1> */}
      <Navbar />
      <hr/>
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default App;