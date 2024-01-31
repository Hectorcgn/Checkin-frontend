import React, { useState } from 'react'
import { Input, Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const data = {
        username,
      }
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      navigate('/myprofile')
    } catch (error) {
      console.error('Error:', error)
      alert('es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
    }
  }

  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <div className="w-72 mb-4">
        <h2 className="text-3xl">Login</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div className="w-72 mb-4">
          <Input label="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="w-72 mb-4">
          <Input label="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <Button type="submit" className="w-72 mb-4" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </section>
  )
}
export default Login
