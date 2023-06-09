import * as S from './FormTwo.styled';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { StepTwoType, setStepTwo } from '@/redux/slices/stepTwo.slice';
import { sportsStep } from './FormTwo.shared';
import { GiWaterPolo } from 'react-icons/gi';
import { GrSwim } from 'react-icons/gr';
import { FaSwimmer } from 'react-icons/fa';

const FormTwo = () => {
	const dispatch = useAppDispatch();
	const { StepTwoSlice } = useAppSelector(state => state);

	return (
		<S.StyledFormTwoContainer>
			{sportsStep.map(item => {
				return (
					<S.StyledButtonCard
						selected={StepTwoSlice.id === item.id}
						onClick={() =>
							dispatch(
								setStepTwo({
									id: item.id,
									name: item.name,
									description: item.description,
								} as StepTwoType)
							)
						}
					>
						{item.id === 1 ? (
							<FaSwimmer />
						) : item.id === 2 ? (
							<GiWaterPolo />
						) : (
							<GrSwim />
						)}
						<div>
							<h1>{item.name}</h1>
							<span>{item.description}</span>
						</div>
					</S.StyledButtonCard>
				);
			})}
		</S.StyledFormTwoContainer>
	);
};

export default FormTwo;
