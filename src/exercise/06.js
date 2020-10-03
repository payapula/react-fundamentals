// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  //const inputRef = useRef(null)
  const [username, setUsername] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = e => {
    const username = e.target.value //.toLowerCase()
    //  const isValid = username === username.toLowerCase()
    //setError(isValid ? null : 'Username must be lower case')
    setUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameinput">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          type="text"
          id="usernameinput"
        />
        {/* <div style={{color: 'red'}}>{error}</div> */}
      </div>
      <button disabled={username.length < 1} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
