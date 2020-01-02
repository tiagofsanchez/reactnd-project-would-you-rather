import { saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";

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

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then(question => dispatch(savePoll(question)));
  };
}
