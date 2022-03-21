import React from 'react'
import socket from '../socket';

const Join = () => {
  return (
    <div className='join-block'>
    <input type='text' placeholder='Room ID' />
    <input type='text' placeholder='Your nickname' />
    <button className='btn btn-primary'>Join</button>
  </div>
  )
}

export default Join;