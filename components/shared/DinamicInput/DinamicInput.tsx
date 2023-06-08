import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 90%;
	height: 100%;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	color: ${({ theme }) => theme.color.pink[3]};
`;

const Input = styled.input`
	width: 100%;
	min-height: 40px;
	border-radius: 10px;
	border: none;
	outline: none;
	padding: 0 0.5rem;
	color: ${({ theme }) => theme.color.pink[6]};
	&::placeholder {
		color: ${({ theme }) => theme.color.gray[8]};
	}
`;

const Error = styled.div`
	color: ${({ theme }) => theme.color.orange[6]};
	font-size: 0.8rem;
	margin-top: 0.5rem;
`;

interface DynamicInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	error?: string;
	touched?: boolean;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
	label,
	id,
	error,
	touched,
	...props
}) => {
	return (
		<InputContainer>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} {...props} />
			{touched && error && <Error>{error}</Error>}
		</InputContainer>
	);
};

export default DynamicInput;
