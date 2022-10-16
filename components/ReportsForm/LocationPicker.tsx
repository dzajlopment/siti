import { View, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";
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
import Icon from "@expo/vector-icons/MaterialIcons";

const LocationPicker = ({ onUpdate, value }: any) => {
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
			onUpdate(mapPickedLocation);
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
		onUpdate({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	};

	const pickOnMapHandler = () => {
		(navigation as any).push("Map");
	};

	let locationPreview = null;

	if (value) {
		locationPreview = (
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.image}
				onPress={pickOnMapHandler}
			>
				<Image
					style={styles.image}
					source={{
						uri: getMapPreview(value?.lat, value?.lng),
					}}
				/>
			</TouchableOpacity>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<Icons name="md-location-outline" size={24} color="#201f23" />
				<View style={styles.mapPreview}>
					{locationPreview}

					<Icon
						onPress={getLocationHandler}
						name="my-location"
						size={22}
						style={styles.button}
						color="#201f23"
					/>
				</View>
			</View>
		</View>
	);
};

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		height: 180,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		marginLeft: 12,
		borderRadius: 8,
		backgroundColor: "#fff",
		marginTop: -10,
		position: "relative",
	},
	image: {
		height: "100%",
		width: "100%",
		borderRadius: 8,
	},
	mapContainer: {
		flexDirection: "row",
		width: "100%",
	},
	container: {
		marginTop: 20,
		marginBottom: 10,
	},
	button: {
		backgroundColor: "#e8def8",
		padding: 8,
		borderRadius: 13,
		elevation: 4,
		position: "absolute",
		bottom: 15,
		right: 15,
	},
});
