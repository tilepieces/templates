// global HTMLText, tilepieces

function parser() {
  const mainname = "dropdown-menu";
  var doc = tilepieces.core.currentDocument;
  var count = 0;
  var dropdownId = mainname;
  while (doc.getElementById(dropdownId))
    dropdownId = mainname + "-" + count++;
  var parseFunc = new Function("dropdownId","return `"+ HTMLText + "`")
  return parseFunc(dropdownId);
}