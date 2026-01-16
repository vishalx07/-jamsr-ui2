import { Alert } from "@jamsrui/react";

export const AlertVariantFlat = () => {
  return (
    <div className="grid gap-4">
      <Alert variant="soft" status="success">
        <Alert.Icon />
        <Alert.Content>This is a success Alert.</Alert.Content>
      </Alert>
      <Alert variant="soft" status="warning">
        <Alert.Icon />
        <Alert.Content>This is an warning Alert.</Alert.Content>
      </Alert>
      <Alert variant="soft" status="info">
        <Alert.Icon />
        <Alert.Content>This is an info Alert.</Alert.Content>
      </Alert>
      <Alert variant="soft" status="danger">
        <Alert.Icon />
        <Alert.Content>This is an danger Alert.</Alert.Content>
      </Alert>
      <Alert variant="soft" status="default">
        <Alert.Icon />
        <Alert.Content>This is a default Alert.</Alert.Content>
      </Alert>
    </div>
  );
};
