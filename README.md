...
# Notes React JS

...

# PARCEL
- Dev build
- local server
- HMR (Hot module replacement i.e automatic refresh)
- File watching algo
- Faster builds with caching
- Image Optimization
- Minification
- Bundling
- Compression
- Tree shaking
- Diagnostic 
- Error handling 
- different build for dev and prod


Note -> for running the scripts we need to use npm instead of npx 
for eg -> npx parcel index.html => npm run start (npm start)      [ for running the pro in dev mode]
      -> npx parcel build index.html => npm run build             [ for running the pro in production mode]  



----------------------------------------------------------------------------------------------------
- Config driven UI - changing the ui based upon the backend data (config)


## App design
-Header
   -logo
   -Nav items
  
-Body
   -Search
   -Restaurant Container
     - Restaurant card
       - Name of res , img , star rating , cuisine , delivery time
   
-Footer
   -Copyright
   -links
   -Address
   -Contact


------------------------------------------------------------------
imports and exports

Normal export => export default Header (for eg)
Normal import => import Header from "/path"

Named export and Import 

for eg 
export const Header = [some random data]

import {Header} from "/path"

---------------------------------------------------------------------------

## React Hooks
- Normal JS utility fun
- useState()    => super powerful state variable in JS 
- useEffect()

so basically it gives array => state variable and fun to update the state variable

const[list , setList] = useState(data) ;
- Here data is stored in the list and setList() will be use to update the state/value of list
- the scope of the state variable is within the component in which it is declared
- whenever there is the change in the state variable it will re-render my component

## Diff Algo

- Here the copy of actual dom is created called virtual dom and whenever there is the change in the state of the component the virtual dom gets updated first based upon that the actual dom gets updated

[ change in component => update virtual dom => updates actual dom  ]

- React sets the priority to task =>     user input > animations > fetching data 

- why react fast -> in react 16 ues react fibre architecture -> Makes the linked list of all the components => when rendering needs to be done => traverse => does high priority task first => moves on => enhances performance 

- React keeps eye on the state variable  => change in state variable  => react re-renders the component

- Diff algo -> to efficiently find diff b/w actual and virtual dom [ part of reconciliation algo]
- reconciliation algo -> defines weather a particular component needs to be re-render or not if yes then how


--------------------------------------------------------------------------------------------------

2 types of architecture

## Monolith => 
- all code of diff services like of auth  , ui , api , backend , database is within same project 
- is not a good way 
- if changes need to be done  , then whole project needs to be redeployed


## Microservices
- all code of diff services is deployed independently
- particular service can be deployed based upon the change

- Here every service is deployed at diff port => services mapped to diff urls 


### Webpage rendering way

first =>  Web page loads  =>  API call  => render 
second=>  web page loads => HTML structure renders => API call => re-renders the web page
  
In react we will use 2nd ways as it much more better approach and gives better UX

## hooks 
- Normal js fun given by react which have their own use case like useState() to manage state variable

- If we want to do some task after the page is rendered we use use effect hook 
- page rendered -> call back fun within the useEffect is called immediately

- Note : DOM Manipulation in itself is an expensive process so while rendering the component it just changes the particular thing which got changed


----------------------------------------------------------------------------------------------

Notes -

- useEffect( () => {} , [] )        takes callback fun and dependency array
- If dependency array is not passed then callback fun will be called every time component is rendered
- If dependency array is  passed empty then callback fun will be called once
- If dependency array is  passed including the state variable then callback fun will be called every time state
  variable changes

- useState() hook always to be called inside the component


--------------------------------------------------------------------------------------------------

## React Router

- Use to route the diff pages
- helps to create router and sets the router using the Router provider
- Router error gives detailed error 

- Why react a single page application 
  => coz whole app is the single component and when we change route/pages we just changes the component to be rendered
    instead of reloading the whole website


### 2 types of Routing

- Client Side Routing 
  - No network calls are made only the the component is changed when routing to other path
  - React Router is used for this type of routing

- Server side routing 
   - Network call is made to the server to get the new component to be rendered  
   - React Router is not used for this type of routing



