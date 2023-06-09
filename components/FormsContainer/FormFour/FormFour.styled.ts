import styled, { css } from 'styled-components';

export const StyledFormFourContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;
	gap: 0.625rem;
	width: 90%;
	height: 100%;
	padding: 1.25rem 0.625rem;
	color: ${({ theme }) => theme.color.gray[10]};
	& > h1 {
		font-family: ${({ theme }) => theme.fontFamily.northwell};
		font-weight: ${({ theme }) => theme.fontWeight[400]};
		color: ${({ theme }) => theme.color.pink[3]};
		font-size: 4rem;
		text-shadow: 0 0.125rem 0.3125rem ${({ theme }) => theme.color.pink[6]};
		filter: drop-shadow(
			3.125rem 0.625rem 0.3125rem ${({ theme }) => theme.color.pink[6]}
		);
	}
	& > :nth-child(2) {
		& > svg {
			min-width: 6.25rem;
			min-height: 6.25rem;
			fill: ${({ theme }) => theme.color.pink[3]};
			filter: drop-shadow(
				3.125rem 0.625rem 0.3125rem ${({ theme }) => theme.color.pink[6]}
			);
		}
	}
	& > p {
		color: ${({ theme }) => theme.color.pink[3]};
		font-size: ${({ theme }) => theme.fontSize[20]};
	}
	@media (max-width: 40rem) {
		transition: all 0.2s ease-in-out;
		justify-content: center;
		& > h1 {
			font-size: 3rem;
		}
	}
	@media (max-width: 27.5rem) {
		transition: all 0.2s ease-in-out;
		justify-content: center;
		& > h1 {
			font-size: 2rem;
		}
		& > p {
			font-size: ${({ theme }) => theme.fontSize[16]};
		}
	}
`;
