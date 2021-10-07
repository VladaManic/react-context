import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<nav className='navigation'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/add'>Add</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
