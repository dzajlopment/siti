import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from "../components/ReportsForm/ImagePicker";
import LocationPicker from "../components/ReportsForm/LocationPicker";
import TitleInput from "../components/ReportsForm/TitleInput";

const ReportForm = () => {
	return (
		<ScrollView style={styles.container}>
			<ImagePicker />
			<TitleInput />
			<LocationPicker />
		</ScrollView>
	);
};

export default ReportForm;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 13,
	},
});
