import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import LocationPicker from "./components/Reports/LocationPicker";

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Text>Hello, world</Text>
				<LocationPicker />
			</NavigationContainer>
		</PaperProvider>
	);
}
