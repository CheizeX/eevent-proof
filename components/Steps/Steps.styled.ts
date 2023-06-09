import styled from 'styled-components';

export const StyledFormStepContainer = styled.aside<{ percent: string }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
	position: relative;
	box-shadow: inset 0 0rem 0rem 0.125rem #ffffff;
	border: 0.125rem solid #ff9b9b;
	min-height: 100%;
	width: 4.375rem;
	border-radius: 0.625rem;
	background-image: linear-gradient(70deg, #ed1e78 0%, #ff9b9b 100%);
	transition: all 0.3s ease-in-out;
	@media (max-width: 40rem) {
		flex-direction: row-reverse;
		justify-content: start;
		align-items: center;
		width: 100%;
		height: 4.375rem;
	}
	& > :nth-child(1) {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		color: ${({ theme }) => theme.color.gray[1]};
		@media (max-width: 40rem) {
			flex-direction: row-reverse;
			justify-content: end;
			align-items: center;
			min-height: 4.125rem;
			& > span {
				min-height: 100%;
			}
		}
		& > span {
			color: ${({ theme }) => theme.color.pink[3]};
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 25%;
			font-size: 1.2rem;
			font-weight: 700;
			transition: all 1.5s ease-in-out;
		}
		& > :nth-child(4) {
			border: 0.0625rem solid black;
			border: none;
		}
	}
	& > :nth-child(2) {
		@media (max-width: 40rem) {
			transform: translateX(-1.75rem) rotate(90deg);
		}
	}
	& > :nth-child(3) {
		height: ${({ percent }) => percent};
		background: ${({ theme }) => theme.color.gray[10]};
		transition: all 1.5s ease-in-out;
		@media (max-width: 40rem) {
			width: ${({ percent }) => percent};
			height: 100%;
		}
	}
`;
