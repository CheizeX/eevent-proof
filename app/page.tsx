'use client';
import * as S from './page.styled';
import Steps from '@/components/Steps/Steps';
import Controls from '@/components/Controls/Controls';
import { StyledLogo } from './page.styled';

export default function Home() {
	return (
		<S.StyledMain>
			<StyledLogo>
				Evvent <span>form </span>{' '}
			</StyledLogo>
			<Steps />

			<Controls />
		</S.StyledMain>
	);
}
