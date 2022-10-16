import { Button } from "react-native-paper";

export const IdeasListHeader = (props: { onNewIdeaPress: () => void }) => {
  return (
    <Button mode="contained" onPress={props.onNewIdeaPress}>
      New idea
    </Button>
  );
};
