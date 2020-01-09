import { showLoading, hideLoading } from "react-redux-loading-bar";

import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestionToUser, addAnswerToUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function savePoll(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

//TODO: need to save this in the user as well
export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then(question => {
      dispatch(savePoll(question));
      dispatch(addQuestionToUser(question));
      dispatch(hideLoading());
    });
  };
}

function saveAnswerToQuestion(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer
  };
}

export function handleSaveAnswer(authUser, qid, answer) {
  return dispatch => {
    dispatch(saveAnswerToQuestion(authUser, qid, answer));
    dispatch(addAnswerToUser(authUser, qid, answer));
    return saveQuestionAnswer(authUser, qid, answer).catch(e => {
      console.warn("Error in handleSaveAnswer:", e);
    });
  };
}
