import { GET_MESSAGES, CREATE_MESSAGES } from "../type";

export const createMessages = message => {
  return {
    type: CREATE_MESSAGES,
    payload: message
  };
};
