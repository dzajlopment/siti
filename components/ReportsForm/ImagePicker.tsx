import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { View, Alert, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

const ImagePicker = () => {
	const [pickedImage, setPickedImage] = useState("");

	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions();

	const verifyPermissions = async () => {
		if (cameraPermissionInformation as PermissionStatus | null) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (
			(cameraPermissionInformation as PermissionStatus | null) ===
			PermissionStatus.DENIED
		) {
			Alert.alert(
				"Insufficient Permissions!",
				"You need to grant permissions to use this app."
			);
			return false;
		}
		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const image = await launchCameraAsync({
			quality: 0.5,
		});
		setPickedImage((image as any).uri);
	};

	// let imagePreview = <Text style={styles.text}>No image taken yet.</Text>;
	let imagePreview = null;
	if (pickedImage) {
		imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
	}

	console.log(pickedImage);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imagePreview}>{imagePreview}</View>
			<Button
				style={styles.button}
				icon={() => (
					<Icons name="camera-plus-outline" size={19} color="#6750a4" />
				)}
				onPress={takeImageHandler}
			>
				Take a picture
			</Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	imagePreview: {
		width: "100%",
		height: 150,

		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#eaddff",
		borderRadius: 80,
	},
	button: {
		marginTop: 8,
		alignSelf: "center",
	},
	image: {
		width: "100%",
		borderRadius: 80,
		height: "100%",
	},
	container: {
		marginTop: 20,
		marginBottom: 15,
	},
	text: {
		color: "#948ba3",
	},
});

export default ImagePicker;
