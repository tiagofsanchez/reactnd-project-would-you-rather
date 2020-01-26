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
// and the correct order for the leaderboard page, decending order
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

//This function helps us to know the split between answered and unanswered questions
export function userQuestionData(users, authUser, questions) {

  const answeredId = Object.keys(users[authUser].answers)
    .map(ansId => {
      return questions[ansId].id;
    })
    .sort((a, b) => a.timestamp - b.timestamp)
    .reverse();

    const unansweredId = Object.keys(questions)
    .map(question => {
      return question;
    })
    .sort((a, b) => a.timestamp - b.timestamp)
    .reverse()
    .filter(question => !answeredId.includes(question));

  return {
    userId: users[authUser].id,
    answeredId,
    unansweredId,
  };
}


//This functions will structure data for QuestionPage

export function questionPageData(questions, users, props) { 
  let { question, avatarURL, name, optionOne, optionTwo } = "";
  const id = props.match.params.id;
  const isIdTrue = id in questions;
  if (isIdTrue === true) {
    question = questions[id];
    avatarURL = users[question.author].avatarURL;
    name = users[question.author].name;
    optionOne = question.optionOne.text;
    optionTwo = question.optionTwo.text;
  }

  return {
    question,
    avatarURL,
    name,
    optionOne,
    optionTwo,
    isIdTrue,
    id,
  };
}

//This function will struture data for QuestionResultPage

export function responsePageData(users, questions, authUser, id) { 
  const isIdTrue = id in questions;
  let {
    name,
    avatarURL,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    logedInUser
  } = "";

  if (isIdTrue === true) {
    name = users[questions[id].author].name;
    avatarURL = users[questions[id].author].avatarURL;
    optionOne = questions[id].optionOne.text;
    optionTwo = questions[id].optionTwo.text;
    optionOneVotes = questions[id].optionOne.votes.length;
    optionTwoVotes = questions[id].optionTwo.votes.length;
    totalVotes = optionOneVotes + optionTwoVotes;
    userAnswer = users[authUser].answers[id];
    logedInUser = users[authUser].name;
  }

  return {
    name,
    avatarURL,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    logedInUser,
    isIdTrue
  };
}