// FormsContainer.tsx
import React from 'react';
import * as S from './FormsContainer.styled';
import FormOne from './FormOne/FormOne';
import { FormikProps } from 'formik';
import { FormValues } from './FormOne/FormOne.types';
import { useAppSelector } from '@/redux/hooks';

type Props = {
	formik: FormikProps<FormValues>;
};

const FormsContainer: React.FC<Props> = ({ formik }) => {
	const { activeStep } = useAppSelector(state => state);

	return (
		<S.StyledFormStepsContainer>
			{activeStep.step === 1 ? <FormOne formik={formik} /> : null}
		</S.StyledFormStepsContainer>
	);
};

export default FormsContainer;
