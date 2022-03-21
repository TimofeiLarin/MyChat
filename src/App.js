import React from 'react';
import socket from './socket';
import reducer from './reducer';

import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    isJoin: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
  };

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      console.log('New user', users);
    });
  }, []);

  return <div className='wrapper'>{!state.isJoin ? <Join onLogin={onLogin} /> : <Chat /> }</div>;
}

export default App;
