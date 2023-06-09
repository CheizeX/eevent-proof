import * as S from './Steps.styled';
import { WavesSvg } from './Waves/Waves';
import activeStepSlice from '../../redux/slices/steps.slice';
import { useAppSelector } from '@/redux/hooks';

const Steps = () => {
	const step = useAppSelector(state => state.activeStep);

	return (
		<S.StyledFormStepContainer
			percent={
				step.step === 1
					? '0%'
					: step.step === 2
					? '25%'
					: step.step === 3
					? '50%'
					: step.step === 4
					? '75%'
					: '100%'
			}
		>
			<span>
				{[4, 3, 2, 1].map(item => (
					<span
						key={item}
						style={{
							color: step.step > item ? '#ff9b9b' : '',
						}}
					>
						{item}
					</span>
				))}
			</span>
			<WavesSvg />
			<div />
		</S.StyledFormStepContainer>
	);
};

export default Steps;
