import styled from 'styled-components';

export const StyledFormStepsContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: space-evenly;
	width: 100%;
	min-height: 100%;
	border-radius: 0.625rem;
	background-image: linear-gradient(45deg, #ed1e78 0%, #ff9b9b 100%);
	box-shadow: inset 0 0rem 0rem 0.125rem #ffffff;
	border: 0.125rem solid #ff9b9b;
	@media (max-width: 40rem) {
		transition: all 0.2s ease-in-out;
		min-height: 100%;
		height: fit-content;
	}
`;
