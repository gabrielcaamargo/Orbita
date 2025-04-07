import {ScrollView, ScrollViewProps, View, ViewProps} from 'react-native';

interface ScrollViewContainerProps extends ScrollViewProps {}
interface ViewContainerProps extends ViewProps {}

export function ScrollViewContainer({
	children,
	...scrollViewProps
}: ScrollViewContainerProps) {
	return (
		<ScrollView {...scrollViewProps} style={{flex: 1}}>
			{children}
		</ScrollView>
	);
}

export function ViewContainer({children, ...viewProps}: ViewContainerProps) {
	return (
		<View {...viewProps} style={{flex: 1}}>
			{children}
		</View>
	);
}
