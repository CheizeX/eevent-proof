// FormsContainer.tsx
import React from 'react';
import * as S from './FormsContainer.styled';
import FormOne from './FormOne/FormOne';
import { Form, FormikProps } from 'formik';
import { FormValues } from './FormOne/FormOne.types';
import { useAppSelector } from '@/redux/hooks';
import FormTwo from './FormTwo/FormTwo';
import FormFour from './FormFour/FormFour';
import FormThree from './FormThree/FormThree';

type Props = {
	formik: FormikProps<FormValues>;
};

const FormsContainer: React.FC<Props> = ({ formik }) => {
	const { activeStep } = useAppSelector(state => state);

	return (
		<S.StyledFormStepsContainer>
			{activeStep.step === 1 ? (
				<FormOne formik={formik} />
			) : activeStep.step === 2 ? (
				<FormTwo />
			) : activeStep.step === 3 ? (
				<FormThree />
			) : (
				<FormFour />
			)}
		</S.StyledFormStepsContainer>
	);
};

export default FormsContainer;
