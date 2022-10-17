import { FlatList, StyleSheet } from "react-native";
import { Idea, IdeaStatus } from "../../types/Idea";
import { IdeaListItem } from "./IdeaListItem";
import { IdeasListHeader } from "./IdeasListHeader";

export const IdeasList = (props: {
  ideas: Idea[];
  onNewIdeaPress: () => void;
}) => {
  const { ideas: _, onNewIdeaPress } = props;

  const ideas: Idea[] = [
    {
      id: "bldp-01",
      title: "Build a playground",
      description: "Arrange and build a playground in the Cowell's park",
      justification: "There is no playground nearby",
      location: "Cowell's park",
      cost: 75000,
      created: new Date(),
      status: IdeaStatus.Approved,
    },
    {
      id: "ias-01",
      title: "Air quality sensor",
      description:
        "Install an air quality sensor near the schoolInstall an air quality sensor near the schoolInstall an air quality sensor near the schoolInstall an air quality sensor near the schoolInstall an air quality sensor near the schoolInstall an air quality sensor near the school",
      justification:
        "Raise the knowledge about negative consequences of poor air quality",
      cost: 12000,
      created: new Date(Date.now() - 36301),
      location: { lat: 50.30675265315036, lng: 18.684688068701824 },
    },
  ];

  return (
    <FlatList
      data={ideas}
      ListHeaderComponent={<IdeasListHeader onNewIdeaPress={onNewIdeaPress} />}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <IdeaListItem key={item.id} idea={item} onPress={() => {}} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
