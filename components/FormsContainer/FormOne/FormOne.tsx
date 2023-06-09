// FormOne.tsx
import React, { FC } from 'react';
import { FormikProps } from 'formik';
import DynamicInput from '@/components/shared/DinamicInput/DinamicInput';
import { FormContainer } from './FormOne.styled';
import { FormValues } from './FormOne.types';

type Props = {
	formik: FormikProps<FormValues>;
};

const FormOne: FC<Props> = ({ formik }) => {
	return (
		<FormContainer>
			<DynamicInput
				placeholder='Your Full Name'
				label='Full Name'
				id='fullName'
				type='text'
				{...formik.getFieldProps('fullName')}
				error={formik.errors.fullName}
				touched={formik.touched.fullName}
			/>

			<DynamicInput
				placeholder='your@email.com'
				label='Email'
				id='email'
				type='email'
				{...formik.getFieldProps('email')}
				error={formik.errors.email}
				touched={formik.touched.email}
			/>

			<DynamicInput
				placeholder='+54 3415849048'
				label='Phone (with country code spaced with +)'
				id='phone'
				type='tel'
				{...formik.getFieldProps('phone')}
				error={formik.errors.phone}
				touched={formik.touched.phone}
			/>
		</FormContainer>
	);
};

export default FormOne;
