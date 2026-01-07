import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('login') // 'login' or 'signup'
  const [userName, setUserName] = useState('')

  const handleLogin = (name) => {
    setUserName(name)
    setIsLoggedIn(true)
  }

  const handleSignup = (name) => {
    setUserName(name)
    setIsLoggedIn(true)
    setCurrentPage('login')
  }

  const handleLogout = () => {
    setUserName('')
    setIsLoggedIn(false)
    setCurrentPage('login')
  }

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <div className="welcome-section">
          <h1>Welcome, {userName}!</h1>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      ) : currentPage === 'login' ? (
        <LoginPage 
          onLogin={handleLogin}
          onSignupClick={() => setCurrentPage('signup')}
        />
      ) : (
        <SignupPage 
          onSignupClick={handleSignup}
          onBackToLogin={() => setCurrentPage('login')}
        />
      )}
    </div>
  )
}

export default App
