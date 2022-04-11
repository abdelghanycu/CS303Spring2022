# Assignment 5

## Assignment

1.  Use fetch("https://jsonplaceholder.typicode.com/todos?userId=1") to get a list of todos from the web
2.  Save the todos list to local storage using AsyncStorage.setItem("Todos", JSON.stringify(todosList))
3.  If you failed to get the todolist from the web API you should get the list from local storage using AsyncStorage.getItem("Todos")
4.  On every change in the todos list, the list should be saved to local storage.
5.  Add a refresh button to the UI, refreshing will get the data again from the web API which will overwrite the local data.
6.  Add a spinner [ActivityIndicator · React Native](https://www.google.com/url?q=https://reactnative.dev/docs/activityindicator&sa=D&source=editors&ust=1648676283037510&usg=AOvVaw1erstwXz8CIOvg5DAOss7f) while getting data.
7.  Add an offline indicator (yellow label) if the application failed to get data the label should appear.

### Notes:

I hope you all test your work on mobiles or emulators (not web)

Download a debugger called ReactNativeDebugger [jhen0409/react-native-debugger](https://www.google.com/url?q=https://github.com/jhen0409/react-native-debugger&sa=D&source=editors&ust=1648676283038148&usg=AOvVaw1mOCHsvZkogkE9kfyDlDaH)   to debug localStorage
***
## Async storage

Here is how to save a single variable: `await AsyncStorage.setItem(“key”, variable);` Here is how to load the variable: `const name = await AsyncStorage.getItem(“key”);`

You might need to use JSON.parse and JSON.stringify in order to save/load json data to local storage. A working example can be found here: [AsyncStorage](https://www.google.com/url?q=https://www.reactnative.express/app/persistence/asyncstorage&sa=D&source=editors&ust=1648676283038991&usg=AOvVaw3r2nITAsLg6MfxVF2IxE86) 

***

## API

Use this fake API server like this:

1.  get all todos: [https://jsonplaceholder.typicode.com/todos](https://www.google.com/url?q=https://jsonplaceholder.typicode.com/todos&sa=D&source=editors&ust=1648676283039414&usg=AOvVaw3EZB3XM8tf2Q_vL06A1iZ9) 
1.  get only todo with id=1: [https://jsonplaceholder.typicode.com/todos/1](https://www.google.com/url?q=https://jsonplaceholder.typicode.com/todos/1&sa=D&source=editors&ust=1648676283039748&usg=AOvVaw2iU-T3mAJJpoFVqR3DyWCf) 
1.  get all todos for user with id=1: [https://jsonplaceholder.typicode.com/todos?userId=1](https://www.google.com/url?q=https://jsonplaceholder.typicode.com/todos?userId%3D1&sa=D&source=editors&ust=1648676283040079&usg=AOvVaw1QPF_J3dBKWbybevkMEv88)  

**** * ****

## Fetch

If you are going to use fetch then try:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))
```
You should find the todo with id=1 details in console

A working example for fetch: [Networking](https://www.google.com/url?q=https://www.reactnative.express/app/networking&sa=D&source=editors&ust=1648676283040859&usg=AOvVaw2Vpo1LM-hGK8SswI_lP6dG)

***

## Axios

Using Axios:
```javascript
axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
    const todos = response.data;
    console.log(todos);
})
```

Get more help about axios from [GitHub - axios/axios: Promise based HTTP client for the browser and node.js](https://www.google.com/url?q=https://github.com/axios/axios&sa=D&source=editors&ust=1648676283041560&usg=AOvVaw1KShOaO5p0QcrXrJudHENH)
