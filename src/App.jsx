import { useState, useEffect } from 'react';
import './style/styl.scss';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="container">
      {
        users.map((user, key) => (
          <div key={key} className='card'>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
