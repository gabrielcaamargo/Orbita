import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {Box, BoxProps} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends Omit<BoxProps, 'backgroundColor'> {
	scrollable?: boolean;
	containsPaddingHorizontal?: boolean;
	containsTopInset?: boolean;
	containsBottomInset?: boolean;
	children: React.ReactNode;
	backgroundColor?: ThemeColors;
}

export function Screen({
	scrollable,
	children,
	containsPaddingHorizontal = true,
	containsTopInset = true,
	containsBottomInset = true,
	backgroundColor,
	style,
}: ScreenProps) {
	const Container = scrollable ? ScrollViewContainer : ViewContainer;

	const {top, bottom} = useAppSafeArea();
	const colors = useAppTheme();

	console.log('Screen', backgroundColor);
	return (
		<KeyboardAvoidingView
			style={{flex: 1}}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<Container
				backgroundColor={
					backgroundColor ? colors[backgroundColor] : colors.backgroundColor
				}>
				<Box
					paddingHorizontal={containsPaddingHorizontal ? 's16' : undefined}
					flex={1}
					style={[
						{
							paddingTop: containsTopInset ? top : 0,
							paddingBottom: containsBottomInset ? bottom : 0,
						},
						style,
					]}>
					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}
