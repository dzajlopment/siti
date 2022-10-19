import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import { REACT_APP_BASE_URL } from "@env";
export default function App() {
	console.log(REACT_APP_BASE_URL);
	return (
		<>
			<StatusBar style="dark" />
			<SafeAreaProvider>
				<PaperProvider>
					<Navigation />
				</PaperProvider>
			</SafeAreaProvider>
		</>
	);
}
