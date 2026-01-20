import { Alert } from "jamsrui";

export const AlertStatus = () => {
  return (
    <div className="grid gap-4">
      <Alert status="warning">
        <Alert.Icon />
        <Alert.Content>This is a warning message.</Alert.Content>
      </Alert>
      <Alert status="info">
        <Alert.Icon />
        <Alert.Content>This is a info message.</Alert.Content>
      </Alert>
      <Alert status="success">
        <Alert.Icon />
        <Alert.Content>This is a success message.</Alert.Content>
      </Alert>
      <Alert status="error">
        <Alert.Icon />
        <Alert.Content>This is a error message.</Alert.Content>
      </Alert>
      <Alert status="neutral">
        <Alert.Icon />
        <Alert.Content>This is a neutral message.</Alert.Content>
      </Alert>
    </div>
  );
};
