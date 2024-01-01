export default (realNode, realTarget) => {
  realTarget.replaceChildren(realNode);
  return realNode;
};
