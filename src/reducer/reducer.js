import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";
import {reducer as state} from "./state/state";
import {reducer as review} from "./review/review";
import {reducer as error} from "./error/error";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.STATE]: state,
  [NameSpace.REVIEW]: review,
  [NameSpace.ERROR]: error
});
