import Kori, { router } from "./Kori.js"





function render_element({ tagName, attribs, children }) {
  const element = document.createElement(tagName)

  if (attribs) {
    for (const [key, value] of Object.entries(attribs)) {
      if (key === 'if-click') {
        element.addEventListener('click', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
      }
      if (key === 'if-change') {
        element.addEventListener('input', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
      }
      if (key === 'href') {
        element.addEventListener('click', (event) => {
          const hrefValue = element.getAttribute('href');
          if (hrefValue) {
            router(event, hrefValue)
          }
        })
      }



      element.setAttribute(key, value)
    }
  }

  if (children) {
    for (const child of children) {
      const ch = render(child)
      element.appendChild(ch)
    }

  }

  return element
}




const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  return render_element(vNode);
}


export default render;
