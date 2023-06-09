import * as S from './FormFour.styled';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { HiMail } from 'react-icons/hi';

const FormFour = () => {
	const dispatch = useAppDispatch();
	const { StepFourSlice } = useAppSelector(state => state);

	return (
		<S.StyledFormFourContainer>
			<h1>Thank you for your time!</h1>
			<div>
				<HiMail />
			</div>
			<p>Check your email for next steps {`:)`}</p>
		</S.StyledFormFourContainer>
	);
};

export default FormFour;
