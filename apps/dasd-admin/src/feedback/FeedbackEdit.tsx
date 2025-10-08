import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
