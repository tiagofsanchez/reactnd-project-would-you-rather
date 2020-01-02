export const RECEIVE_USERS = "RECEIVE_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

//TODO: add the question to the USER depending on who is logged in
