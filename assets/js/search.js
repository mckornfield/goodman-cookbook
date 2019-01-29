function filterElements(searchVal) {
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
    for (let element of elements) {
      element.style.display = "";
    }
  }
}

function updateUrl(){
  const urlParams = new URLSearchParams(window.location.search);
  const searchVal = document.getElementById("search-bar").value;
  urlParams.set('search', searchVal);
  window.location.search = urlParams.toString();
}

document.getElementById("search-bar").addEventListener('keypress', function(event) {
  if(event.keyCode === 13) {
    updateUrl();
  }
});

document.getElementById("search-bar").addEventListener('input', function(event) {
  var searchVal = document.getElementById("search-bar").value;
  filterElements(searchVal);
});

document.getElementById("search-button").addEventListener('click', function(event) {
  updateUrl();
});



// On load
const urlParams = new URLSearchParams(window.location.search);
const searchVal = urlParams.get('search');
console.log(searchVal);
document.getElementById("search-bar").value = searchVal
filterElements(searchVal);
