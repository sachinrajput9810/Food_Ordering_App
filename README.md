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