import app from "./src/app.js"
import componentA from "./src/componenta.js"


export const routes = () => {
 const currentLocation = window.location.pathname
 const routes = {
  "/": app,
  "/componenta": componentA
 }
 return routes[currentLocation]

}

export default routes