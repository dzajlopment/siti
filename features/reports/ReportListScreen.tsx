import { ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const ReportListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Button mode="contained">New report</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
