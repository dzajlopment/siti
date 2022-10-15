import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useState } from "react";
const TextArea = () => {
	const [text, setText] = useState("");

	return (
		<TextInput
			style={styles.textArea}
			multiline
			mode="outlined"
			label="Description (optional)"
			numberOfLines={4}
			onChangeText={(text) => setText(text)}
			value={text}
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
