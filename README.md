# Would you rather UDACITY project

This is UDACITY React nanodegree capstone project #2. 

## Installation

To get started and test my project

- install project dependencies with `npm install` or `yarn install`
- start the development server with `npm start` or `yarn start`

## The project approach

Here you will find my project and the steps that I have made to build it. I will follow the guidelines provided by udacity team and they are as follows:

1. Draw All the Views of the App
2. Break Each View Into a Hierarchy of Components
3. Determine What Events Happen in the App
4. Determine What Data Lives in the Store.

Let's get started.

## 1.Draw all the views of the app

With the help to the following YouTube video we are able to build the different page views.

[Would you rather app](https://youtu.be/xfmSkLAL__Q)

So you will have a couple of different pages here:

- Login page
- Home page
- Question page
- Answered question page
- Leaderboard page
- New question page

Note that for every different page, I will need to create a different url, with exception of Login and Home page given they will share the same and will be the root of my app.   

I am not sure if I am missing something out, but for now, I reckon this is a very good start and we can always go back to the main project rubric to check if I are missing something out.

Let's dive in the components for each page.

## 2.Components breakdown

### Log in page

From a component stand point, this one will be very simple, it will have:

- Login component

The Login page will be inserted in the App.js file. Actually all my components will be inserted here and will be rendering them according to the user interaction with the my application.

### Home page

- NavBar
- QuestionCard (for unanswered and answered questions)

### QuestionPage

- NavBar
- QuestionCard (with the selected unanswered question)

### Answered question page

- NavBar
- QuestionCard (with the question results)

### New question page

- NavBar
- NewQuestionForm

### Leaderboard page

- NavBar
- LeaderboardCard

I think we are all good for now... let's start to figure out what are the main actions on our app.

## 3.Determine What Events Happen in the App

When you open the app you, before you login, you should get users and the questions:

- get **users**,
- get **questions**

During the login phase you need to set the authUser

- set **authUser**

When you are in the unanswered questions pane, you need to get the unanswered questions, whereas in the answered questions pane the ones that the user answered already.

- get **questions** (the correct ones :)
- get **authUser**

### 4.Determine What Data Lives in the Store

To be very honest, here I followed the current structure of the data. I reckon I would struggle to do this were I to start an application from scratch. 

For me my store looked like this: 

```js 
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import questions from "./questions";
import users from "./users";
import authUser from "./authUser";

export default combineReducers({
  authUser,
  questions,
  users,
  loadingBar: loadingBarReducer
});

```

The loadingBar is keeping tabs with the needed information for me to render the loadingBar properly. 




