import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Idea } from "../../types/Idea";
import { IdeaListItem } from "./IdeaListItem";
import { IdeasListHeader } from "./IdeasListHeader";

export interface IdeasListProps {
  ideas: Idea[];
  onNewIdeaPress: () => void;
  onIdeaPress: (id: string) => void;
  onVoteChange: (id: string, liked: boolean) => void;
}

export const IdeasList = (props: IdeasListProps) => {
  const { ideas, onNewIdeaPress, onIdeaPress, onVoteChange } = props;

  const renderEmptyList = () => (
    <View
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Text variant="bodyLarge">No submitted ideas</Text>
    </View>
  );

  return (
    <FlatList
      data={ideas}
      ListHeaderComponent={<IdeasListHeader onNewIdeaPress={onNewIdeaPress} />}
      contentContainerStyle={styles.container}
      ListEmptyComponent={renderEmptyList}
      ListHeaderComponentStyle={{ marginBottom: 12 }}
      renderItem={({ item }) => (
        <IdeaListItem
          key={item._id}
          idea={item}
          onPress={() => onIdeaPress(item._id)}
          onVoteChange={(liked) => onVoteChange(item._id, liked)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
});
