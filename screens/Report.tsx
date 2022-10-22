import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

const Report = () => {
	const navigation = useNavigation();

	console.log(navigation);

	return (
		<View>
			<Text>XD</Text>
		</View>
	);
};

export default Report;
