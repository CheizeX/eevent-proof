'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as S from './page.styled';
import Steps from '@/components/Steps/Steps';
import Controls from '@/components/Controls/Controls';
import { StyledLogo } from './page.styled';
import FormsContainer from '@/components/FormsContainer/FormsContainer';
import { FormValues } from '@/components/FormsContainer/FormOne/FormOne.types';

export default function Home() {
	const initialValues: FormValues = {
		fullName: '',
		email: '',
		phone: '',
	};

	const validationSchema = Yup.object({
		fullName: Yup.string()
			.required('Full name is required')
			.min(3, 'Too short'),
		email: Yup.string()
			.required('Email is required')
			.test('is-valid-email', 'Invalid email', value =>
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
			),
		phone: Yup.string()
			.required('Phone number is required')
			.min(10, 'Too short')
			.matches(/^\+\d{1,3}\s\d{1,14}$/, 'Invalid phone number'),
	});

	const handleSubmit = (values: FormValues) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit,
	});

	return (
		<S.StyledMain>
			<StyledLogo>
				Evvent. <span>form </span>{' '}
			</StyledLogo>
			<div>
				<Steps />
				<FormsContainer formik={formik} />
			</div>
			<Controls formik={formik} />
		</S.StyledMain>
	);
}
