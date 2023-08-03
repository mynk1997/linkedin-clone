import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar-top'>
            <img src="" alt=""/>
            <Avatar className='sidebar-avatar'/>
            <h2>Mayank Gupta</h2>
            <h4>mynk1997@gmail.com</h4>
        </div>
        <div className='sidebar-stats'>
            <div className='sidebar-stat'>
                <p>Who viewed you</p>
                <p className='sidebar-number'>432</p>
            </div>
            <div className='sidebar-stat'>
            <p>Impressions of your post</p>
            <p className='sidebar-number'>12</p>            </div>
        </div>
        <div className='sidebar-bottom'></div>
    </div>
  )
}

export default Sidebar