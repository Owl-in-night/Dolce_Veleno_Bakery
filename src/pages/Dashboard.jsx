import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { user, signout, loading } = useAuth();

  const handleSignout = async () =>{
    try {
      await signout();
    } catch (error) {
      console.error(error);
    }
  }

  if(loading)return <h1>Loading</h1>

  return (
    <div className='w-full max-w-xs m-auto text-black'>
      <h1>Bienvenido {user.displayName || user.email}</h1>
      <button onClick={handleSignout}>Sign Out</button>
      </div>
    
  )
}
