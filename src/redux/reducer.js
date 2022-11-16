import { CHANGE_NAME } from "./action";

const initalState = {
  newName: "YourName",
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        newName: action.payload.newName,
      };
    default:
      return state;
  }
}
