import { FC } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>Button</StyledButton>;
};

export default Button;
