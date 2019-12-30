import * as API from "../utils/api";
import { receivedAuth } from "./authUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

//For now I will do harCode, but I need to get that once login page is done
const userId = "sarahedo";

export function handleInitialData() {
  return dispatch => {
    return API.getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(receivedAuth(userId));
    });
  };
}
