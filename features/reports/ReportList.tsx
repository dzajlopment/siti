import { ReactElement } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Report } from "../../domain/Report";
import { ReportItem } from "./ReportItem";

export const ReportList = () => {
  const reports: Report[] = [];

  const renderListHeader = (): ReactElement => (
    <Button mode="contained">New report</Button>
  );

  const renderItem = (report: ListRenderItemInfo<Report>): ReactElement => (
    <ReportItem report={report.item} onSelect={() => {}} />
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderListHeader()}
      data={reports}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
