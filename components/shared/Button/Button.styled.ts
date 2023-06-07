import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: #fff;
	border: 1px solid #eaeaea;
	border-radius: 4px;
	color: ${({ theme }) => theme.color.turquoise[1]};
	cursor: pointer;
	font-size: 1rem;
	line-height: 1.5;
	padding: 0.5rem 0.75rem;
	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: ${({ theme }) => theme.color.turquoise[1]};
		border-color: ${({ theme }) => theme.color.turquoise[1]};
		color: #fff;
	}
`;
