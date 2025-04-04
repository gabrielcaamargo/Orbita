import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SigninScreen} from '@screens';

export type AuthStackParamList = {
	SigninScren: undefined;
};

export function AuthStack() {
	const Stack = createNativeStackNavigator<AuthStackParamList>();

	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="SigninScren" component={SigninScreen} />
		</Stack.Navigator>
	);
}
