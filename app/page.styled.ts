import styled from 'styled-components';

export const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1.25rem;
	background-color: ${({ theme }) => theme.color.gray[10]};
	width: 90%;
	min-width: 21.5625rem;
	max-width: 50rem;
	border-radius: 0.8rem;
	padding: 0.625rem;
	box-shadow: 0 0 0.5rem 0.05rem rgba(0, 0, 0, 0.1);
	position: relative;
	min-height: 25rem;
	height: fit-content;
	@media (max-width: 40rem) {
		transition: all 0.3s ease-in-out;
		min-height: 0;
		height: fit-content;
	}
	& > :nth-child(2) {
		display: flex;
		justify-content: space-between;
		gap: 0.3125rem;
		min-height: 280px;
		@media (max-width: 40rem) {
			transition: all 0.3s ease-in-out;
			flex-direction: column;
		}
	}
`;

export const StyledLogo = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.northwell};
	color: ${({ theme }) => theme.color.gray[1]};
	font-size: ${({ theme }) => theme.fontSize[48]};
	position: absolute;
	left: 0.625rem;
	top: -3.5rem;
	& > span {
		font-size: ${({ theme }) => theme.fontSize[24]};
		color: ${({ theme }) => theme.color.orange[6]};
		font-family: 'Roboto', sans-serif;
		background: -webkit-linear-gradient(
			#eee,
			${({ theme }) => theme.color.pink[6]}
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const StyledKnowAboutUs = styled.button`
	width: fit-content;
	height: 100%;
	color: ${({ theme }) => theme.color.pink[6]};
	font-weight: ${({ theme }) => theme.fontWeight[500]};
	font-family: ${({ theme }) => theme.fontFamily.northwell};
	font-size: ${({ theme }) => theme.fontSize[32]};
	letter-spacing: 0.15rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background: none;
	transition: all 0.2s ease-in-out;
	&:hover {
		transition: all 0.1s ease-in-out;
		cursor: pointer;
		scale: 1.1;
		text-shadow: 0 0 0.5rem ${({ theme }) => theme.color.pink[6]};
	}
`;
