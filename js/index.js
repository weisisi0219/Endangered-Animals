const animalList = document.getElementById('animallist');

for (var i = 0; i < animalInfo.length; i++) {
  var animalTemplate = `
  <div class="div-block-3">
  <div class="image-container w-container"><img height="100" loading="lazy" width="436"
    src="${animalInfo[i].image}"
    alt="" class="image-2"></div><a href="javascript:void(0)" class="button-2 w-button">${animalInfo[i].Name}</a></div>`

  var singleAnimal = document.createElement('div');
  singleAnimal.setAttribute("class", "w-dyn-item w-col w-col-4");
  singleAnimal.setAttribute("date-index", animalInfo[i].id);
  singleAnimal.innerHTML = animalTemplate;
  animalList.appendChild(singleAnimal);
}

const animalBlockList = document.getElementsByClassName("w-dyn-item");

for (var m = 0; m < animalBlockList.length; m++) {
  animalBlockList[m].addEventListener("click", function () {
    console.log(this.getAttribute("date-index"));
    localStorage.setItem("index", this.getAttribute("date-index"));
    location.href = "animaldetail.html";

  })
}





