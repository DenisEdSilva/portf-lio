import React from 'react';
import './homeStyle.css';
import perfilImg from '../../assets/logo-perfil.png'

export default function Home() {
	return (
		<div className="homeContainer">
			<div className="img-display">
				<span className="apresentation-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Dolores quam rem, voluptate inventore est atque voluptatibus doloremque quis. 
					Repellendus nihil nulla non doloribus, atque exercitationem impedit iste culpa ipsa adipisci.
				</span>
				<img src={perfilImg} alt="logoPerfil" className="apresentation-img" />
			</div>

			<div className="explaining-container">
				<img src="" alt="" className="explaining-img" />

				<span className="explaining-text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
					Minus dolore expedita sequi aliquam eaque deserunt provident voluptates a, 
					itaque voluptate ea culpa recusandae consequatur vero fugiat libero ipsum veniam accusamus?
				</span>
			</div>
			<div className="explaining-container">
				<span className="explaining-text">

				<img src="" alt="" className="explaining-img" />
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
					Minus dolore expedita sequi aliquam eaque deserunt provident voluptates a, 
					itaque voluptate ea culpa recusandae consequatur vero fugiat libero ipsum veniam accusamus?
				</span>
			</div>
			
		</div>
	);
}