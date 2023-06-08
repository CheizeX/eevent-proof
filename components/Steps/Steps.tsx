import * as S from './Steps.styled';
import { WavesSvg } from './Waves/Waves';

const Steps = () => {
	return (
		<S.StyledFormStepContainer>
			<span>
				{[4, 3, 2, 1].map(item => (
					<span key={item}>{item}</span>
				))}
			</span>
			<WavesSvg />
			<div />
		</S.StyledFormStepContainer>
	);
};

export default Steps;
