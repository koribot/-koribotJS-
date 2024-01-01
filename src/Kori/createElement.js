export default (tagName, { attribs = {}, children = [] } = {}) => {
  return {
    tagName,
    attribs,
    children,
  };
};
