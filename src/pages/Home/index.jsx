import React from 'react';
import './homeStyle.css';
import perfilImg from '../../assets/logo-perfil.png';
import projectRNP from '../../assets/projectRNP.png';
import projectDVP from '../../assets/projectDVP.png';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoNodejs } from 'react-icons/io';
import { IoLogoGoogleplus } from 'react-icons/io';
import { IoLogoPython } from 'react-icons/io';


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
				<img src={projectRNP} alt="projectRNP" className="explaining-img" />
				<span className="explaining-text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
					Minus dolore expedita sequi aliquam eaque deserunt provident voluptates a, 
					itaque voluptate ea culpa recusandae consequatur vero fugiat libero ipsum veniam accusamus?
				</span>

				<img src={projectDVP} alt="" className="explaining-img" />
				<span className="explaining-text">

					Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
					Minus dolore expedita sequi aliquam eaque deserunt provident voluptates a, 
					itaque voluptate ea culpa recusandae consequatur vero fugiat libero ipsum veniam accusamus?
				</span>
			</div>

			<div className="stack-container">
				<h2 className="stack-title">Linguagens onde tenho mais proeficiencia.</h2>
				<div className="stacks-icons">
					<span className='stack'><IoLogoJavascript className='icon' />JavaScript</span>
					<span className='stack'><IoLogoHtml5 className='icon' />HTML5</span>
					<span className='stack'><IoLogoCss3 className='icon' />CSS3</span>
					<span className='stack'><IoLogoNodejs className='icon' />NodeJs</span>
					<span className='stack'><IoLogoPython className='icon' />Python</span>
				</div>
			</div>
			
			<div className="contact-me">
				<h2 className="contact-title">Entre em contato comigo.</h2>
				<div className="contacts">
					<a href="https://github.com/DenisEdSilva" className="contact"><FiGithub className='icon' />GitHub</a>
					<a href="https://www.linkedin.com/in/denis-eduardo-da-silva-37a344185/" className="contact"><FiLinkedin className='icon' />LinkedIn</a>
					<a href="https://api.whatsapp.com/send?phone=5566996608693" className="contact"><IoLogoWhatsapp className='icon' />WhatsApp</a>
					<a href="" className="contact"><IoLogoGoogleplus className='icon' />Gmail</a>
				</div>
			</div>
			
		</div>
	);
}