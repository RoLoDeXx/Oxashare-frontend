import streams from "../apis/streams";

export const createStream = (formValues) => async (dispatch) => {
  const res = await streams.post("/streams", formValues);

  dispatch({ type: "CREATE_STREAM", payload: res.data });
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
