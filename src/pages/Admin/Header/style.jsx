import styled from 'styled-components';

export const StyledHeader = styled.header`
	.link {
		text-decoration: none;
		color: inherit;
		img {
			width: 150px;
		}
		p {
			position: absolute;
			top: 130px;
			padding-left: 20px;
		}
		&:hover {
			h1 {
				color: #ff3a39;
				span {
					color: #000;
				}
			}
			p {
				text-decoration: underline;
			}
		}
	}
`;
