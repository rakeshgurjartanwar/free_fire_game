import React from 'react'
import "./Header.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

export const Header = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <div className="Header">
        <h1>Free</h1>
        <h2>Fire</h2>
        <h3>Turnament</h3>
        <div className="login">
          {
            isAuthenticated ? "" :
              <button style={{ backgroundColor: 'white', marginTop: '10px', border: 'none', marginLeft: '5px' }} onClick={() => loginWithRedirect()}>Log In</button>
          }
        </div>
      </div>

    </>
  )
}
