import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { ReportList } from "./features/reports/ReportList";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <ReportList />
      </NavigationContainer>
    </PaperProvider>
  );
}
