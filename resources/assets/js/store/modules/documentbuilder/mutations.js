import * as types from "./mutation-types";

export default {
  [types.GET_FILE_VIEW_URL]: (state, value) => {
    state.fileViewUrl = value;
  },
};
