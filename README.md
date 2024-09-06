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
