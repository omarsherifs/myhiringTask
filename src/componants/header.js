import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
      <header style={headerStyle}>
          <h1>User Info</h1>
          <Link style={linkStyle} to="/"> Map </Link> | <Link style={linkStyle} to="/Users"> Users </Link>
      </header>
  )  
}

const headerStyle = {
    background:" #4FC3A1",
    color:'white',
    textAlign:'center',
    padding: '10px',
    height:'10hv',
}

const linkStyle= {
   color: '#fff',
   textDecoration: 'none', 
}

export default Header;