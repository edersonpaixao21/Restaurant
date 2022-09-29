import styled from 'styled-components';

export const StyledAbout = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	margin: auto;
	.p-about {
		text-align: center;
		margin-bottom: 3rem;
		width: 100%;
	}
	.flex {
		display: flex;
		gap: 25px;
	}
	@media (max-width: ${({ theme }) => theme.screen.lg}) {
		.flex {
			gap: 15px;
		}
	}
	@media (max-width: 820px) {
		.flex {
			flex-direction: column;
		}
		.p-about {
			font-size: 1rem;
		}
	}
`;

export const Title = styled.div`
	margin-top: 4rem;
	margin-bottom: 1rem;
	text-align: center;
	h3 {
		font-family: 'Dancing Script', cursive;
		color: #40170c;
		font-size: 2rem;
		line-height: 0.1rem;
		text-transform: capitalize;
	}
	h1 {
		font-weight: normal;
		font-size: 2rem;
	}
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 1rem;
		&::after,
		&::before {
			content: '';
			display: inline-block;
			margin: 0 0.5rem;
			width: 7rem;
			height: 2px;
			background-color: #40170c;
		}
		.square {
			background-color: #40170c;
			transform: rotate(45deg);
			margin: 0 0.25rem;
			&:nth-child(1) {
				width: 6px;
				height: 6px;
			}
			&:nth-child(2) {
				width: 10px;
				height: 10px;
			}
			&:nth-child(3) {
				width: 6px;
				height: 6px;
			}
		}
	}

	@media (max-width: ${({ theme }) => theme.screen.sm}) {
		.wrapper {
			&::after,
			&::before {
				width: 4rem;
			}
		}
	}
`;
