import React from 'react';
import { useState } from 'react';
import { Container } from './styleNav';
import Hmenu from '../hamburgerMenu';
import NavBarHamburger from '../navBarHamburger';
import LinksMenu from '../linkMenu';
import { WraperNavMobile } from './styleNav';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import logoImg from '../../../public/images/gallery/logo.png'

const Nav = () => {
	const [active, setMode] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<>
				<nav>
					<Container>
						<a href='/.' className='logo'>
							<img src={logoImg} alt="logo good chef" />
						</a>
						<div className='navDesktop'>
							<LinksMenu />
						</div>

						<WraperNavMobile>{active && <NavBarHamburger />}</WraperNavMobile>

						<div className='inc'>
							<Hmenu onClick={() => { setMode(!active);}}/>
						</div>
					</Container>
				</nav>
			</>
		</ThemeProvider>
	);
};

export default Nav;
