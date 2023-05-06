import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
		<Link to='/' className="active">Registration</Link>
		<Link to='/show-data'>View Data</Link>
	</nav>
  )
}

export default Header