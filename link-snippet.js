// script to update index.html links
// app.elementSelected
var ul = app.core.currentDocument.body.querySelector("ul");
tilepieces.core.htmlMatch.innerHTML(ul,"");
var htmls = await storageInterface.search("","**/*.html");
for(var i = 0;i<htmls.searchResult.length;i++){
    var r = htmls.searchResult[i];
  	if(r!="index.html"){
      var newLI = document.createElement("li");
      var rsplitted = r.split("/")
      newLI.innerHTML = `<a href=${r}>${rsplitted.at(rsplitted.length-3) || rsplitted.at(rsplitted.length-1)}</a>`;
      tilepieces.core.htmlMatch.append(ul,newLI);
    }
}