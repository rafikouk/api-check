import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './UserCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Data, setData] = useState([])
  const [error, setError] = useState([null])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
   .then(res => {
     setData(res.data)
     console.log(res.data);
     })
     .catch(error => setError(error))
     }, [])

  // posting with axios
  const [user, setUser] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("https://jsonplaceholder.typicode.com/users", user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  };

  const handleChange = e =>
    setUser({...user, [e.target.name]: e.target.value});  

  
  
   return (
    <div className="App">
      <h1>Workshop API</h1>
      <div className='usercard'>
        {Data.map(user => {
          return <UserCard key={user.id} user={user} />
        })}
      </div>
    </div>
  );
}

export default App;
