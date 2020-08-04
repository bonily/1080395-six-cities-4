export const MAX_STAR_COUNT = 5;

export const FILTERS = [
  {
    name: `popular`,
    description: `Popular`
  },
  {
    name: `low`,
    description: `Price: low to high`
  },
  {
    name: `high`,
    description: `Price: high to low`
  },
  {
    name: `top`,
    description: `Top rated first`
  },
];

export const FILTER_NAMES = {
  POPULAR: `popular`,
  LOW: `low`,
  HIGH: `high`,
  TOP: `top`
};

export const ErrorTypes = {
  NETWORK: `Network Error`,
  BAD_REQUEST: 400,
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  OFFER: `/offer`,
  ROOT: `/`,
};

export const COMMENT_LENGTH = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300
};
