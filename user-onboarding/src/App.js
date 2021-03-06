import React, {useState, useEffect} from 'react'

import './App.css';
import axios from 'axios'
import * as yup from 'yup'

import Form from './Form'
import User from './User'
import formSchema from './formSchema'

import styled from 'styled-components';

const StyledHeader = styled.div`

background-color:${props => props.theme.tertiaryColor};
padding:${props => props.theme.paddingSmall};
color:${props => props.theme.primaryColor};

h1{
  color:${props => props.theme.primaryColor};
  display:flex;
  justify-content:center;
}
.App-header{
  min-height: 30vh;
  background-color:${props => props.theme.tertiaryColor};
}


`

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
  terms: {
    agree: false,
    disagree: false,
  },
}

const initialFormErrors ={
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data.data)
    console.log(res.data.data)
  })
  .catch(err => {
    debugger
  })
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers(users.concat(res.data))
    // setUsers([
    //   ...users, 
    // ])
    console.log(res)
  })
  .catch(err => {
    debugger
  })
  .finally(() => {
    setFormValues(initialFormValues)
  })
}

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({...formErrors, [name]: ""})
  })
  .catch(err => {
    setFormErrors({...formErrors, [name]: err.errors[0]})
  })
  setFormValues({...formValues, [name]: value})
}

const checkboxChange = (name, isChecked) => {
  setFormValues({...formValues, terms: {...formValues.terms, [name]: isChecked}})
}

const submit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name:formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    role: formValues.role,
    terms: Object.keys(formValues.terms),
    id: Math.floor(Math.random() * 100000),
  }
  postNewUser(newUser)
}

useEffect(() => {
  getUsers()
}, [])


useEffect(() => {
  formSchema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid);
  })
},[formValues])

useEffect(() => {
console.log(users)
},[users])
  return (
    <StyledHeader className="App">
      <header className="App-header"><h1>User App</h1></header>
      <Form
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        users.map((user) => {
          // console.log(user)
          return (
           
            <User key={user.id} details={user} />
            
          )
           
        })
      }
    </StyledHeader>
  );
}

export default App;
