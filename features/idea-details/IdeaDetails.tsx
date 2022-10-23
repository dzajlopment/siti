import { RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import JustificationIcon from "../../assets/icons/handshake_FILL0_wght400_GRAD0_opsz24.svg";
import LightbulbIcon from "../../assets/icons/lightbulb_FILL0_wght400_GRAD0_opsz24.svg";
import LocationIcon from "../../assets/icons/location_on_FILL0_wght400_GRAD0_opsz24.svg";
import TimeIcon from "../../assets/icons/schedule_FILL0_wght400_GRAD0_opsz24.svg";
import PriceIcon from "../../assets/icons/sell_FILL0_wght400_GRAD0_opsz24.svg";
import DescriptionIcon from "../../assets/icons/subject_FILL0_wght400_GRAD0_opsz24.svg";
import VerifiedIcon from "../../assets/icons/verified_FILL0_wght400_GRAD0_opsz24.svg";
import { Field } from "../../components/Field";
import { TextField } from "../../components/TextField";
import { Idea, IdeaStatus } from "../../types/Idea";
import { getMapPreview } from "../../util/location";
import { Voting } from "../voting/Voting";

export const IdeaDetails = () => {
  const route = useRoute<RouteProp<{ idea: Idea }>>();
  const idea = route.params;

  const { title, description, justification, cost, location, created, status } =
    idea;
  const [liked, setLiked] = useState(idea.voting.liked);

  // For some reason, backend type for Idea stores an object instead of a plain string
  let ideaStatus = status;
  if (typeof status === "object") {
    type BackendIdeaStatus = { approved: boolean; rejected: boolean };
    ideaStatus = (status as BackendIdeaStatus).approved
      ? IdeaStatus.Approved
      : IdeaStatus.Rejected;
  }

  return (
    <ScrollView style={style.container}>
      <Voting score={32} liked={liked} onVoteChange={setLiked} horizontal />
      <TextField icon={TimeIcon} value={new Date(created).toLocaleString()} />
      <TextField icon={VerifiedIcon} value={ideaStatus ?? "Not yet verified"} />
      <TextField icon={LightbulbIcon} value={title} />
      <TextField icon={DescriptionIcon} value={description} />
      <TextField icon={JustificationIcon} value={justification} />
      {cost && <TextField icon={PriceIcon} value={cost.toString()} />}
      <Field icon={LocationIcon}>
        <Image
          style={style.map}
          source={{
            uri: getMapPreview(location.lat, location.lng),
          }}
        />
      </Field>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  map: {
    flex: 1,
    height: 120,
    marginEnd: 0,
  },
  input: {
    flex: 1,
    marginBottom: 8,
  },
});
