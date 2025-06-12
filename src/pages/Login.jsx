import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password })
      localStorage.setItem('token', response.data.token)
      toast.success('Connexion réussie !')
      navigate('/dashboard')
    } catch (err) {
      toast.error('Email ou mot de passe incorrect.')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center text-black">Bienvenue</h2>

        <input
          type="email"
          placeholder="Adresse email"
          className="w-full p-3 bg-blue-100 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 bg-blue-100 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-900">
          Se connecter
        </button>

        <p className="text-center text-sm text-black">
          Pas encore de compte ?{' '}
          <a href="/signups" className="text-indigo-800 hover:underline">
            Inscription
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
