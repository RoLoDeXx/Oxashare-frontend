import streams from "../apis/streams";

export const createStream = (formValues) => async (dispatch) => {
  streams.post("/streams", formValues);
};

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
