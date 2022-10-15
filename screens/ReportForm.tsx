import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from "../components/ReportsForm/ImagePicker";
import LocationPicker from "../components/ReportsForm/LocationPicker";
import TitleInput from "../components/ReportsForm/TitleInput";

const ReportForm = () => {
	return (
		<ScrollView>
			<ImagePicker />
			<TitleInput />
			<LocationPicker />
		</ScrollView>
	);
};

export default ReportForm;
