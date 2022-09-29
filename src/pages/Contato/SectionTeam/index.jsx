import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../../components/styles/GlobalStyles';
import theme from '../../../theme';
import CardTeam from './CardTeam';
import { Container, Box } from './style';

const SectionTeam = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<Container>
					<Box>
						<CardTeam
							image='./images/gallery/avatar.png'
							name='Ederson Paixão'
							role='Desenvolvedor Front-end'
							github='https://github.com/edersonpaixao21'
							linkedin='https://www.linkedin.com/in/ederson-paix%C3%A3o-a14051242/'
							text='Sou do Rio de Janeiro. Um desenvolvedor web que ama aprender novas coisas todos os dias que gosta de desenvolver front-end. Atualmente aprendendo mais sobre React. Sinta-se à vontade para entrar em contato comigo a qualquer hora.'
						/>
					</Box>
				</Container>
			</>
		</ThemeProvider>
	);
};

export default SectionTeam;
