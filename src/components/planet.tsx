// PlanetList.tsx
import * as React from "react";
import {
  List,
  Datagrid,
  FunctionField,
  TextField,
  SearchInput,
  SelectInput,
} from "react-admin";

interface Planet {
  id: string;
  name: string;
  __typename: string;
}
[];

const postFilters = [
  <SearchInput source="q" alwaysOn resettable={false} />,
  <SelectInput source="name" />,
];

const PlanetList: React.FC = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="id" sortable={false} />

      <FunctionField
        label="Nama planet"
        render={(record: Planet) => (
          <>
            <h1>{record.name}</h1>
          </>
        )}
      />
    </Datagrid>
  </List>
);

export default PlanetList;
