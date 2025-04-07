import {Box, Button, Screen, Text} from '@components';
import {useAppTheme} from '@hooks';
import {StatusBar} from 'react-native';

export function SigninScreen() {
	const colors = useAppTheme();

	return (
		<Screen>
			<Box>
				<Text
					preset="headingExtraLarge"
					weight="SemiBold"
					color="orbitalBlue"
					fontFamily="Montserrat">
					Explore.
				</Text>
				<Text
					preset="headingExtraLarge"
					weight="SemiBold"
					color="orbitalBlue"
					fontFamily="Montserrat">
					Your.
				</Text>
				<Text
					preset="headingExtraLarge"
					weight="SemiBold"
					color="orbitalBlue"
					fontFamily="Montserrat">
					Surroundings.
				</Text>

				<Text preset="paragraphLarge" marginTop="s12" color="grayMain">
					Places to work, relax, connect — all a tap away.
				</Text>
			</Box>
		</Screen>
	);
}
