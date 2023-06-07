import { mainTheme } from '@/themes/main.theme';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './lib/registry';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
		</StyledComponentsRegistry>
	);
}
