import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const Player = ({spotify}) => {
  return (
    <div>
      <div className='flex'>
       <Sidebar />
       <Body spotify={spotify}/>
      </div>
      <Footer />
    </div>
  )
}

export default Player