import { useState, useEffect } from "react";
import buildGraphQLProvider, { BuildQueryFactory } from "ra-data-graphql";
import { Admin, DataProvider, Resource } from "react-admin";
import buildQuery from "./graphql/buildQuery";
// import { __schema as schema } from "./graphql/schema.json";
import Planet from "./components/planet";

// https://github.com/Firosmalik000/admin3
const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider>();
  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: {
        uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
      buildQuery: buildQuery as BuildQueryFactory,
    })
      .then((dataProvider) => {
        setDataProvider(dataProvider);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <Admin title="Star Wars API" dataProvider={dataProvider}>
      <Resource name="Planet" list={Planet} />
    </Admin>
  );
};

export default App;
