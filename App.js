import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableHighlight,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableNativeFeedback,
	Button,
	Alert, // alert is not a component, its a react native api with some built in methods
} from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={() => console.log('pressed')}>
				Happy for my first app!
			</Text>
			<TouchableWithoutFeedback>
				<Image
					source={{
						uri: 'https://avatars1.githubusercontent.com/u/62782513?s=60&v=4',
					}}
				/>
			</TouchableWithoutFeedback>
			<TouchableNativeFeedback>
				<View
					style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}
				></View>
			</TouchableNativeFeedback>
			{/*Native has onPress instead of on click event*/}

			<Button
				color='orange'
				title='click me alert'
				onPress={() =>
					Alert.alert('my title', 'My Message', [
						{
							text: 'Yes',
							onPress: () => {
								console.log('Yes');
							},
						},
						{
							text: 'No',
							onPress: () => {
								console.log('No');
							},
						},
					])
				}
			/>
			<Button
				color='blue'
				title='click me prompt'
				onPress={() =>
					Alert.prompt('My title', 'Me message', (text) => console.log(text))
				}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
