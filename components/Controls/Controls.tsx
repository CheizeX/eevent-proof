// Controls.tsx
import React, { FC } from 'react';
import { FormikProps } from 'formik';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { decrementStep, incrementStep } from '@/redux/slices/steps.slice';
import {
	ButtonState,
	ButtonVariant,
	StyledButton,
} from '../shared/Button/Button';

import * as S from './Controls.styled';
import { StepOneType, setStepOne } from '@/redux/slices/stepOne.slice';

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
	const stepTwoSlice = useAppSelector(state => state.StepTwoSlice);
	const stepThreeSlice = useAppSelector(state => state.StepThreeSlice);
	const stepFourSlice = useAppSelector(state => state.StepFourSlice);

	const handleClick = (stepOperation: StepOperationEnum) => {
		if (
			stepOperation === StepOperationEnum.INCREMENT &&
			activeStep.step < steps.length
		) {
			if (activeStep.step === 1) {
				dispatch(setStepOne(formik.values as StepOneType));
			}

			dispatch(incrementStep(1));
		} else if (
			stepOperation === StepOperationEnum.DECREMENT &&
			activeStep.step > 1
		) {
			dispatch(decrementStep(1));
		}
	};

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
		if (activeStep.step === 2 && stepTwoSlice.id !== 0) {
			return ButtonState.ENABLED;
		}
		if (activeStep.step === 3 && stepThreeSlice.activeItems.length > 0) {
			return ButtonState.ENABLED;
		}
		if (activeStep.step === 4 && stepFourSlice.id !== 0) {
			return ButtonState.ENABLED;
		}
		return ButtonState.DISABLED;
	};

	return (
		<S.StyledButtonsContainer activestep={activeStep.step}>
			<StyledButton
				text='Back'
				onClick={() => handleClick(StepOperationEnum.DECREMENT)}
			/>

			<StyledButton
				text='Continue'
				onClick={() => handleClick(StepOperationEnum.INCREMENT)}
				variant={ButtonVariant.OUTLINED}
				state={handleDisabled()}
			/>
		</S.StyledButtonsContainer>
	);
};

export default Controls;
