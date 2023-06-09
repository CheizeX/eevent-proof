import styled from 'styled-components';

export const StyledAboutContainer = styled.section`
	& > main {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
		padding: 20px 50px;
		height: 100%;
		gap: 10px;
		background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		);
		& > h1 {
			font-size: ${({ theme }) => theme.fontSize[32]};
			color: ${({ theme }) => theme.color.gray[1]};
		}
		& > h2 {
			font-size: ${({ theme }) => theme.fontSize[24]};
			color: ${({ theme }) => theme.color.gray[1]};
		}
		& > p {
			color: ${({ theme }) => theme.color.gray[3]};
		}
		& > ul {
			color: ${({ theme }) => theme.color.gray[3]};
		}
	}
`;
