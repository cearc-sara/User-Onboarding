import React, {useState, useEffect} from 'react';
import Form from './Form';
import './App.css';
import axios from 'axios';
import * yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
}

const initialFormErrors ={
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initalDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data)
  })
  .catch(err => {
    debugger
  })
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers(users.concat(res.data))
  })
  .catch(err => {
    debugger
  })
  .finally(() => {
    setFormValues(initialFormValues)
  })
}


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
