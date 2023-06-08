import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	max-width: 400px;
	margin: 0 auto;
	& > form {
		height: 100%;
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
`;
