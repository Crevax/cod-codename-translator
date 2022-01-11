import mappingData from "./mapping-data";

var walker = document.createTreeWalker(
  document.getElementsByClassName("blog-body")[0],
  NodeFilter.SHOW_TEXT,
  null,
  false
);

function hasAlternateName(textNode) {
  return textNode && textNode != "";
}

function getAlternateName(textNode) {
  return mappingData[textNode];
}

while (walker.nextNode()) {
  var textContent = walker.currentNode.nodeValue.trim();
  if (textContent && textContent.length) {
    var alternameNameSearch = getAlternateName(textContent);
    if (hasAlternateName(alternameNameSearch)) {
      walker.currentNode.nodeValue = alternameNameSearch;
    }
  }
}
