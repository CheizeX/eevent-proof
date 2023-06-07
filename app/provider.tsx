import { mainTheme } from '@/themes/main.theme';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './lib/registry';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<StyledComponentsRegistry>
				<ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
			</StyledComponentsRegistry>
		</Provider>
	);
}
