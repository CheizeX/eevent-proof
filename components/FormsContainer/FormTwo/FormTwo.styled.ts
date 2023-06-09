import styled, { css } from 'styled-components';

export const StyledFormTwoContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;
	gap: 0.625rem;
	width: 100%;
	padding: 1.25rem 0.625rem;
	height: 100%;
`;

export const StyledButtonCard = styled.button<{ selected: boolean }>`
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 0.625rem;
	width: 100%;
	min-height: 5rem;
	background-color: #f5f5f5;
	border-radius: 0.3125rem;
	gap: 0.625rem;
	transition: all 0.3s ease-in-out;
	${({ selected }) =>
		selected &&
		css`
			transition: all 0.3s ease-in-out;
			box-shadow: 0 0rem 0rem 0.125rem #ffffff, 0 0rem 0.3125rem 0.25rem #ffffff;
			border: 0.0625rem dotted #ff9b9b;
		`}

	& > svg {
		min-width: 2.5rem;
		min-height: 2.5rem;
		> path {
			fill: #ed1e78;
			stroke: #ed1e78;
		}
	}
	& > div {
		color: ${({ theme }) => theme.color.gray[1]};
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
		& > h1 {
			font-weight: ${({ theme }) => theme.fontWeight[600]};
		}
		& > span {
			color: ${({ theme }) => theme.color.gray[4]};
		}
	}
`;
