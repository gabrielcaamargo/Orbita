import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea} from '@hooks';

import {Box} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
	scrollable?: boolean;
	paddingHorizontal?: boolean;
	children: React.ReactNode;
}

export function Screen({
	scrollable,
	children,
	paddingHorizontal = true,
}: ScreenProps) {
	const Container = scrollable ? ScrollViewContainer : ViewContainer;
	const {top, bottom} = useAppSafeArea();

	return (
		<KeyboardAvoidingView
			style={{flex: 1}}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<Container>
				<Box
					paddingHorizontal={paddingHorizontal ? 's16' : undefined}
					flex={1}
					style={{paddingTop: top, paddingBottom: bottom}}>
					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}
