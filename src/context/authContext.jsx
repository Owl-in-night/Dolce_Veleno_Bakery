import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  return context
}

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  const signin = (email, password) => signInWithEmailAndPassword(auth, email, password)
  const signout = () => signOut(auth)

  const SigninWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(true)
    })
    return () => unsubscribe()
  }, [])

  return (
    <authContext.Provider value={{ signup, signin, user, signout, loading, SigninWithGoogle, resetPassword }}>
      {children}
    </authContext.Provider>
  )
}
