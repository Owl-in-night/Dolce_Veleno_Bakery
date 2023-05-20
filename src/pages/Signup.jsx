import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, useResolvedPath } from "react-router-dom";

export function Signup() {
  const [user , setUser] = useState({
    email: '',
    password: '',
  });
  const {signup} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({target: {name, value}}) =>{
    setUser({...user,[name]: value})
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message);
    }
  } 

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"placeholder="youremail@company.ltd" onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="******" onChange={handleChange} />
        <button>Sign Up</button>
      </form>
    </div>
  )
}