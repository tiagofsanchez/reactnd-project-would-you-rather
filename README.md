# Would you rather UDACITY project

Here you will find my project and the steps that I have make to build it. I will follow the guidelines provided by udacity team and they are as follows: 

1. Draw All of the Views of the App
2. Break Each View Into a Hierarchy of Components
3. Determine What Events Happen in the App 
4. Determine What Data Lives in the Store.

Let's get started.

##  1.Draw all the views of the app

With the help to the following app youtube video we are able to build the different page views.

[Would you rather app](https://youtu.be/xfmSkLAL__Q)

So you will have a couple of different pages here: 
* Login page
* Home page
* Poll page
* Answered poll page
* Leaderboard page
* New question page

Note that for every different page, I will need to create a different url. More on that latter. 

I am not sure if I am missing something out, but for now, I reckon this is a very good start and we can always go back to the main project rubric to check if we are missing something out.

Let's dive in the components for each page.

## 2.Components breakdown 

### Log in page

From a component stand point, this one will be very simple, it will have: 
* Login component (view)

### Home page

* App
* NavBar 
* QuestionsPane 
* UserCard (view)
* UserAvatar (view)

### Poll page

* App
* NavBar
* UserCard (view)
* Question
* UserAvatar (view)

### Answered poll page

* App
* NavBar
* UserCard (view)
* QuestionResults (view)


### New question page

* App
* NavBar
* NewQuestionForm

### Leaderboard page

* App
* NavBar
* LeaderboardCard (view)

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

