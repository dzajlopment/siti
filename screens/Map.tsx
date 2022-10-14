import { Alert, StyleSheet } from "react-native";
import { useLayoutEffect, useCallback } from "react";
import MapView, { MapEvent, Marker } from "react-native-maps";
import { useState } from "react";
import { IconButton } from "react-native-paper";
const Map = ({ navigation }: any) => {
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

		navigation.navigate("AddPlace", {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng,
		});
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={{
						uri: "https://avatars0.githubusercontent.com/u/17571969?v=3&s=400",
					}}
					size={24}
					onPress={savePickedLocationHandler}
				/>
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
