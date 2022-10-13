import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { ReportListScreen } from "./features/reports/ReportListScreen";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <ReportListScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}
