import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const LocationPicker = () => {
	const getLocationHandler = () => {};

	const pickOnMapHandler = () => {};

	return (
		<View>
			<View style={styles.mapPreview}></View>
			<View>
				<Button mode="contained" onPress={getLocationHandler}>
					Locate User
				</Button>
				<Button mode="contained" onPress={pickOnMapHandler}>
					Pick on Map
				</Button>
			</View>
		</View>
	);
};

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		marginVertical: 8,
		width: "100%",
		height: 200,
		justifyContent: "center",
		alignItems: "center",
	},
});
