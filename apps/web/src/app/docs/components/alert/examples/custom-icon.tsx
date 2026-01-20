import { Alert } from "@/ui/alert";
import { EmailIcon } from "@jamsrui/icons";

export const AlertCustomIcon = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Alert status="warning">
        <Alert.Icon>
          <EmailIcon />
        </Alert.Icon>
        <Alert.Content>This is a warning message.</Alert.Content>
      </Alert>
    </div>
  );
};
