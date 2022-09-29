import styled from 'styled-components';

export const StyledPreFooter = styled.section`
	margin-top: 50px;
	padding: 70px 0;
	background-color: #40170c;
	text-align: center;
	div {
		width: 80%;
		margin: auto;
	}
	h1 {
		margin-top: 0;
		margin-bottom: 50px;
		font-size: 2.5rem;
	}
	button {
		cursor: pointer;
		background-color: transparent;
		color: #fff;
		border: thin solid #fff;
		border-radius: 5px;
		padding: 15px 25px;
		font-size: 1rem;
		font-weight: bold;
		transition: 250ms;
		&:hover {
			transition: 500ms;
			border-radius: 2px;
			background-color: #fff;
			color: #40170c;
		}
		&:active {
			transition: all 25ms;
			background-color: #40170c;
			color: #fff;
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		div {
			width: 90%;
		}
		h1 {
			font-size: 2rem;
		}
	}
	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		div {
			width: 95%;
		}
		h1 {
			font-size: 1.5rem;
		}
		button {
			padding: 10px 20px;
		}
	}
	@media (max-width: ${({ theme }) => theme.screen.xs}) {
		h1 {
			font-size: 1.3rem;
		}
		button {
			font-size: 0.9rem;
		}
	}
`;
