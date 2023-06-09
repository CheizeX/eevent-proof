import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 1rem 0;
	gap: 0.625rem;
	& > form {
		height: 100%;
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	@media (max-width: 40rem) {
		transition: all 0.2s ease-in-out;
		height: fit-content;
		min-height: 350px;
		padding: 1.25rem 0;
		justify-content: space-evenly;
		& > form {
			min-height: 300px;
			transition: all 0.2s ease-in-out;
			height: fit-content;
			min-height: 100%;
		}
	}
`;
