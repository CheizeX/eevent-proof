import * as S from './FormThree.styled';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { StepThreeType, setStepThree } from '@/redux/slices/stepThree.slice';
import { animalsStep } from './FormThree.shared';

const FormThree = () => {
	const dispatch = useAppDispatch();
	const { StepThreeSlice } = useAppSelector(state => state);

	return (
		<S.StyledFormThreeContainer>
			{animalsStep.map(item => (
				<S.StyledButtonCard
					selected={StepThreeSlice.activeItems.includes(item.id)}
					onClick={() => dispatch(setStepThree(item.id))}
				>
					{item.icon}
				</S.StyledButtonCard>
			))}
		</S.StyledFormThreeContainer>
	);
};

export default FormThree;
