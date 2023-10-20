
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
    <div className='w-full flex'>
        <SideBar />
        <Dashboard />

    </div>
     
  
    
    </>
  )
}

export default App
