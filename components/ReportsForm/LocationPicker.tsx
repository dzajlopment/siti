import Icons from "@expo/vector-icons/Ionicons";
import Icon from "@expo/vector-icons/MaterialIcons";
import { RouteProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Location } from "../../types/Idea";
import { getMapPreview } from "../../util/location";

const LocationPicker = ({ onUpdate, value }: { onUpdate: (location: Location) => void, value: Location | undefined }) => {

	const isFocused = useIsFocused();

	const navigation = useNavigation<NativeStackNavigationProp<{ "Map": Location | undefined }>>();
	const route = useRoute<RouteProp<{ location: Location }>>();

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	useEffect(() => {
		if (isFocused && route.params) {
			const location = route.params
			onUpdate(location)
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

		const { coords } = await getCurrentPositionAsync();
		const { latitude, longitude } = coords;
		onUpdate({ lat: latitude, lng: longitude });
	};

	const pickOnMapHandler = () => {
		navigation.push("Map", value);
	};

	let locationPreview = null;

	if (value) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(value?.lat, value?.lng),
				}}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<Icons name="md-location-outline" size={24} color="#201f23" />
				<TouchableOpacity
					style={styles.mapPreview}
					onPress={pickOnMapHandler}
					activeOpacity={0.9}
				>
					{locationPreview}
					<Icon
						onPress={getLocationHandler}
						name="my-location"
						size={22}
						style={styles.button}
						color="#201f23"
					/>
				</TouchableOpacity>
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
