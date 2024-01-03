import Kori, { router } from "./Kori.js"


function isValidTagName(tagName) {
  // Regular expression pattern for valid HTML tag names
  const tagPattern = /^[a-zA-Z][a-zA-Z0-9-]*$/;

  // Test if the input tagName matches the pattern
  return tagPattern.test(tagName);
}

function render_element({ tagName, attribs, children }) {
  if (isValidTagName(tagName)) {
    const element = document.createElement(tagName)
    if (attribs) {
      for (const [key, value] of Object.entries(attribs)) {
        if (key === 'if-click') {
          element.addEventListener('click', Kori.scripts[value.split('-')[0]][value.split('-')[1]])
        }
        if (key === 'if-change') {
          element.addEventListener('input', (event) => {
            const scriptFunction = Kori.scripts[value.split('-')[0]][value.split('-')[1]];

            if (event.target.value !== '<img src=x onerror=alert("Malicious Script")>') {
              // Check if the scriptFunction is a valid function
              if (typeof scriptFunction === 'function') {
                // Execute the script function with the event as an argument
                scriptFunction(event);
              } else {
                console.error('Invalid script function:', scriptFunction);
              }
            } else {
              scriptFunction("");
            }

          });

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
}




const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  return render_element(vNode);
}


export default render;
