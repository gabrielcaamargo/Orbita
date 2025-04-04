import {Box, Text, TouchableOpacityBox} from '@components';

export function SigninScreen() {
	return (
		<Box flex={1} justifyContent="center" alignItems="center">
			<TouchableOpacityBox
				backgroundColor="orbitalBlue"
				paddingVertical="s8"
				paddingHorizontal="s16"
				borderRadius="s8">
				<Text color="white" weight="Medium" preset="paragraphLarge">
					SigninScreen
				</Text>
			</TouchableOpacityBox>
		</Box>
	);
}
