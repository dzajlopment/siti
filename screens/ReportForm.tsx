import { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from "../components/ReportsForm/ImagePicker";
import LocationPicker from "../components/ReportsForm/LocationPicker";
import SeverityInput from "../components/ReportsForm/SeverityInput";
import TextArea from "../components/ReportsForm/TextArea";
import TitleInput from "../components/ReportsForm/TitleInput";
import Icons from "@expo/vector-icons/AntDesign";
import validateForm from "../util/validateForm";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { Button, Text } from "react-native-paper";

const ReportForm = ({ navigation }: any) => {
	const [photo, setPhoto] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [severity, setSeverity] = useState("c");
	const [location, setLocation] = useState<
		undefined | { lat: number; lng: number }
	>(undefined);
	({ lat: null, lng: null });

	const clearInputs = () => {
		setPhoto("");
		setTitle("");
		setDescription("");
		setSeverity("");
		setLocation(undefined);
	};

	const submitHandler = async () => {
		// if (
		// 	!validateForm({
		// 		image: photo,
		// 		title,
		// 		severity,
		// 		location,
		// 	})
		// ) {
		// 	return;
		// }

		const response = await axios
			.post("http://localhost:3000/api/v1/reports", {
				image: photo,
				title,
				description,
				severity,
				location,
			})
			.catch((err) => console.log(err));

		if (response?.status === 200 || response?.status === 201) {
			// TODO: notify user
			clearInputs();
			if (navigation.canGoBack()) {
				navigation.goBack();
			}
			return;
		}
		// TODO: notify user
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Icons
					name="close"
					size={24}
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.topButtonLeft}
				/>
			),
			headerRight: () => (
				<Button style={styles.topButtonRight} onPress={submitHandler}>
					PUBLISH
				</Button>
			),
			title: "New report",
			tabBarStyle: {
				display: "none",
			},
		});
	}, [navigation]);

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<ImagePicker onUpdate={setPhoto} value={photo} />
				<TitleInput onUpdate={setTitle} value={title} />
				<TextArea onUpdate={setDescription} value={description} />
				<SeverityInput onUpdate={setSeverity} value={severity} />
				<LocationPicker onUpdate={setLocation} value={location} />
			</SafeAreaView>
		</ScrollView>
	);
};

export default ReportForm;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 13,
	},
	topButtonRight: {
		color: "#6750a4",
		marginRight: 12,
	},
	topButtonLeft: {
		marginLeft: 12,
	},
});
