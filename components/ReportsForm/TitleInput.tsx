import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import Icons from "@expo/vector-icons/Ionicons";

const TitleInput = ({ onUpdate, value }: any) => {
	return (
		<View>
			<View style={styles.inputContainer}>
				<Icons name="warning-outline" size={24} color="#201f23" />
				<TextInput
					style={styles.input}
					label="What happend?"
					mode="outlined"
					value={value}
					onChangeText={(text) => {
						onUpdate(text);
					}}
					maxLength={65}
				/>
			</View>

			<Text variant="labelSmall" style={styles.maxLength}>
				{value.length}/65
			</Text>
		</View>
	);
};

export default TitleInput;

const styles = StyleSheet.create({
	maxLength: {
		alignSelf: "flex-end",
		marginRight: 10,
	},
	inputContainer: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
	},
	input: {
		flex: 1,
		marginLeft: 12,
	},
});
