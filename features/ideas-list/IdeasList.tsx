import { FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Idea } from "../../domain/Idea";
import { IdeasListHeader } from "./IdeasListHeader";

export const IdeasList = (props: {
  ideas: Idea[];
  onNewIdeaPress: () => void;
}) => {
  const { ideas, onNewIdeaPress } = props;

  return (
    <FlatList
      data={ideas}
      ListHeaderComponent={<IdeasListHeader onNewIdeaPress={onNewIdeaPress} />}
      contentContainerStyle={styles.container}
      renderItem={(idea) => <Text>{idea.item.title}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
