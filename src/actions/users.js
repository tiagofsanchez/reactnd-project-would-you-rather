export const RECEIVE_USERS = "RECEIVE_USER"

export function receiveUsers(users) { 
    return { 
        type: RECEIVE_USERS, 
        users
    }
}