import React from 'react';
import './style.css'

import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<div className="container">
				<div className="nav">
					<Link to="/">Pagina Inicial</Link>
					<Link to="/studys">Estudos</Link>
					<Link to="/socials">Sociais</Link>
					<Link to="/projects">Projetos</Link>
				</div>
			</div>
		</div>
	);
}