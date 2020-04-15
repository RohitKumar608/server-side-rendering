
#created axios instances inside the createStore file.Configure globally need to define baseUrl inside the action handler files.Pass the api name from action handlers.
#We are using `Context` for tracking the page found or not.Pass the context object reference from helper/renderer file and backtrack in server.js file Page found or not.
#For authentication either user is login or not just we are passing the loadFunction from our main component. No need to check from client side
#We are using the `loadFunction` because the when ever the store update in server side we don't have `provider` reference in server side so that all the connected component with redux get update.So we need reference that why we are using `loadFunction`
#When first time page loading so we are unable to pass the redux store data to client side that why we are passing our our store data through `window` and when its loading on client side we are passing as initial state.
#Define all the global variable inside the `webpack.base.js`