-----------------------------------------------------------------------------------------

## Class based Component
- Class based component is a class which extends React.Component
- It has a constructor method which is called when the component is created
- After the constructor is called the render method is called

- In case the component has child component then call happens like this => 
-  lifecycle ==  constructor => render => componentDidMount

- So first the constructor is called , then the render fun is called and then react updates the dom once the component is mounted on the UI then the componentDidMount i.e after the component is mounted . So all the API calls are made inside the componentDidMount

- Note 

-DOM manipulation costly process => to avoid multiple render in lifecycle => it render all the children components collectively then commit happens to optimize  

- so react batch up the render first then batch up the commit thats why react is fast as it avoids multiple rendering 


In short : Lifecycle

- MOUNTING
      - constructor() is called
      - render() is called
      - Dom gets updated
      - ComponentDidMount() is called => API calls => setState() 

- UPDATING 
      - state variables are updated
      - render() is called
      - DOM gets updated
      - ComponentDidUpdate() is called

------------------------------------------------------------------------------------------

- Optimization of app
 
 - Divide your code into multiple modules or components which are responsible for one thing (single responsibility principle)
 - Easy maintenance 
 - testing
 - Reusability


- Custom Hooks
 - Just like normal hooks only diff is we can wrap our own logic


- To optimize our app , parcel(bundler) does chunking of the data , basically divides our app into multiple chuks of data
- diff names => chunking  , code spliting , dynamic loading , lazy loading , on demand loading

- Bundling should be done such that as soon as the bundle loads it should be able to render some particular feature
- App => collections of bundle 

- when => initial render is done => other pages are lazy loaded usually


---------------------------------------------------------------------------------------------------

- Higher order component is the fun that takes a component enhances it and return that component

- Lifting the state up 

- Controlled and Uncontrolled components

- Controlled component =>  react component which  can manage the state of their children component
- UnControlled = >  react components which can only manage its state 

- React context => solves the problem of props drilling => basically create the center region eg parent and all the children are 
- able to access the region which can store the data instead of passing the data to multiple levels deep down

--------------------------------------------------------------------------------------------------

### REDUX

 - We usually use Redux toolkit in the modern websites

- State management library
- Used majorly when the app becomes more and more complex
- Not necessary to use  , we can work with react context
- Offers easy debugging

- Redux toolkit (RTK)
  - RTK contains Redux store to store majority of the data 
  - Multiple slices in it with logical separation eg cart slice , user slice , theme slice
  - Every slice store all the data regarding it like cart slice storing all data of cart slice


- Lets say you click on  add in menu item => want to add that item in the cart

- Flow =>    on click -> Action is dispatched -> calls the reducer ( call back fun) -> update the cart slice in redux store
           ->  which further updates the cart in the header through selector (can say cart has subscribed to the store)


AGAIN IMP FLOW 
  -> Click on the add btn  on menu item -> dispatch an action -> calls the reducer fun -> updates the slice of cart 
  -> with the help of selector it updates the cart (means the cart has subscribed to the redux store)



- Install @redux/toolkit and react-redux
- Build our store
- connect store to app
- Slice( cart slice)
- dispatch(Action)
- Selector

- Note - we should only subscribe to the specific item of the store not to the whole store while using selector


-----------------------------------------------------------------------------------------

## Testing -

- Unit testing - testing one unit/component of the app . for eg testing the header
- Integration testing - testing the correct flow or the sync b/w the diff components in the app
- End to end testing (e2e) - testing from the point user starts the website to leaving the website

- Testing lib => jest and react testing lib

### Setting up testing lib

- Install react testing lib
- Install jest
- install babel dependency
- configure babel
- configure parcel  config file to disable default babel transpilation
- JEST configuration -  npx jest --init 
- install jsdom
- Add @babel/preset-react - to make jxs work in test cases
- Include @babel/preset-react   react in babel config
- npm i -D @testing-library/jest-dom
- test diff components of the app like restaurant card and header

#### Integrating testing (test 2 or more components in which are integrated)

