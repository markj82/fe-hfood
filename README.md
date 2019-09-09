This project was created for Mercarto. It's build with React using Hooks.

To run this project you need back end from this repo:
[https://github.com/markj82/be-hfood](https://github.com/markj82/be-hfood)
as all endpoints run on localhost

After cloning this repo, install all dependencies
```
npm install
```

This app is hardcoded for port 3000, so run backend first on port 3000, end THEN run this front end React App with 
```
npm start
```

This project is not finished, due to lack of time.

There is no error handling - I would add try catch blocks and add error component, to display error message to user.


There is no form validation in AdminPanel, I'd add if / else statements and display info message to the user.

After user refresh the page or navigate through components, the basket becomes empty. To fix that, I'd use React Context or LocalStorage.

There is no option to change quantity in the basket. I'd add extra object manipulation and new function to control basket state (using hooks).

In Admin panel, there is lack of edit and delete. I would add onClick functions and pass id as argument. Then call function which use axios and make a call to local database.
