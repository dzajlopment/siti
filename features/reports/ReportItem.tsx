import { Text } from "react-native-paper";
import { Report } from "../../domain/Report";

export const ReportItem = (props: { report: Report }) => {
  const { report } = props;
  return <Text>{report.title}</Text>;
};
