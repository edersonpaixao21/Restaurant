import styled from 'styled-components';

export const StyledCarousel = styled.div`
	background: ${({ background }) => `url(./images/${background})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 15rem;
	}

	h1 {
		font-family: 'Dancing Script', cursive;
		line-height: 1;
		font-size: 7vw;
		font-weight: normal;
		margin-bottom: 30px;
		text-align: center;
	}

	span {
		color: #40170c;
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 5px;
		text-shadow: 0 2px 2px #000;

		&::after,
		&::before {
			content: '';
			display: inline-block;
			margin: 0 2rem;
			width: 70px;
			transform: translateY(-5px);
			height: 2px;
			background-color: #40170c;
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		h1 {
			font-size: 12vw;
		}
	}
	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		h1 {
			font-size: 15vw;
			margin: 0 20px;
			margin-top: 40px;
		}
		p:nth-of-type(2) {
			&::after,
			&::before {
				margin: 0 1rem;
				width: 60px;
			}
		}
	}
`;
