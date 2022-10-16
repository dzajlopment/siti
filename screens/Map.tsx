import Icons from "@expo/vector-icons/Ionicons";
import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapEvent, Marker } from "react-native-maps";

const Map = ({ navigation }: { navigation: any }) => {
	const [selectedLocation, setSelectedLocation] = useState<
		undefined | { lat: number; lng: number }
	>();

	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 20,
		longitudeDelta: 20,
	};

	const selectLocationHandler = (event: MapEvent) => {
		const { latitude: lat, longitude: lng } = event.nativeEvent.coordinate;
		setSelectedLocation({ lat, lng });
	};

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert(
				"No location picked!",
				"You have to pick a location (by tapping on the map) first!"
			);
			return;
		}

		navigation.navigate("New Report", {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng,
		});
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Icons name="checkmark" size={24} onPress={savePickedLocationHandler} />
			),
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<MapView
			style={styles.map}
			initialRegion={region}
			scrollEnabled={true}
			onPress={selectLocationHandler}
		>
			{selectedLocation && (
				<Marker
					title="Picked Location"
					coordinate={{
						latitude: selectedLocation.lat,
						longitude: selectedLocation.lng,
					}}
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
