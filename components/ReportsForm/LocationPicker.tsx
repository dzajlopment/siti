import { View, StyleSheet, Alert, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from "expo-location";
import { useState, useEffect } from "react";
import { getMapPreview } from "../../util/location";
import {
	useNavigation,
	useRoute,
	useIsFocused,
} from "@react-navigation/native";
import Icons from "@expo/vector-icons/Ionicons";

const LocationPicker = () => {
	const [pickedLocation, setPickedLocation] = useState<
		undefined | { lat: number; lng: number }
	>(undefined);
	const isFocused = useIsFocused();

	const navigation = useNavigation();
	const route = useRoute();

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	useEffect(() => {
		if (isFocused && route.params) {
			const mapPickedLocation = route.params && {
				lat: (route.params as any).pickedLat,
				lng: (route.params as any).pickedLng,
			};
			setPickedLocation(mapPickedLocation);
		}
	}, [route, isFocused]);

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
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<Icons name="md-location-outline" size={24} />
				<View style={styles.mapPreview}>{locationPreview}</View>
			</View>
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
		height: 190,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		marginLeft: 12,
		borderRadius: 5,
		backgroundColor: "#fff",
	},
	image: {
		height: "100%",
		width: "100%",
		borderRadius: 5,
	},
	mapContainer: {
		flexDirection: "row",
		width: "100%",
	},
	container: {
		marginTop: 10,
	},
});
