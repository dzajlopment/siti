import { StyleSheet } from "react-native";
import MapView, { MapEvent, Marker } from "react-native-maps";
import { useState } from "react";

const Map = () => {
	const [selectedLocation, setSelectedLocation] = useState<
		undefined | { lat: number; lng: number }
	>();

	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	const selectLocationHandler = (event: MapEvent) => {
		const { latitude: lat, longitude: lng } = event.nativeEvent.coordinate;
		setSelectedLocation({ lat, lng });
	};

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
