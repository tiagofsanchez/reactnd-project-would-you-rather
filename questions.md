# QUESTIONS

## Dispatch issues

### NewQuestions.js

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


## LoadingBar from `react-reducer-loading-bar`

I am not sure this is not working for my NewQuestions.js component 