import { Alert } from "jamsrui";

export const AlertUsage = () => {
  return (
    <Alert status="success">
      <Alert.Icon />
      <Alert.Content>
        Here is a gentle confirmation that your action was successful.
      </Alert.Content>
    </Alert>
  );
};
