import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { getMapPreview } from "../util/location";

const ReportDetails = ({ route }: any) => {
	const { date, description, id, image, location, severity, title } =
		route.params;

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: image }} />
			</View>

			<Image
				style={styles.imageContainer}
				source={{
					uri: getMapPreview(location.lat, location.lng),
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
	},
	imageContainer: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	container: {
		flex: 1,
		height: "100%",
		width: "100%",
	},
});

export default ReportDetails;
