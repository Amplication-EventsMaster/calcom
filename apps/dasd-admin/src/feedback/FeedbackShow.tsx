import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comment" source="comment" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
      </SimpleShowLayout>
    </Show>
  );
};
