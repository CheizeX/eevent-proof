'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/shared/Button/Button';
import { Providers } from './provider';

export default function Home() {
	return (
		<Providers>
			<main>
				<Button>Styled Button</Button>
			</main>
		</Providers>
	);
}
