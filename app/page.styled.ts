import styled from 'styled-components';

export const StyledMain = styled.main`
	display: flex;
	background-color: ${({ theme }) => theme.color.gray[10]};
	width: 50%;
	min-width: 345px;
	border-radius: 0.8rem;
	padding: 2rem 1.5rem;
	box-shadow: 0 0 0.5rem 0.05rem rgba(0, 0, 0, 0.1);
	position: relative;
`;

export const StyledLogo = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.northwell};
	color: ${({ theme }) => theme.color.gray[1]};
	font-size: ${({ theme }) => theme.fontSize[48]};
	position: absolute;
	left: 10px;
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
