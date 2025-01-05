import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const onLoging = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Martin');
    return navigate(lastPath,{replace:true});
  }
  

  return (
    <div className='container mt-5'>
      <h1>LoginPage</h1>
      <hr />

      <button 
        className='btn btn-primary'
        onClick={onLoging}
      >
        Login
      </button>
    </div>
  )
}
