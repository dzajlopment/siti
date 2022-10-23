import { BACKEND_URL } from "@env";
import { useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Snackbar } from "react-native-paper";
import { Idea, IdeaStatus, IdeaVoting } from "../../types/Idea";
import { IdeasList } from "./IdeasList";

export const IdeasListScreen = (props: {
  navigation: NativeStackNavigationProp<any>;
}) => {
  const navigation = props.navigation;
  const [allIdeas, setAllIdeas] = useState<Idea[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

  const fetchIdeas = () => {
    axios
      .get(`${BACKEND_URL}/api/v1/ideas`)
      .then((response) => {
        setAllIdeas(response.data.data);
        setError(null);
        setSnackbarVisible(false);
      })
      .catch((error) => {
        setError(error);
        setSnackbarVisible(true);
      });
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchIdeas();
    }
  }, []);

  const ideasToDisplay = useMemo(() => {
    // Remove rejected ideas and sort descending by score
    return allIdeas
      .filter((idea: Idea) => idea.status !== IdeaStatus.Rejected)
      .sort((a: Idea, b: Idea) => b.voting.score - a.voting.score);
  }, [allIdeas]);

  const handleNewIdeaPressed = () => {
    navigation.push("New Idea");
  };

  const handleVoteChanged = (id: string, liked: boolean) => {
    const updatedIdeas = allIdeas.map((idea) => {
      if (idea._id !== id) return idea;
      const voting: IdeaVoting = { ...idea.voting, liked };
      return { ...idea, voting };
    });
    setAllIdeas(updatedIdeas);
  };

  return (
    <>
      <IdeasList
        ideas={ideasToDisplay}
        onIdeaPress={() => {}}
        onVoteChange={handleVoteChanged}
        onNewIdeaPress={handleNewIdeaPressed}
      />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
      >
        Something went wrong: {error?.message}
      </Snackbar>
    </>
  );
};
