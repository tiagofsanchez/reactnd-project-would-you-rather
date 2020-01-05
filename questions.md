# QUESTIONS

## Dispatch issues

Why using dispatch directly I would always get an error?

```jsx
handleSubmit = e => {
  e.preventDefault();
  const { optionOne, optionTwo } = this.state;
  const { handleSaveQuestion, authUser, dispatch } = this.props;
  // dispatch(handleSaveQuestion(optionOne, optionTwo, authUser));
  // Why the above doesn't work;
  handleSaveQuestion(optionOne, optionTwo, authUser);
  this.setState(initState);
};
``;
```
