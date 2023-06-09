import styled, { css } from 'styled-components';

export const StyledFormThreeContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;
	gap: 0.625rem;
	width: 100%;
	height: 100%;
	padding: 1.25rem 0.625rem;
	overflow-y: scroll;
	scrollbar-width: 0;

	&::-webkit-scrollbar {
		transition: all 0.3s ease;
		width: 0;
	}
`;

export const StyledButtonCard = styled.button<{ selected: boolean }>`
	width: 100%;
	max-width: 30%;
	height: 45%;
	min-width: 6.25rem;
	min-height: 6.25rem;
	background-color: #f5f5f5;
	border-radius: 0.3125rem;
	transition: all 0.2s ease-in-out;
	${({ selected }) =>
		selected &&
		css`
			transition: all 0.2s ease-in-out;
			box-shadow: 0 0rem 0rem 0.125rem #ffffff, 0 0rem 0.3125rem 0.25rem #ffffff;
			border: 0.0625rem dotted #ff9b9b;
			& > svg {
				fill: ${({ theme }) => theme.color.pink[6]};
			}
		`}
	& > svg {
		width: 3.125rem;
		height: 3.125rem;
		color: ${({ theme }) => theme.color.gray[8]};
	}
`;
