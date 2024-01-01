import render from './Kori/render.js';
import mount from './Kori/mount.js';
import diff from './Kori/diff.js';
import processHTML from './Kori/processHTML.js';
import Kori, { router } from './Kori/Kori.js';
import routes from './../routes.js';

import app from './app.js';

const createVirtualApp = () => processHTML(
  routes()() // routes returns a component(function) that needs to be called '()' so processHTML(htmlString) can process it
)



let virtualApp = createVirtualApp(0); // A virtual App/DOM Tree
const realApp = render(virtualApp); // A real DOM Tree
let $rootEl = mount(realApp, document.getElementById('kori-root')); // Mount the Real DOM tree to root



// Acts as a renderer of the virtualApp when state changes, this is triggred everytime you use setState function or using router
Kori.track.start = () => {
  const vNewApp = createVirtualApp();
  const patch = diff(virtualApp, vNewApp);
  $rootEl = patch($rootEl);
  virtualApp = vNewApp;
}





