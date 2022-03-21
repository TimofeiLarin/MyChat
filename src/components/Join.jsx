import React from 'react';
import axios from 'axios';
import socket from '../socket';

const Join = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Enter the data');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  };

  return (
    <div className='join-block'>
      <input
        type='text'
        placeholder='Room ID'
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type='text'
        placeholder='Your nickname'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className='btn btn-primary' onClick={onEnter}>
        {isLoading ? 'Joining...' : 'Join'}
      </button>
    </div>
  );
};

export default Join;
