import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
const TitleInput = () => {
	const [text, setText] = useState("");

	return (
		<View>
			<TextInput
				label="What happend?"
				value={text}
				onChangeText={(text) => setText(text)}
			/>
		</View>
	);
};

export default TitleInput;
