//This function will help with setting up the users for the login
export function userOptions(users) {
  return Object.keys(users).map(user => {
    return {
      id: users[user].id,
      text: users[user].name,
      value: users[user].id,
      image: { avatar: true, src: users[user].avatarURL }
    };
  });
}

//This function will set up the users with the proper data structure
// and the correct order for the leaderboard page
export function leaderboardData(users) {
  return Object.keys(users)
    .map(user => {
      const questionsAnswered = Object.keys(users[user].answers).length;
      const questionsAsked = users[user].questions.length;
      const score = questionsAnswered + questionsAsked;
      return {
        id: users[user].id,
        name: users[user].name,
        avatarURL: users[user].avatarURL,
        questionsAnswered,
        questionsAsked,
        score
      };
    })
    .sort((a, b) => a.score - b.score)
    .reverse();
}
