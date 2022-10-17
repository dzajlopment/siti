import { List } from "react-native-paper";
import { Idea } from "../../types/Idea";

export const IdeaListItem = (props: { idea: Idea; onPress: () => void }) => {
  const { title, description } = props.idea;

  return (
    <List.Item
      onPress={props.onPress}
      title={title}
      description={description}
      descriptionNumberOfLines={2}
    />
  );
};
