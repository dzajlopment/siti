import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";

export default function App() {
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
