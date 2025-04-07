import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
	backgroundColor,
	BackgroundColorProps,
	border,
	BorderProps,
	createBox,
	createRestyleComponent,
	layout,
	LayoutProps,
	spacing,
	SpacingProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
	TouchableOpacityBoxProps,
	Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);
