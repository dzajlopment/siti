import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput } from "react-native-paper";
import ImagePicker from "../components/ReportsForm/ImagePicker";
import LocationPicker from "../components/ReportsForm/LocationPicker";

const ReportForm = () => {
	return (
		<ScrollView>
			<ImagePicker />
			<TextInput label="Password" />
			<LocationPicker />
		</ScrollView>
	);
};

export default ReportForm;
