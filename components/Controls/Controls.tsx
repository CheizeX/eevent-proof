import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setActiveStep } from '@/redux/slices/steps.slice';
import { ButtonVariant, StyledButton } from '../shared/Button/Button';

import * as S from './Controls.styled';
enum StepOperationEnum {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
}

const steps = [
	{
		step: 1,
		title: 'Step 1',
		description: 'Please enter your personal information',
	},
	{
		step: 2,
		title: 'Step 2',
		description: 'Please enter your shipping information',
	},
	{
		step: 3,
		title: 'Step 3',
		description: 'Please enter your service information',
	},
	{
		step: 4,
		title: 'Step 4',
		description: 'Review and confirm your registration',
	},
];

const Controls = () => {
	const dispatch = useAppDispatch();
	const activeStep = useAppSelector(state => state.activeStep);

	const handleClick = (stepOperation: StepOperationEnum) => {
		let newStep = activeStep.step;

		if (stepOperation === StepOperationEnum.INCREMENT) {
			newStep =
				activeStep.step < steps.length ? activeStep.step + 1 : activeStep.step;
		} else if (stepOperation === StepOperationEnum.DECREMENT) {
			newStep = activeStep.step > 1 ? activeStep.step - 1 : activeStep.step;
		}

		const updatedStep = steps.find(step => step.step === newStep);

		if (updatedStep) {
			dispatch(setActiveStep(updatedStep));
		}
	};
	return (
		<S.StyledButtonsContainer>
			<StyledButton
				text='Previous'
				onClick={() => handleClick(StepOperationEnum.DECREMENT)}
			/>

			<StyledButton
				text='Next'
				onClick={() => handleClick(StepOperationEnum.INCREMENT)}
				variant={ButtonVariant.OUTLINED}
			/>
		</S.StyledButtonsContainer>
	);
};

export default Controls;
