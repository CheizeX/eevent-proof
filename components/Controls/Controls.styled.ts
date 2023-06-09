import { styled } from 'styled-components';

export const StyledButtonsContainer = styled.div<{ activestep: number }>`
	display: flex;
	gap: 1.25rem;
	width: 100%;
	justify-content: space-between;

	& > :nth-child(1) {
		transition: opacity 0.3s ease-in-out;
		opacity: ${({ activestep }) => (activestep === 1 ? 0 : 1)};
		pointer-events: ${({ activestep }) => (activestep === 1 ? 'none' : 'all')};
	}
`;
