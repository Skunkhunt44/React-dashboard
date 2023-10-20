import React from 'react'
import './Dashboard.css'
import BarChart from './barchart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import PieChart from './PieChart'



function Dashboard() {

  return (
    <div className='main-container  '>
        <div className='Header'>
                <div>
                <h1 style={{color:'black'}}>Dashboard</h1>

                </div>
              

            <section className='flex items-center gap-2'>

                <input type="text"  id='search' placeholder='Search transactions,customers,subscriptions' />
                
              
                <div className='user'>
                <FontAwesomeIcon icon={faUser} />
                </div>

                
                <FontAwesomeIcon className='chevron' icon={faChevronDown} />
               
            </section>

        </div>
        <main className='p-8 '>
          <div className='card-container flex gap-5 flex-wrap '>
            <div className='card bg-[#8D99AF]'>
                <p>Current MRR</p>
                <h2>$12.4k</h2>
            </div>
            <div className='card bg-[#EDF2F5]'>
              <p>Current Customers</p>
              <h2>16,001</h2>
            </div>
            <div className='card bg-[#EF233C] text-white'>
              <p>Active Customers</p>
              <h2>33%</h2>
            </div>
            <div className='card bg-[#04D5D9]'>
              <p>Churn Rate</p>
              <h2>2%</h2>
            </div>
          </div>

          <section className='flex gap-3'>
            <div className='column-chart '>
              <BarChart />
            </div>

            <div className='Pie-chart'>
                <PieChart />

            </div>


           <div className="flex transaction p-6 bg-white flex-col gap-4 rounded-lg">
            <h1 className='font-bold'>Transactions</h1>
                <div className="flex justify-between">
                  <p>S.Evergreen</p>
                  <span><button className="bg-red-700 p-1 rounded-lg text-white">pro</button> $+49</span>
                </div>
                <div className="flex justify-between">
                  <p>B.Sterling</p>
                  <span><button className="bg-red-700 p-1 rounded-lg text-white">advanced</button> $+49</span>
                </div>
                <div className="flex justify-between">
                  <p>O.Meadows</p>
                  <span><button className="bg-[#04D5D9] p-1 rounded-lg text-dark">basic</button> $+49</span>
                </div>
                <div className="flex justify-between">
                  <p>I.Whiteman</p>
                  <span><button className="bg-[#04D5D9] p-1 rounded-lg text-dark">basic</button> $+49</span>
                </div>
                <div className="flex justify-between">
                  <p>E.Frost</p>
                  <span><button className="bg-[#2A2D40] p-1 rounded-lg text-white">Enterprise</button> $+49</span>
                </div>
                <div className="flex justify-between">
                  <p>M.Sinclaire</p>
                  <span><button className="bg-red-700 p-1 rounded-lg text-white">basic</button> $+49</span>
                </div>
                <button className='bg-[#8D99AF] text-dark rounded-lg p-2  '>View all transactions</button>
                
        </div>
           </section>
           <section className='w-[500px] bg-white rounded-lg mt-4 p-5'>
            <div className='grid align-top gap-4'>
              <div className="flex justify-between">
              <p className='font-bold'>Support Tickets</p> <span><button className='bg-gray-300 rounded-lg px-2'>This week</button> </span>
              </div>
              <div>
              <button className='rounded-full bg-red-700 text-white py-1 px-3'>All</button>
              <button className='rounded-full   py-1 px-3'  style={{border:'1px solid gray'}}>Open</button>
              <button className='rounded-full border-3 border-red-500 py-1 px-3'  style={{border:'1px solid green'}}>Pending</button>
              <button className='rounded-full  py-1 px-3'  style={{border:'1px solid red'}}>Closed</button>
              </div>
              <div className=' text-sm support p-2 '>
                <div className='flex justify-between'>
                  <p>jessic.smith123@example.com</p>
                  <span className='font-bold'>Login issue</span> 
                  <button className='bg-gray-400 rounded-lg px-2'>Open</button>
                </div>
                <div className='flex justify-between'>
                  <p>david.jones456@example.com</p>
                  <span className='font-bold'>Billing enquiry</span> 
                  <button className='bg-gray-600 rounded-lg px-2'>Pending</button>
                </div>
                <div className='flex justify-between'>
                  <p>emily.wilson789@example.com</p>
                  <span className='font-bold'>Product Malfunction</span> 
                  <button className='bg-gray-400 rounded-lg px-2'>Closed</button>
                </div>
                <div className='flex justify-between'>
                  <p>andrew.johnson22@example.com</p>
                  <span className='font-bold'>Feature request</span> 
                  <button className='bg-gray-600 rounded-lg px-2'>Open</button>
                </div>              
             
              </div>
            </div>
           </section>
          
        </main>


    </div>
  )
}

export default Dashboard