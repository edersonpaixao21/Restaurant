import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyles from '../../components/styles/GlobalStyles';
import {Container, Box} from './style';
import SectionTeam from './SectionTeam';

const Contato = () => {
	return (
   <ThemeProvider theme={theme}>
    <GlobalStyles/>
		 <>
		 <Container>
			<Box>
			<h1>Sobre mim</h1>
		 
			</Box>
			<p className='p-contato'>Para que fosse possível realizar esse projeto contei com muito estudo.
        	 Sou um desenvolvedor apaixonado por tecnologia.</p>
			<SectionTeam />
		 </Container>
		 </>
    </ThemeProvider>
	)
};

export default Contato;
