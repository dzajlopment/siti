import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

const TextArea = ({ onUpdate, value }: any) => {
	return (
		<View style={styles.container}>
			<Icons name="document-text-outline" size={24} color="#201f23" />
			<TextInput
				style={styles.textArea}
				multiline
				mode="outlined"
				label="Description (optional)"
				numberOfLines={4}
				onChangeText={(text) => onUpdate(text)}
				value={value}
			/>
		</View>
	);
};

export default TextArea;

const styles = StyleSheet.create({
	textArea: {
		marginLeft: 12,
		flex: 1,
		marginTop: -10,
	},
	container: {
		flexDirection: "row",
		marginTop: 5,
	},
});
