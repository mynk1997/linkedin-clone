import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

const Post = ({name, description, message, photoUrl}) => {
  return (
    <div className='post'>Post
        <div className='post-header'>
            <Avatar/>
            <div className='post-info'>
                <h2> Mayank Gupta</h2>
                <p>Description</p>
            </div>
        </div>
        <div className='post-body'>
            <p>Message Goes here</p>
        </div>
    </div>
  )
}

export default Post