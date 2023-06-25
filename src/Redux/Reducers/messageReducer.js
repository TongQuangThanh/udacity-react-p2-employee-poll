import { SUCCESS, FAIL, PENDING, RESET_MESSAGE } from "../Actions";
import { toast } from "react-toastify";

const initialState = {
  message: "",
  status: "",
  type: ""
};

const message = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS:
      if (action.message) toast.success(action.message);
      return {
        ...state,
        status: "success",
        message: action.message,
        messageType: action.messageType ? action.messageType : ""
      };
    case FAIL:
      if (action.message && !action.messageType) toast.error(action.message);
      return {
        ...state,
        status: "fail",
        messageType: action.messageType ? action.messageType : "",
        message: action.message
      };
    case PENDING:
      return {
        ...state,
        status: "pending",
        message: action.message
      };
    case RESET_MESSAGE:
      return {
        ...state,
        status: "",
        message: ""
      };
    default:
      return state;
  }
};

export default message;
