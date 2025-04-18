import {TextProps as RNTextProps} from 'react-native';

import {createText, TextProps as RestyleTextProps} from '@shopify/restyle';

import {Theme} from '@theme';

type TextPresets =
	| 'headingExtraLarge'
	| 'headingLarge'
	| 'headingMedium'
	| 'headingSmall'
	| 'paragraphLarge'
	| 'paragraphMedium'
	| 'paragraphSmall'
	| 'captionLarge'
	| 'captionMedium'
	| 'captionSmall';

type FontWeight = 'Bold' | 'SemiBold' | 'Medium' | 'Regular';
type FontFamily = 'Nunito' | 'Montserrat';

interface TextProps
	extends Omit<RestyleTextProps<Theme>, 'fontWeight'>,
		RNTextProps {
	preset?: TextPresets;
	weight?: FontWeight;
	fontFamily?: FontFamily;
	children: React.ReactNode;
}

function getFontFamilyStyles(fontFamily: FontFamily, fontWeight: FontWeight) {
	return `${fontFamily}-${fontWeight}`;
}

const textPresets: Record<TextPresets, {fontSize: number; lineHeight: number}> =
	{
		headingExtraLarge: {fontSize: 36, lineHeight: 44},
		headingLarge: {fontSize: 28, lineHeight: 34},
		headingMedium: {fontSize: 24, lineHeight: 30},
		headingSmall: {fontSize: 20, lineHeight: 26},
		paragraphLarge: {fontSize: 16, lineHeight: 22},
		paragraphMedium: {fontSize: 14, lineHeight: 20},
		paragraphSmall: {fontSize: 13, lineHeight: 18},
		captionLarge: {fontSize: 14, lineHeight: 18},
		captionMedium: {fontSize: 12, lineHeight: 16},
		captionSmall: {fontSize: 10, lineHeight: 14},
	};

export function Text({
	preset = 'paragraphMedium',
	weight = 'Regular',
	fontFamily = 'Nunito',
	color = 'textPrimary',
	children,
	...textProps
}: TextProps) {
	const RestyleText = createText<Theme>();

	const textSelectedPreset = textPresets[preset];

	return (
		<RestyleText
			fontFamily={getFontFamilyStyles(fontFamily, weight)}
			fontSize={textSelectedPreset.fontSize}
			lineHeight={textSelectedPreset.lineHeight}
			color={color}
			{...textProps}>
			{children}
		</RestyleText>
	);
}
