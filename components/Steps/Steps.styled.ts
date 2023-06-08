import styled from 'styled-components';

export const StyledFormStepContainer = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
	position: relative;
	box-shadow: inset 0 0px 0px 2px #ffffff;
	border: 2px solid #ff9b9b;
	min-height: 100%;
	height: 320px;
	width: 70px;
	border-radius: 10px;
	background-image: linear-gradient(70deg, #ed1e78 0%, #ff9b9b 100%);
	& > :nth-child(1) {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		color: ${({ theme }) => theme.color.gray[1]};
		& > span {
			color: ${({ theme }) => theme.color.pink[3]};
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 25%;
			font-size: 1.2rem;
			font-weight: 700;
		}
		& > :nth-child(4) {
			border: none;
		}
	}
	& > :nth-child(3) {
		height: 10%;
		background: ${({ theme }) => theme.color.gray[10]};
	}
`;
