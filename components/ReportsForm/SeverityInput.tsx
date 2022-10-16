import { StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

const SeverityInput = ({ onUpdate, value }: any) => {
	return (
		<View style={styles.container}>
			<Icons name="toothbrush" size={24} style={styles.icon} color="#201f23" />
			<List.Section style={styles.list}>
				<List.Accordion title="Severity">
					<List.Item title="First item" />
					<List.Item title="Second item" />
				</List.Accordion>
			</List.Section>
		</View>
	);
};

export default SeverityInput;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		marginTop: 8,
	},
	list: {
		marginLeft: 12,
		flex: 1,
	},
	icon: {
		marginTop: 24,
	},
});
