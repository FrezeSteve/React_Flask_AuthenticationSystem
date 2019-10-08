import { GET_ERRORS } from "../type";

export const errors = error => {
  return {
    type: GET_ERRORS,
    payload: error
  };
};
