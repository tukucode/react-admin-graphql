import { IntrospectionResult } from 'ra-data-graphql';
import buildGraphQLProvider, { buildQuery, } from 'ra-data-graphql-simple';

const myBuildQuery = (introspection: IntrospectionResult) => (fetchType: string, resource: string, params: unknown) => {
  const builtQuery = buildQuery(introspection)(fetchType, resource, params);

  if (resource === 'Command' && fetchType === 'GET_ONE') {
    return {
      // Use the default query variables and parseResponse
      ...builtQuery,
      // Override the query
      query: `AllFilms {
        allPlanets {
          planets {
            id
            name
            created
            edited
            diameter
          }
        }
      }`
    };
  }

  return builtQuery;
};
export default buildGraphQLProvider({ buildQuery: myBuildQuery })