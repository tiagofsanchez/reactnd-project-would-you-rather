export function userOptions(users) {
  return Object.keys(users).map(user => {
    return {
      id: users[user].id,
      text: users[user].name,
      value: users[user].name,
      image: { avatar: true, src: users[user].avatarURL }
    };
  });
}
