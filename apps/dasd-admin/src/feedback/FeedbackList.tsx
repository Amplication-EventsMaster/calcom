import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Comment" source="comment" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />{" "}
      </Datagrid>
    </List>
  );
};
