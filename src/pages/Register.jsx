import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas.')
      return
    }

    try {
      await axios.post('http://localhost:3000/api/signup', {
        username,
        email,
        password,
      })

      toast.success('Inscription réussie !')
      navigate('/login')
    } catch (err) {
      toast.error("Erreur lors de l'inscription.")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 p-6 shadow-lg rounded bg-white"
      >
        <h2 className="text-2xl font-bold text-center text-black">Créer un compte</h2>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="w-full p-3 bg-blue-100 rounded text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          className="w-full p-3 bg-blue-100 rounded text-black"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-900 transition"
        >
          S'inscrire
        </button>

        <p className="text-center text-sm text-black">
          Vous avez déjà un compte ?{' '}
          <a href="/login" className="text-indigo-800 hover:underline">
            Connexion
          </a>
        </p>
      </form>
    </div>
  )
}

export default Register
