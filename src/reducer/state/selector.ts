import NameSpace from "../name-space";
import {AppStateType} from "../reducer";

const NAME_SPACE = NameSpace.STATE;

export const getSelectedFilter = (state: AppStateType) => {
  return state[NAME_SPACE].selectedFilter;
};

export const getHighlightedPinId = (state: AppStateType) => {
  return state[NAME_SPACE].highlightedPinId;
};
