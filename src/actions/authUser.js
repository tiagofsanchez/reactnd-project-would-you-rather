export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOGOUT = "LOGOUT";

export function receivedAuth(id) {
  return {
    type: SET_AUTH_USER,
    id
  };
}


