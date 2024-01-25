import gql from 'graphql-tag';
import { GetListResult } from 'react-admin';

export const queriesPlanet = () => {
  return {
    query: gql`
      query Planets {
        allPlanets {
          planets {
            id
            name
          }
          totalCount
        }
      }
    `,


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parseResponse: async (response: Record<string, any>) => {
      console.log('HELLO', response.data);

      const datas = await response.data.allPlanets;
      const result: GetListResult = {
        data: datas.planets,
        total: datas.totalCount,
      };
      return result;
    },
  };
};