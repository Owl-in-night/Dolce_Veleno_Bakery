import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const {user, signout, loading} = useAuth();
  const handleSignout = async () =>{
    await signout();
  }

  if(loading)return <h1>Loading</h1>

  return (
    <div>
      <h1>Bienvenido {user.email}</h1>
      <button onClick={handleSignout}>Sign Out</button>
      </div>
    
  )
}
export default Dashboard
