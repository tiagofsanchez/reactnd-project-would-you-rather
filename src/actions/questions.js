import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestionToUser } from "../actions/users";

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
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then(question => {
      dispatch(savePoll(question));
      dispatch(addQuestionToUser(question));
    });
    // .then(question => dispatch(addQuestionToUser(question)));
    // If I use it like that I will not dispatch a payload and my action creator
    // will pass and undefined const to my reducer
  };
}

function saveAnswer(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer
  };
}

//TODO: need to save this in the user as well
export function handleSaveAnswer(authUser, qid, answer) {
  return dispatch => {
    return saveQuestionAnswer({
      authUser,
      qid,
      answer
    }).then(() => dispatch(saveAnswer(authUser, qid, answer)));
  };
}
