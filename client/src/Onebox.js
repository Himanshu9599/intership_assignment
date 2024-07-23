import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Onebox() {
  const [threads, setThreads] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:5000/onebox/list')
      .then(response => setThreads(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (thread_id) => {
    axios.delete(`http://localhost:5000/onebox/${thread_id}`)
      .then(() => setThreads(threads.filter(thread => thread.id !== thread_id)))
      .catch(error => console.log(error));
  };

  const handleReply = (thread_id) => {
    const body = prompt('Enter reply body:');
    if (body) {
      axios.post(`http://localhost:5000/reply/${thread_id}`, {
        from: 'example@example.com',
        to: 'recipient@example.com',
        subject: 'Re: Subject',
        body: `<html>${body}</html>`
      }).then(() => alert('Reply sent'))
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="onebox-container">
      <h2>Onebox</h2>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <h3>{thread.subject}</h3>
            <p>{thread.body}</p>
            <button onClick={() => handleDelete(thread.id)}>Delete</button>
            <button onClick={() => handleReply(thread.id)}>Reply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Onebox;
