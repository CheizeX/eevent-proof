// Controls.tsx
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FormikProps } from 'formik';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setActiveStep } from '@/redux/slices/steps.slice';
import {
	ButtonState,
	ButtonVariant,
	StyledButton,
} from '../shared/Button/Button';

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

type Props = {
	formik: FormikProps<any>;
};

const Controls: FC<Props> = ({ formik }) => {
	const dispatch = useAppDispatch();
	const activeStep = useAppSelector(state => state.activeStep);

	const handleClick = (stepOperation: StepOperationEnum) => {
		console.log('entra');
		if (stepOperation === StepOperationEnum.INCREMENT && formik.isValid) {
			let newStep =
				activeStep.step < steps.length ? activeStep.step + 1 : activeStep.step;
			const updatedStep = steps.find(step => step.step === newStep);
			if (updatedStep) {
				dispatch(setActiveStep(updatedStep));
			}
		} else if (stepOperation === StepOperationEnum.DECREMENT) {
			let newStep = activeStep.step > 1 ? activeStep.step - 1 : activeStep.step;
			const updatedStep = steps.find(step => step.step === newStep);
			if (updatedStep) {
				dispatch(setActiveStep(updatedStep));
			}
		}
	};
	console.log(formik.isValid);
	const handleDisabled = () => {
		if (activeStep.step === 1) {
			if (
				formik.isValid &&
				formik.values.fullName !== '' &&
				formik.values.email !== '' &&
				formik.values.phone !== ''
			)
				return ButtonState.ENABLED;
			return ButtonState.DISABLED;
		}
		return ButtonState.DISABLED;
	};
	console.log(handleDisabled());
	return (
		<S.StyledButtonsContainer activestep={activeStep.step}>
			<StyledButton
				text='Previous'
				onClick={() => handleClick(StepOperationEnum.DECREMENT)}
			/>

			<StyledButton
				text='Next'
				onClick={() => handleClick(StepOperationEnum.INCREMENT)}
				variant={ButtonVariant.OUTLINED}
				state={handleDisabled()}
			/>
		</S.StyledButtonsContainer>
	);
};

export default Controls;
