import {createTheme} from '@shopify/restyle';

const palette = {
	blueLight: '#5EDFFF',
	blueMain: '#3E64FF',
	blueDark: '#1A2A56',

	coralMain: '#F25F5C',

	greenMain: '#6BF178',

	yellowMain: '#FFD166',

	purpleMain: '#9B72CF',

	orangeMain: '#FF9A76',

	white: '#FFFFFF',

	grayLightest: '#F5F7FA',
	grayLighter: '#E4E7EB',
	grayLight: '#CBD2D9',
	grayMain: '#9AA5B1',
	grayDark: '#616E7C',
	grayDarker: '#323B4C',
};

const theme = createTheme({
	colors: {
		...palette,
		backgroundColor: palette.white,
		textPrimary: palette.grayDarker,
		textSecondary: palette.grayDark,
		textTertiary: palette.grayMain,

		greenSuccess: palette.greenMain,
		redError: palette.coralMain,
		yellowAlert: palette.yellowMain,

		orbitalBlue: palette.blueMain,
		deepBlue: palette.blueDark,
		celesteBlue: palette.blueLight,
	},

	spacing: {
		s2: 2,
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
		s20: 20,
		s24: 24,
		s28: 28,
		s32: 32,
	},

	borderRadii: {
		s2: 2,
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
	},

	textVariants: {
		defaults: {},
	},
});

type Theme = typeof theme;
type ThemeColors = keyof Theme['colors'];

export {theme};
export type {Theme, ThemeColors};
