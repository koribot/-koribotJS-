import app from "./app.js"
import componentA from "./componenta.js"


export const routes = () => {
 const currentLocation = window.location.pathname
 console.log(currentLocation)
 const routes = {
  "/": app,
  "/componenta": componentA
 }
 return routes[currentLocation]

}

export default routes