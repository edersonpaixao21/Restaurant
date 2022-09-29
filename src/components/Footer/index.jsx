import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Footer/styleFooter';
import {
	BsInstagram,
	BsFacebook,
	BsTwitter,
	BsTelephone
} from 'react-icons/bs';
import logoImg from '../../../public/images/gallery/logo.png'
import { MdMailOutline } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const Footer = () => {
	return (
		<ThemeProvider theme={theme}>
			<footer>
				<Container>
					<div className='footer-top'>
						<div className='flex-col coluna1'>
							<img src={logoImg} alt="logo good cheff" />
							<p className='descricao'>
								Trazendo o melhor da comida brasileira para o seu prato.
							</p>
							<ul className='social'>
								<li>
									<a href=''>
										<BsFacebook />
									</a>
								</li>
								<li>
									<a href=''>
										<BsInstagram />
									</a>
								</li>
								<li>
									<a href=''>
										<BsTwitter />
									</a>
								</li>
							</ul>
						</div>
						<div className='flex-col coluna2'>
							<h4 className='titulo'>ENDEREÇO</h4>
							<p className='descricao'>Av. Nossa Sra. de Copacabana, 661</p>
							<p className='descricao'>Copacabana, Rio de Janeiro</p>

							<p className='descricao'>
								<BsTelephone /> +55 (21)3098-3546
							</p>
							<p className='descricao'>
								<MdMailOutline /> goodchef@good.com.br
							</p>
						</div>

						<div className='flex-col coluna3'>
							<h4 className='titulo'>Horario de Atendimento</h4>
							<ul className='timings flex-col'>
								<li>
									<p className='days'>Segunda</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Terça</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Quarta</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Quinta</p>
									<div className='time'>10:00 - 23:00</div>
								</li>
								<li>
									<p className='days'>Sexta</p>
									<div className='time'>10:00 - 00:00</div>
								</li>
								<li>
									<p className='days'>Sabado</p>
									<div className='time'>10:00 - 00:00</div>
								</li>
								<li>
									<p className='days'>Domingo</p>
									<div className='time'>10:00 - 00:00</div>
								</li>
							</ul>
						</div>
						<div className='flex-col coluna4'>
							<h4 className='titulo'>Mais Informações</h4>
							<Link to='/admin'>Admin</Link>
							<Link to='/reserva'>Reservas</Link>
							<Link to='/cardapio/menu'>Cardápio</Link>
							<Link to='/contato'>Equipe</Link>
						</div>
					</div>

					<div className='footer-bottom flex-row'>
						<span>Copyright &copy; 2022 | Ederson Paixão</span>
					</div>
				</Container>
			</footer>
		</ThemeProvider>
	);
}

export default Footer;
