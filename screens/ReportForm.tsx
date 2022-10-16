import { useLayoutEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from "../components/ReportsForm/ImagePicker";
import LocationPicker from "../components/ReportsForm/LocationPicker";
import SeverityInput from "../components/ReportsForm/SeverityInput";
import TextArea from "../components/ReportsForm/TextArea";
import TitleInput from "../components/ReportsForm/TitleInput";
import Icons from "@expo/vector-icons/AntDesign";
import validateForm from "../util/validateForm";
import axios from "axios";

const ReportForm = () => {
	const [photo, setPhoto] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [severity, setSeverity] = useState("c");
	const [location, setLocation] = useState<
		undefined | { lat: number; lng: number }
	>(undefined);
	({ lat: null, lng: null });

	const submitHandler = async (event: any) => {
		event.preventDefault();

		console.log(
			validateForm({
				image: photo,
				title,
				severity,
				location,
			})
		);

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

		const response = await axios.get("https://swapi.dev/api/people/1");

		// const response = await axios
		// 	.post("https://auth-60f9c-default-rtdb.firebaseio.com/", {
		// 		image: photo,
		// 		title,
		// 		description,
		// 		severity,
		// 		location,
		// 	})
		// 	.catch((err) => console.log(err));

		console.log(response.data);
	};

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<Button title="xd" onPress={submitHandler} />
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
});
