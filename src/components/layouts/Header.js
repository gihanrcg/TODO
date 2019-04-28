import React from 'react';
import { Link } from 'react-router-dom'

function Header(){

    return(
      <header style={headerStyles}>
          <h1>ToDo List</h1>
        
          <Link style={LinkStyle} to="/">Home</Link> |  <Link style={LinkStyle} to ="/about">About</Link>
         
      </header>
    );
}

const LinkStyle={
    textDecoration : 'none',
    color : '#FFF'
}

const headerStyles={
    color:'white',
    background:'#333',
    textAlign:'center',
    padding : '10px'
}

export default Header;