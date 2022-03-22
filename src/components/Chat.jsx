import React from 'react';
import socket from '../socket';

function Chat({ users, messages, userName, roomId, onAddMessage }) {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef(null);

  const onSendMessage = () => {
    if (messageValue) {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({ userName, text: messageValue });
    setMessageValue('');
  } else {
    alert('Enter message');
  }
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);;
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat-users">
        Room: <b>{roomId}</b>
        <hr />
        <b>Online ({users.length}):</b>
        <ul>
          {users.map((name, id) => (
            <li key={name + id}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages">
        <div ref={messagesRef} className="messages">
          {messages.map((message, id) => (
            <div key={message + id}className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows="3"></textarea>
          <button onClick={onSendMessage}  type="button" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;