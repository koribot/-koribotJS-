const fs = require('fs').promises;
const path = require('path');
const originalFilePath = 'src/app.js';
const newFolderPath = 'kori-dist';
const newFilePath = path.join(newFolderPath, 'index.js');
const px = path.join(newFolderPath, 'p.json')


const { JSDOM } = require('jsdom');

let dom; // Declare the dom variable globally


function getAttrib(element) {
 if (element.attributes === undefined) return;

 const attribs = {};
 for (let i = 0; i < element.attributes.length; i++) {
  const attribute = element.attributes[i];
  attribs[attribute.name] = attribute.value;
 }

 return attribs;
}

function processNode(node) {
 if (dom.window.Node && node instanceof dom.window.Node) {
  if (node.nodeType === dom.window.Node.ELEMENT_NODE) {
   const vDOM = {
    tagName: node.tagName.toLowerCase(),
    attribs: getAttrib(node),
    children: [],
   };

   for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i];
    vDOM.children.push(processNode(childNode));
   }
   return vDOM;
  } else if (node.nodeType === dom.window.Node.TEXT_NODE) {
   console.log(node)
   return node.nodeValue.trim();
  }
 }

 return null;
}

function processHTML(html) {
 dom = new JSDOM(html); // Initialize the dom variable
 const document = dom.window.document;
 const firstChild = document.body.children[0];

 if (document !== null) {
  const vDom = processNode(firstChild);
  return vDom;
 }
}





async function readFileAndCreateFolder() {
 try {
  // Read content from the original file
  let fileContent = await fs.readFile(originalFilePath, 'utf8');

  fileContent = fileContent.replace('processHTML(', 'createElement(')
  // Create the folder (if it doesn't exist)
  await fs.mkdir(newFolderPath, { recursive: true });

  const exportConst = 'export const';
  const index = fileContent.indexOf(exportConst);

  if (index !== -1) {
   // "export const" found, grab content starting from that position
   const contentStartingFromExportConst = fileContent.slice(index);

   const startIndex = fileContent.indexOf('return `');
   const endIndex = fileContent.lastIndexOf('}', fileContent.indexOf('export default app'));

   if (startIndex !== -1 && endIndex !== -1) {
    const content = fileContent.substring(startIndex + 7, endIndex - 1);
    await fs.writeFile(px, JSON.stringify(processHTML(content)))

    console.log(JSON.stringify(processHTML(content), null, 2))
   } else {
    console.error('Unable to find the return statement or export default app.');
   }



  } else {
   console.error('Substring not found in fileContent.');
  }

  // Create a new file and write the content
  await fs.writeFile(newFilePath, fileContent);

  console.log('Folder and file created successfully.');
 } catch (err) {
  console.error(`Error: ${err}`);
 }
}

// Call the function
readFileAndCreateFolder();
