document.getElementById("search-bar").addEventListener('input', function(event){
  var searchVal = document.getElementById("search-bar").value;
  let elements = document.getElementsByTagName('li');
  if(searchVal){
    const lowerCaseSearchVal = searchVal.toLowerCase();
    for (let element of elements){
      let lowerCaseText = element.outerText.toLowerCase();
      if(lowerCaseText.includes(lowerCaseSearchVal)){
          element.style.display = "";
      } else {
          element.style.display = "none";
      }

    }
  }  else {
    for (let element of elements){
      element.style.display = "";
    }
  }
});
