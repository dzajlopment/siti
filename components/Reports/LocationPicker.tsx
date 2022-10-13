import { View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from "expo-location";
const LocationPicker = () => {
	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	const verifyPermissions = async () => {
		if (locationPermissionInformation as PermissionStatus | null) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (
			(locationPermissionInformation as PermissionStatus | null) ===
			PermissionStatus.DENIED
		) {
			Alert.alert(
				"Insufficient Permissions!",
				"You need to grant location permissions to use this app."
			);
			return false;
		}
		return true;
	};

	const getLocationHandler = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const location = await getCurrentPositionAsync();
		console.log(location);
	};

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
