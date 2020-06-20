import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={() => console.log('pressed')}>
				Happy for my first app!
			</Text>
			<Image
				source={{
					uri: 'https://avatars1.githubusercontent.com/u/62782513?s=60&v=4',
				}}
			/>
			{/*Native has onPress instead of on click event*/}
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
