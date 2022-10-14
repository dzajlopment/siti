import { View, StyleSheet, Alert, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from "expo-location";
import { useState } from "react";
import { getMapPreview } from "../../util/location";
import { useNavigation } from "@react-navigation/native";
const LocationPicker = () => {
	const [pickedLocation, setPickedLocation] = useState<
		undefined | { lat: number; lng: number }
	>(undefined);

	const navigation = useNavigation();

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
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	};

	const pickOnMapHandler = () => {
		navigation.navigate("Map" as never);
	};

	let locationPreview = <Text>No location picked yet.</Text>;

	if (pickedLocation) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(pickedLocation?.lat, pickedLocation?.lng),
				}}
			/>
		);
	}

	return (
		<View>
			<View style={styles.mapPreview}>{locationPreview}</View>
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
	image: {
		width: "100%",
		height: "100%",
	},
});
