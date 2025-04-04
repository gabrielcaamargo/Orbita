import {ThemeColors} from '@theme';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

interface ButtonProps extends TouchableOpacityBoxProps {
	preset?: ButtonPreset;
	children: React.ReactNode;
}

type ButtonPreset = 'default' | 'alert' | 'danger' | 'ghost';

const buttonPresets: Record<
	ButtonPreset,
	{
		backgroundColor: ThemeColors;
		textColor: ThemeColors;
	}
> = {
	default: {
		backgroundColor: 'orbitalBlue',
		textColor: 'white',
	},
	alert: {
		backgroundColor: 'yellowAlert',
		textColor: 'white',
	},
	danger: {
		backgroundColor: 'redError',
		textColor: 'white',
	},
	ghost: {
		backgroundColor: 'transparent',
		textColor: 'orbitalBlue',
	},
};

export function Button({preset = 'default', children}: ButtonProps) {
	const buttonSelectedPreset = buttonPresets[preset];

	return (
		<TouchableOpacityBox
			backgroundColor={buttonSelectedPreset.backgroundColor}
			borderRadius="s8"
			paddingHorizontal="s16"
			paddingVertical="s8">
			<Text color={buttonSelectedPreset.textColor}>{children}</Text>
		</TouchableOpacityBox>
	);
}
