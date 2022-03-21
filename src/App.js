import React from 'react';
import socket from './socket';
import reducer from './reducer';

import Join from './components/Join';

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

  console.log(state);

  return (
    <div className='wrapper'>
      {!state.isAuth && <Join onLogin={onLogin} />}
    </div>
  );
}

export default App;
