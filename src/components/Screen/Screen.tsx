import {Box} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
	scrollable?: boolean;
	children: React.ReactNode;
}

export function Screen({scrollable, children}: ScreenProps) {
	const Container = scrollable ? ScrollViewContainer : ViewContainer;

	return (
		<Container>
			<Box flex={1}>{children}</Box>
		</Container>
	);
}
