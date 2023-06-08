import { styled } from 'styled-components';

export const StyledButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	width: 100%;
	background: ${({ theme }) => theme.color.gray[9]};
`;
