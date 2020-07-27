import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.STATE;

export const getSelectedFilter = (state) => {
  return state[NAME_SPACE].selectedFilter;
};

export const getHighlightedPinId = (state) => {
  return state[NAME_SPACE].highlightedPinId;
};

export const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};
