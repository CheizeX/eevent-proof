import { FC } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
}
const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>Button</StyledButton>;
};

export default Button;
