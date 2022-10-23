import { StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import { Idea } from "../../types/Idea";
import { Voting } from "../voting/Voting";

export type IdeaListItemProps = {
  idea: Idea;
  onPress: () => void;
  onVoteChange: (liked: boolean) => void;
};

export const IdeaListItem = (props: IdeaListItemProps) => {
  const { onVoteChange, onPress } = props;
  const { title, description, voting } = props.idea;
  const { liked, score } = voting;

  return (
    <List.Item
      style={{ paddingLeft: 0 }}
      left={() => (
        <View style={style.voting}>
          <Voting liked={liked} onVoteChange={onVoteChange} score={score} />
        </View>
      )}
      onPress={onPress}
      title={title}
      description={description}
      descriptionNumberOfLines={2}
    />
  );
};

const style = StyleSheet.create({
  voting: {
    margin: 4,
  },
});
