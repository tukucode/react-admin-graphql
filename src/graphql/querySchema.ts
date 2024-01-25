import { queriesPlanet } from './queries';

export const querySchema = (source: string) => {
  switch (source) {
    case 'Planet':
      return queriesPlanet();

    default:
      return undefined;
  }
};