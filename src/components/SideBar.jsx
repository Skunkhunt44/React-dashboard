import React from 'react'
import './Sidebar.css'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faUsersBetweenLines,faRightFromBracket ,faArrowsRotate,faTableCellsLarge,
  faFolderOpen,faCode} from '@fortawesome/free-solid-svg-icons'




function SideBar() {







  return (
    <div className='Side-barcontainer '>
        <div className='head' >
            <img className='logo' src={reactLogo} alt="" />
            <h2>NexaVerse</h2>
        </div>

        <div>
        <ul>
            <li><a href='#'><FontAwesomeIcon className='icon' icon={faTableCellsLarge} /> Overview</a></li>
            <li><a href="#"><FontAwesomeIcon className='icon' icon={faArrowsRotate} />  Transactions</a></li>
            <li><a href="#"><FontAwesomeIcon className='icon'  icon={faUsersBetweenLines} /> Customers</a></li>
            <li><a href="#"><FontAwesomeIcon className='icon' icon={faFolderOpen} /> Reports</a></li>
            <li><a href="#"><FontAwesomeIcon className='icon' icon={faGear} /> Settings</a></li>
            <li><a href="#"><FontAwesomeIcon className='icon' icon={faCode} />  Developer</a></li>

        </ul>
        </div>

        <p className='logout'><a href=""><FontAwesomeIcon className='icon' icon={faRightFromBracket} rotation={180} />    Log out</a></p>


 
      
    </div>
  )
}

export default SideBar