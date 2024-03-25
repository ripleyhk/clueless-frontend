import axios from 'axios';
import { useState, useEffect } from 'react';

import Board from './components/Board';

import './App.css';

const host = 'https://main--redactedclueless.netlify.app/.netlify/functions/server/';

// const postMessage = async (user, message) => {
//   await fetch(`${host}/messages`, {
//   method: 'POST',
//   body: JSON.stringify({
//      content: message,
//      username: user,
//   }),
//   headers: {
//      'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
//   .then((response) => response.json())
//   .catch((err) => {
//      console.log(err.message);
//   });
//   };

// const deleteMessage = async (id) => {
//   await fetch(`${host}/messages/${id}`, {
//      method: 'DELETE',
//   })
//   .then((response) => response.json())
//   .catch((err) => {
//      console.log(err.message);
//   });
//   };


function App() {
  const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState([]);
  // const [count, setCount] = useState(0);


  // const submitMessage = () => {
  //   if (username.length > 0 && message.length > 0) {
  //     console.log(`${username}: ${message}`);
  //     postMessage(username, message);
  //     setMessage('');
  //   } else if (username.length === 0) {
  //     alert("Please set a username.");
  //   } else {
  //     alert("Please write a message.")
  //   }
  // }

  // const getMessages = () => {
  //   axios.get(`${host}/messages`).then((data) => {
  //     setMessages(data.data);
  //     return data.data;
  //   })
  // }

//   useEffect(getMessages, [count]);
//   useEffect(() => {
//     const interval = setInterval(() => {
//         setCount(count + 1);
//     }, 500);

//     return () => clearInterval(interval);
// }, [count]);


  return (
    <div className="App">
      <div className='content'>
        <Board></Board>
      </div>
    </div>
  );
}
export default App;