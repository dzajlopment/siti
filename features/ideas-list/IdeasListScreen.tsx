import { BACKEND_URL } from "@env";
import { useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { Snackbar } from "react-native-paper";
import { Idea } from "../../types/Idea";
import { IdeasList } from "./IdeasList";

export const IdeasListScreen = (props: {
  navigation: NativeStackNavigationProp<any>;
}) => {
  const navigation = props.navigation;
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

  const handleNewIdeaPressed = () => {
    navigation.push("New Idea");
  };

  const fetchIdeas = () => {
    axios
      .get(`${BACKEND_URL}/api/v1/ideas`)
      .then((response) => {
        setIdeas(response.data.data);
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

  return (
    <>
      <IdeasList
        ideas={ideas}
        onIdeaPress={() => {}}
        onVoteChange={() => {}}
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
