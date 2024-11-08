import React from 'react'
import Sidebar from './assets/Components/Sidebar'
import Content from './assets/Components/Content'
import Profile from './assets/Components/Profile'
import './App.css'


function App() {
  return (
    <div className='dashboard'>
      <Sidebar />
      {/* this creates two elements of the dashboard which makes 
      the sidebar and content to be displayed on the same page
      and be styled differently */}

      <div className="dashboard-content">
        <Content />
        <Profile />
      </div>

    </div>
  )
}

export default App