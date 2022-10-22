import {
	View,
	Image,
	StyleSheet,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { getMapPreview } from "../util/location";

const ReportDetails = ({ route }: any) => {
	const { date, description, image, location, severity, title } = route.params;

	const capitalizedSeverity = severity[0].toUpperCase() + severity.slice(1);

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: image }} />
			</View>
			<View style={styles.titleContainer}>
				<Text variant={"headlineSmall"}>{title}</Text>
			</View>
			<View style={styles.dateContainer}>
				<Icon name={"calendar"} />
				<Text style={styles.date} variant={"labelMedium"}>
					{new Date(date).toUTCString()}{" "}
				</Text>
			</View>
			<View style={styles.descriptionContainer}>
				<Text>{description || "No description."}</Text>
			</View>

			<View style={styles.severityContainer}>
				<Text>{capitalizedSeverity} severity</Text>
			</View>

			<View style={styles.mapContainer}>
				<Image
					style={styles.map}
					source={{
						uri: getMapPreview(location.lat, location.lng),
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		borderRadius: 50,
		height: "100%",
	},
	imageContainer: {
		width: "100%",
		height: 200,
		borderRadius: 50,
		backgroundColor: "#eaddff",
		marginTop: 15,
	},
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	titleContainer: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
	descriptionContainer: {
		marginTop: 10,
		borderColor: "#aaa",
		padding: 8,
		borderWidth: 2,
		borderRadius: 5,
		minHeight: 130,
	},
	severityContainer: {
		marginTop: 10,
		borderColor: "#aaa",
		padding: 8,
		borderWidth: 2,
		borderRadius: 5,
	},

	mapContainer: {
		flex: 1,
		marginTop: 10,
		width: "100%",
		height: "100%",
		marginBottom: 15,
	},
	map: {
		width: "100%",
		height: 190,
	},
	dateContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 25,
	},
	date: {
		marginLeft: 3,
	},
});

export default ReportDetails;
