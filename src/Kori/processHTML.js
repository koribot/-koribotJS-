
function getAttrib(element) {
 if (element.attributes === undefined) return;

 const attribs = {};
 for (let i = 0; i < element.attributes.length; i++) {
  const attribute = element.attributes[i];
  attribs[attribute.name] = attribute.value;
 }

 return attribs;
}




function formatHTML(DOM_STRING_REPRESENTATION) {

 const withoutNewlines = DOM_STRING_REPRESENTATION.replace(/(\n|\r|\r\n){2,}/g, '\n').trim();

 const withoutSpacesBetweenTags = withoutNewlines.replace(/>\s+</g, '><');

 return withoutSpacesBetweenTags;

}



function processNode(node) {

 if (node.nodeType === Node.ELEMENT_NODE) {
  const vDOM = {
   tagName: node.tagName.toLowerCase(),
   attribs: getAttrib(node),
   children: []
  };

  for (let i = 0; i < node.childNodes.length; i++) {
   // console.log(node.childNodes[i].data)

   const childNode = node.childNodes[i];
   vDOM.children.push(processNode(childNode));

  }
  return vDOM;
 } else if (node.nodeType === Node.TEXT_NODE) {
  return node.nodeValue.trim();
 }


 return null;
}




export default function processHTML(html) {

 for (let index = 0; index < html.length; index++) {
  let char = html[index];
  // console.log(char)
  // if (char === '{') {
  //  while (char !== '}') {
  //   const current = html[index + 1]
  //   char = current
  //   console.log(current)
  //  }
  //  console.log(char)
  // }
 }

 const parser = new DOMParser();
 const document = parser.parseFromString(html, "text/html")

 /**
  * Old implementation - Appending to temporary HTML
  * const tempContainer = document.createElement('div')
  * tempContainer.innerHTML = formatHTML(html)
  */

 if (document !== null) {
  // setTimeout(() => {
  //  // console.log(document)
  // }, 5000);
  const vDom = processNode(document.body.firstChild);
  if (vDom !== null) {
   document.documentElement.innerHTML = ''
  }
  // console.log(vDom)
  return vDom
 }

}