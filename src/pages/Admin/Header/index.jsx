import React from 'react';
import { StyledHeader } from './style';
import { Link } from 'react-router-dom';
import logoImg from '../../../../public/images/gallery/logored.png'

const Header = () => {
	return (
		<StyledHeader>
			<Link to={'/'} className='link'>
				<img src={logoImg} alt="logo good chef" />
				<p>Voltar para o site</p>
			</Link>
		</StyledHeader>
	);
};

export default Header;
