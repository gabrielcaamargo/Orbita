import React from 'react';
import {Text, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>App.tsx</Text>
			</View>
		</ThemeProvider>
	);
}
