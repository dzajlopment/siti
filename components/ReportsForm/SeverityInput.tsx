import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import DropDown from "react-native-paper-dropdown";

const SeverityInput = ({ onUpdate, value }: any) => {
	const [isVisible, setIsVisible] = useState(false);

	const options = [
		{
			label: "Low",
			value: "low",
		},
		{
			label: "Medium",
			value: "medium",
		},
		{
			label: "High",
			value: "high",
		},
	];

	return (
		<View style={styles.container}>
			<Icons
				name="signal-cellular-null"
				size={24}
				style={styles.icon}
				color="#201f23"
			/>
			<View style={styles.dropDownContainer}>
				<DropDown
					dropDownStyle={styles.list}
					label="Severity*"
					mode="outlined"
					visible={isVisible}
					showDropDown={() => setIsVisible(true)}
					onDismiss={() => setIsVisible(false)}
					value={value}
					setValue={onUpdate}
					list={options}
				/>
			</View>
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
		width: "100%",
	},
	icon: {
		marginTop: 24,
	},
	dropDownContainer: {
		flex: 1,
		marginLeft: 12,
	},
});
