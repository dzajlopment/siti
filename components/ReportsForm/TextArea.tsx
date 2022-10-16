import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
const TextArea = ({ onUpdate, value }: any) => {
	return (
		<TextInput
			style={styles.textArea}
			multiline
			mode="outlined"
			label="Description (optional)"
			numberOfLines={4}
			onChangeText={(text) => onUpdate(text)}
			value={value}
		/>
	);
};

export default TextArea;

const styles = StyleSheet.create({
	textArea: {
		marginLeft: 37,
		marginTop: 2,
	},
});
