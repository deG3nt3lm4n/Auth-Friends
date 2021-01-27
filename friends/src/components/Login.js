import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from '../auth/axiosWithAuth'
import axios from 'axios'



const initalForm = {
  username:'',
  password: '',
  isLoading: false
}

function Login() {
  let history = useHistory()

  const [inputValue, setInputValue] = useState(initalForm)


  const handleChange = e => {
    const {name, value} = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })
    console.log('handling change', name, value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('handling submit', inputValue)
    // 1. Use axios to create a post request to the api
    // 2. We want to get the token and save to local storage and go to friends list
    // 3. unHappy path
    axios.post('http://localhost:5000/api/Login', inputValue)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/Friends')
      })
      .catch(err => console.log(err))

  }

  const handleLogout = (e) => {
    console.log(e)
    console.log('p')
    axiosWithAuth()
      .post('http://localhost:5000/api/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = '/'
      })
      .catch(err => console.log(err))
  }



  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>

        <label>
          UserName:
          <input type="text" name="username" onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button>Submit</button>
      </form>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Login
