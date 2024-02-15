import React from 'react'
import "./webLayout.css"
import SideBar from '../../components/SideBar/SideBar'

const WebLayout = () => {
  return (
    <div className='container'>
        <div className='left-side'>
        <SideBar/>
        </div>
        <div className="content">jsanca</div>
    </div>
  )
}

export default WebLayout