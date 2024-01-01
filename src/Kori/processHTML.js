
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
 // console.log(node)

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

 const tempContainer = document.createElement('div')
 tempContainer.innerHTML = formatHTML(html)

 if (tempContainer) {
  const vDom = processNode(tempContainer.firstElementChild);
  if (vDom !== null) {
   tempContainer.innerHTML = ''
  }
  return vDom
 }

}
