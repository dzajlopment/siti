import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
	launchCameraAsync,
	launchImageLibraryAsync,
	MediaTypeOptions,
	PermissionStatus,
	useCameraPermissions,
	useMediaLibraryPermissions,
} from "expo-image-picker";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const ImagePicker = ({ onUpdate, value }: any) => {
	const [cameraPermissionInformation, requestcameraPermission] =
		useCameraPermissions();

	const [mediaPermissionsInformation, requestMediaPermission] =
		useMediaLibraryPermissions();

	const verifycameraPermissions = async () => {
		if (cameraPermissionInformation as PermissionStatus | null) {
			const permissionResponse = await requestcameraPermission();
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

	const verifyMediaPermissions = async () => {
		if (mediaPermissionsInformation as PermissionStatus | null) {
			const permissionResponse = await requestMediaPermission();
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

	const pickImageHandler = async () => {
		const hasPermission = await verifyMediaPermissions();

		if (!hasPermission) {
			return;
		}
		const image = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			quality: 0.7,
		});

		onUpdate((image as any).uri);
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifycameraPermissions();

		if (!hasPermission) {
			return;
		}

		const image = await launchCameraAsync({
			quality: 0.7,
		});
		onUpdate((image as any).uri);
	};

	let imagePreview = null;
	if (value) {
		imagePreview = <Image style={styles.image} source={{ uri: value }} />;
	}
	return (
		<View style={styles.container}>
			<View style={styles.imagePreview}>{imagePreview}</View>
			<View style={styles.buttonContainer}>
				<Button
					style={styles.button}
					icon={() => (
						<Icons name="camera-plus-outline" size={19} color="#6750a4" />
					)}
					onPress={takeImageHandler}
				>
					Take a picture
				</Button>
				<Button
					style={styles.button}
					icon={() => (
						<MaterialIcons name="photo-library" size={19} color="#6750a4" />
					)}
					onPress={pickImageHandler}
				>
					Pick from gallery
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	imagePreview: {
		width: "100%",
		height: 170,

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
		marginBottom: 10,
		marginLeft: 28,
		marginTop: -1,
	},
	text: {
		color: "#948ba3",
	},
	buttonContainer: {
		flexDirection: "row",
	},
});

export default ImagePicker;
