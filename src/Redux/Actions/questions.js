import {
  SET_QUESTION,
  UNSET_QUESTION,
  SAVE_QUESTION,
  PENDING,
  SUCCESS,
  FAIL
} from ".";
import { _getQuestion, _saveQuestionAnswer } from "../../api";

export function getQuestion(qid) {
  return (dispatch, getState) => {
    try {
      dispatch({ type: PENDING });
      return _getQuestion(qid).then(question => {
        dispatch({ type: SET_QUESTION, question: { ...question } });
        dispatch({ type: SUCCESS });
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: FAIL, message: "An error occurred" });
    }
  };
}

export function clearQuestion() {
  return (dispatch, getState) => {
    dispatch({ type: UNSET_QUESTION });
  }
}

export function submitAnswer(qid, answer) {
  return (dispatch, getState) => {
    dispatch({ type: PENDING });
    const authenticatedUser = getState().user.info.id;
    _saveQuestionAnswer({ authenticatedUser, qid, answer })
      .then(question => {
        dispatch({ type: SAVE_QUESTION, question });
        dispatch({ type: SUCCESS });
      })
      .catch(err => {
        dispatch({ type: FAIL, message: err.message });
      });
  };
}
