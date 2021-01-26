import React, {useState} from 'react'
import axios from 'axios'

const initalForm = {
  userName:'',
  password: ''
}

function Login() {

  const [inputValue, setInputValue] = useState(initalForm)


  const handleChange = e => {
    console.log('handling change', e)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('handling submit')
  }



  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>

        <label>
          UserName:
          <input type="text" name="userName" onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
