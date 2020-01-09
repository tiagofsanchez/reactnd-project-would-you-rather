export const RECEIVE_USERS = "RECEIVE_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}


export function addAnswerToUser(authUser, qid, answer) { 
  return { 
    type: ADD_ANSWER_TO_USER, 
    authUser, 
    qid, 
    answer
  }
}