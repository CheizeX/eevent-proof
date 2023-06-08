import React, { FC, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

export enum ButtonState {
	LOADING = 'LOADING',
	ENABLED = 'ENABLED',
	DISABLED = 'DISABLED',
}

export enum ButtonVariant {
	FILLED = 'filled',
	OUTLINED = 'outlined',
}

type ButtonProps = {
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	state?: ButtonState;
	variant?: ButtonVariant;
	width?: string;
	height?: string;
};

const Button = styled.button<ButtonProps>`
	width: ${({ width }) => width || '150px'};
	height: ${({ height }) => height || '40px'};
	font-size: 16px;
	font-weight: bold;
	border-radius: 27px;
	cursor: pointer;
	background-size: 100% auto;
	background-image: linear-gradient(129.16deg, #ed1e78 0%, #ff9b9b 100%);
	color: #ffffff;
	border: none;
	&:hover {
		background-size: 150% auto;
		background-position: right center;
		scale: 1.03;
		transition: 0.3s;
		cursor: pointer;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	${({ variant }) =>
		variant === ButtonVariant.OUTLINED &&
		css`
			background: none;
			color: #ed1e78;
			border: 2px solid #ed1e78;
		`}
`;

export const StyledButton: FC<ButtonProps> = ({
	text,
	onClick,
	state,
	variant,
	width,
	height,
}) => {
	return (
		<Button
			text={text ?? 'Button'}
			state={state}
			variant={variant}
			width={width}
			height={height}
			onClick={onClick} // Corregido el typo en el nombre de la prop
		>
			{text}
		</Button>
	);
};
