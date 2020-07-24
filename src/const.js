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
